"use client";
import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  CustomDrawerLink,
  Label,
  Outline,
  Span,
  Hover,
  DrawerLinks,  // Added new styled component for drawer links
} from "./styles";
import EmiCalculator from "../EmiCalculator";

const Header = () => {
  const [visible, setVisibility] = useState(false);
  const pathname = usePathname(); // Detects the current route
  const isInsurancePage = pathname === "/insurance"; // Check if on Insurance page

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openEmiCalculator = () => {
    setIsModalVisible(true); // Open the EMI Calculator modal
  };

  const closeEmiCalculator = () => {
    setIsModalVisible(false); // Close the EMI Calculator modal
  };

  const toggleButton = () => {
    setVisibility(!visible);
  };

  // If we are on the Insurance page, hide all links except the logo
  if (isInsurancePage) {
    return (
      <Container>
        <LogoContainer href="/" aria-label="homepage">
          <SvgIcon src="LoanDhekho.png" width="220px"/>
        </LogoContainer>
      </Container>
      
    );
  }

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Hover>About Us</Hover>
        </CustomNavLinkSmall>

        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Hover>Our Mission</Hover>
        </CustomNavLinkSmall>

        <Link href='/insurance'>
        <CustomNavLinkSmall>
          <Hover>Insurance</Hover>
        </CustomNavLinkSmall>
        </Link>

        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>Contact Us</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  const DrawerItems  = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
        <>
          <DrawerLinks>
              <CustomDrawerLink onClick={() => scrollTo("about")}>
                <Hover>About Us</Hover>
              </CustomDrawerLink>

              <CustomDrawerLink onClick={() => scrollTo("mission")}>
                <Hover>Our Mission</Hover>
              </CustomDrawerLink>
              
              <CustomDrawerLink>
                 <Link href='/insurance'><Hover>Insurance</Hover></Link>
              </CustomDrawerLink>

              <CustomDrawerLink
                style={{ width: "180px" }}
              >
              <Span>
                <Button onClick={openEmiCalculator}>EMI Calculator</Button>
              </Span>
              <EmiCalculator isVisible={isModalVisible} onClose={closeEmiCalculator} />
              </CustomDrawerLink>
            </DrawerLinks>        
        </>
    )
  }

  return (
    <HeaderSection>
      {/* <SvgIcon src="LoanDekho.png" width="220px" height="auto" /> */}
      <Container>
        <Row justify="space-between" align="center">
        
      <LogoContainer href="/" aria-label="homepage">
        <SvgIcon src="LoanDhekho.png" width="220px"/>
      </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>

         {/* Drawer for smaller screens */}
          <Drawer closable={false} open={visible} onClose={toggleButton}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <Label onClick={toggleButton}>
                <Col span={12}>
                  <Menu>Menu</Menu>
                </Col>
                <Col span={12}>
                  <Outline />
                </Col>
              </Label>
            </Col>
            <DrawerItems />
          </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;

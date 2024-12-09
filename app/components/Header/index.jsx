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
  Label,
  Outline,
  Span,
  Hover
} from "./styles";

const Header = () => {
  const [visible, setVisibility] = useState(false);
  const pathname = usePathname(); // Detects the current route
  const isInsurancePage = pathname === "/insurance"; // Check if on Insurance page

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

  const toggleButton = () => {
    setVisibility(!visible);
  };

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
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;

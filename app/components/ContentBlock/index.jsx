"use client";
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";

import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  id,
  direction,
}) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="70%" height="70%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {Array.isArray(button) &&
                    button.map((item, id) => (
                      <Button
                        key={id}
                        color={item.color}
                        onClick={() => scrollTo("about")}
                      >
                        {item.title}
                      </Button>
                    ))}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {Array.isArray(section) &&
                      section.map((item, id) => (
                        <Col key={id} span={11}>
                          <SvgIcon
                            src={item.icon}
                            width="60px"
                            height="60px"
                          />
                          <MinTitle>{item.title}</MinTitle>
                          <MinPara>{item.content}</MinPara>
                        </Col>
                      ))}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;

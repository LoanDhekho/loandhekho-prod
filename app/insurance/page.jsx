"use client";

import React from 'react'
import { lazy } from "react";
import 'antd/dist/reset.css';
const ContentBlock = lazy(() => import("../components/ContentBlock"));
import InsuranceContent from "../content/InsuranceContent.json";
import Container from '../common/Container';
// import ContentBlock from '../components/ContentBlock';


import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { Button } from "../common/Button";
import { SvgIcon } from "../common/SvgIcon";

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
import Link from 'next/link';

const Insurance = () => {
  return (
    <>
    <Container>
      {/* <ContentBlock
          direction="left"
          title={InsuranceContent.title}
          content={InsuranceContent.text}
          section={InsuranceContent.section}
          button={InsuranceContent.button}
          icon="Insurance.svg"
          id="about"
        /> */}
<ContentSection>
<Fade direction='left' triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id='about'
          direction='left'
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src='/Insurance.svg' width="70%" height="70%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{InsuranceContent.title}</h6>
              <Content>{InsuranceContent.text}</Content>
              {'left' === "right" ? (
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
                    {Array.isArray(InsuranceContent.section) &&
                      InsuranceContent.section.map((item, id) => (
                        <Col key={id} span={11}>
                          <SvgIcon
                            src={item.icon}
                            width="60px"
                            height="60px"
                          />
                          <Link href = {item.link}>
                          <MinTitle>{item.title}</MinTitle>
                          </Link>
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

      </Container>
    </>
  )
}

export default Insurance
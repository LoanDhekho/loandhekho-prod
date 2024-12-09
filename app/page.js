"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import { Styles } from "./styles/styles";
import 'antd/dist/reset.css';

import { lazy } from "react";
import IntroContent from "../app/content/IntroContent.json";
import MiddleBlockContent from "../app/content/MiddleBlockContent.json";
import AboutContent from "../app/content/AboutContent.json";
import MissionContent from "../app/content/MissionContent.json";
import ProductContent from "../app/content/ProductContent.json";
import ContactContent from "../app/content/ContactContent.json";
import CardGrid from "../app/components/Cards";
import EmiCalculator from "../app/components/EmiCalculator";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Contact = lazy(() => import("./components/ContactForm"));
const MiddleBlock = lazy(() => import("./components/MiddleBlock"));
const Container = lazy(() => import("./common/Container"));
const ScrollToTop = lazy(() => import("../app/common/ScrollToTop"));
const ContentBlock = lazy(() => import("./components/ContentBlock"));

export default function Home() {
  return (
    <>
    {/* <Header /> */}
    <Container>
      <ScrollToTop />
      <CardGrid />
      <EmiCalculator />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="Intro.png"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="team.png"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="mission.png"
        id="mission"
      />
      {/* <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
    {/* <Footer /> */}
    </>
    
  );
}

// // components/EmailTemplate.js
// export const EmailTemplate = ({ firstName }) => (
//     <div>
//       <h1>Welcome, {firstName}!</h1>
//       <p>Thank you for joining LoanDekho. We're excited to have you on board.</p>
//     </div>
//   );
  
import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  const baseUrl = "https://loandhekho.com"

  export const EmailTemplate = ({ firstName }) => (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src={`${baseUrl}/img/svg/LoanDhekho.png`}
              width="200px"
              height="auto"
              alt="loandhekho"
            />
            <Hr style={hr} />
            <Text style={paragraph}>
            Hi! {firstName}. Thank you for reaching out to us. We have received your inquiry, and our team will get in touch with you shortly to assist you further. <br />
            We look forward to assisting you!
            </Text>
            <Text style={paragraph}>
            Best regards, <br />
            LoanDhekho.com
            </Text>
            <Button style={button} href="https://loandhekho.com">
              Visit Site
            </Button>
            <Hr style={hr} />
            <Text style={footer}>
              LoanDhekho.com, 3B-48, Shop no. 1, Ekta Park Shalimar Garden Ext. 2, Sahibabad, Uttar Pradesh
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default EmailTemplate;
  
  const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };
  
  const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
  };
  
  const box = {
    padding: "0 48px",
  };
  
  const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
  };
  
  const paragraph = {
    color: "#525f7f",
  
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left"
  };
  
  const anchor = {
    color: "#556cd6",
  };
  
  const button = {
    backgroundColor: "#656ee8",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    width: "100%",
    padding: "10px",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
  };
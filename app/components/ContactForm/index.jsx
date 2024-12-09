// "use client";
// import { Row, Col } from "antd";
// import { Slide } from "react-awesome-reveal";
// import { useForm } from "../../common/utils/useForm";
// import validate from "../../common/utils/validationRules";
// import { Button } from "../../common/Button";
// import Block from "../Block";
// import Input from "../../common/Input";
// import TextArea from "../../common/TextArea";
// import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

// const Contact = ({ title, content, id }) => {
//   const { values, errors, handleChange, handleSubmit } = useForm(validate);

//   const ValidationType = ({ type }) => {
//     const ErrorMessage = errors[type];
//     return <Span>{ErrorMessage}</Span>;
//   };

//   return (
//     <ContactContainer id={id}>
//       <Row justify="space-between" align="middle">
//         <Col lg={12} md={11} sm={24} xs={24}>
//           <Slide direction="left" triggerOnce>
//             <Block title={title} content={content} />
//           </Slide>
//         </Col>
//         <Col lg={12} md={12} sm={24} xs={24}>
//           <Slide direction="right" triggerOnce>
//             <FormGroup autoComplete="off" onSubmit={handleSubmit}>
//               <Col span={24}>
//                 <Input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={values.name || ""}
//                   onChange={handleChange}
//                 />
//                 <ValidationType type="name" />
//               </Col>
//               <Col span={24}>
//                 <Input
//                   type="text"
//                   name="email"
//                   placeholder="Your Email"
//                   value={values.email || ""}
//                   onChange={handleChange}
//                 />
//                 <ValidationType type="email" />
//               </Col>
//               <Col span={24}>
//                 <TextArea
//                   placeholder="Your Message"
//                   value={values.message || ""}
//                   name="message"
//                   onChange={handleChange}
//                 />
//                 <ValidationType type="message" />
//               </Col>
//               <ButtonContainer>
//                 <Button name="submit">Submit</Button>
//               </ButtonContainer>
//             </FormGroup>
//           </Slide>
//         </Col>
//       </Row>
//     </ContactContainer>
//   );
// };
// export default Contact;

// "use client";
// import { Row, Col } from "antd";
// import { Slide } from "react-awesome-reveal";
// import { useForm } from "../../common/utils/useForm";
// import validate from "../../common/utils/validationRules";
// import { Button } from "../../common/Button";
// import Block from "../Block";
// import Input from "../../common/Input";
// import TextArea from "../../common/TextArea";
// import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
// import { Toaster, toast } from "sonner"; // Import toast library

// const Contact = ({ title, content, id }) => {
//   const { values, errors, handleChange, handleSubmit } = useForm(validate);

//   const sendEmail = async (data) => {
//     try {
//       // Simulate email-sending functionality
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         toast.success("Email sent successfully!");
//       } else {
//         const error = await response.json();
//         toast.error(`Failed to send email: ${error.message}`);
//       }
//     } catch (err) {
//       toast.error(`Error: ${err.message}`);
//     }
//   };

//   const handleFormSubmit = (event) => {
//     handleSubmit(event, async () => {
//       await sendEmail(values);
//     });
//   };

//   const ValidationType = ({ type }) => {
//     const ErrorMessage = errors[type];
//     return <Span>{ErrorMessage}</Span>;
//   };

//   return (
//     <ContactContainer id={id}>
//       <Row justify="space-between" align="middle">
//         <Col lg={12} md={11} sm={24} xs={24}>
//           <Slide direction="left" triggerOnce>
//             <Block title={title} content={content} />
//           </Slide>
//         </Col>
//         <Col lg={12} md={12} sm={24} xs={24}>
//           <Slide direction="right" triggerOnce>
//             <FormGroup autoComplete="off" onSubmit={handleFormSubmit}>
//               <Col span={24}>
//                 <Input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={values.name || ""}
//                   onChange={handleChange}
//                 />
//                 <ValidationType type="name" />
//               </Col>
//               <Col span={24}>
//                 <Input
//                   type="text"
//                   name="email"
//                   placeholder="Your Email"
//                   value={values.email || ""}
//                   onChange={handleChange}
//                 />
//                 <ValidationType type="email" />
//               </Col>
//               <Col span={24}>
//                 <TextArea
//                   placeholder="Your Message"
//                   value={values.message || ""}
//                   name="message"
//                   onChange={handleChange}
//                 />
//                 <ValidationType type="message" />
//               </Col>
//               <ButtonContainer>
//                 <Button name="submit">Submit</Button>
//               </ButtonContainer>
//             </FormGroup>
//           </Slide>
//         </Col>
//       </Row>
//       <Toaster position="bottom-center" richColors />
//     </ContactContainer>
//   );
// };

// export default Contact;

"use client";

import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button type="submit" name="submit">Submit</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;

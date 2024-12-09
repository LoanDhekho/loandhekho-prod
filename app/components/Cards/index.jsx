"use client";

import React, { useState } from "react";
import { Card, Row, Col, Form, Input, Button, notification  } from "antd";
import {
  DollarCircleOutlined,
  HomeOutlined,
  CarOutlined,
  BookOutlined,
  ShopOutlined,
  SwapOutlined,
} from "@ant-design/icons";

// Define the card data
const cardData = [
  { title: "Car Loan", Icon: "/img/svg/car-loan.svg" },
  { title: "Home Loan", Icon: "/img/svg/home-loan.svg" },
  { title: "Personal Loan", Icon: "/img/svg/personal-loan.svg" },
  { title: "Business Loan", Icon: "/img/svg/business-loan.svg" },
  { title: "Education Loan", Icon: "/img/svg/education-loan.svg" },
  { title: "Loan against Property", Icon: "/img/svg/loan-against-property.svg" },
  { title: "Overdraft Limit", Icon: "/img/svg/od-limit.svg" },
];

const CardGrid = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseForm = () => {
    setSelectedCard(null);
  };

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          queryType: selectedCard?.title, // Include the selected card's title as query type
        }),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json(); // Read error details from the response
        console.error("Email Sending Error:", errorResponse);
        throw new Error(errorResponse.message || "Failed to send email");
      }
  
      const result = await response.json(); // Parse the response JSON
      console.log("Email Sent Successfully:", result); // Log the result for debugging
  
      notification.success({
        message: "Email Sent",
        description: "Your enquiry has been sent successfully!",
      });
  
      handleCloseForm();
    } catch (error) {
      console.error("Error while submitting the form:", error);
      notification.error({
        message: "Error",
        description: error.message || "Failed to send your enquiry. Please try again later.",
      });
    }
  };

  return (
    <>
      <div style={{ padding: "20px", marginTop: "25px" }}>
        <Row gutter={[16, 16]} justify="center">
          {cardData.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                onClick={() => handleCardClick(card)}
                style={{
                  textAlign: "center",
                  borderRadius: "8px",
                  padding: "10px",
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#f2f3f4",
                }}
              >
                <img
                  src={card.Icon}
                  alt={card.title}
                  style={{
                    width: "48px",
                    height: "48px",
                    marginBottom: "8px",
                  }}
                />
                {/* <card.Icon
                  style={{
                    fontSize: "32px",
                    color: "#1890ff",
                    marginBottom: "8px",
                  }}
                /> */}
                <h4 style={{ fontSize: "16px", margin: "0" }}>{card.title}</h4>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {selectedCard && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "#fff",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            width: "90%",
            maxWidth: "400px",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
            {selectedCard.title} Enquiry
          </h3>
          <Form layout="vertical" onFinish={handleFormSubmit}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please enter your phone number" }]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Enquiry"
              name="enquiry"
              rules={[{ required: true, message: "Please enter your query" }]}
            >
              <Input.TextArea placeholder="Enter your query" rows={3} />
            </Form.Item>
            <div style={{ textAlign: "right" }}>
              <Button onClick={handleCloseForm} style={{ marginRight: "10px" }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      )}

      {/* Background overlay */}
      {selectedCard && (
        <div
          onClick={handleCloseForm}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        />
      )}
    </>
  );
};

export default CardGrid;

// "use client";

// import React, { useState } from "react";
// import { Card, Row, Col, Form, Input, Button } from "antd";
// import {
//   DollarCircleOutlined,
//   HomeOutlined,
//   CarOutlined,
//   BookOutlined,
//   ShopOutlined,
//   SwapOutlined,
// } from "@ant-design/icons";
// import "./cards.scss";

// // Define the card data
// const cardData = [
//   { title: "Personal Loan", Icon: DollarCircleOutlined },
//   { title: "Home Loan", Icon: HomeOutlined },
//   { title: "Car Loan", Icon: CarOutlined },
//   { title: "Education Loan", Icon: BookOutlined },
//   { title: "Business Loan", Icon: ShopOutlined },
//   { title: "Debt Consolidation", Icon: SwapOutlined },
// ];

// const CardGrid = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//   };

//   const handleCloseForm = () => {
//     setSelectedCard(null);
//   };

//   const handleFormSubmit = (values) => {
//     console.log("Form Submitted: ", values);
//     alert(`Query Type: ${selectedCard?.title}, Name: ${values.name}`);
//     handleCloseForm();
//   };

//   return (
//     <>
//       <div className="cards-container">
//         <Row gutter={[16, 16]}>
//           {cardData.map((card, index) => (
//             <Col key={index} xs={24} sm={12} md={8} lg={6}>
//               <Card
//                 className="card"
//                 hoverable
//                 onClick={() => handleCardClick(card)}
//               >
//                 <card.Icon className="card-icon" />
//                 <h4 className="card-title">{card.title}</h4>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>

//       {selectedCard && (
//         <>
//           <div className="modal">
//             <h3 className="modal-title">{selectedCard.title} Enquiry</h3>
//             <Form layout="vertical" onFinish={handleFormSubmit}>
//               <Form.Item
//                 label="Name"
//                 name="name"
//                 rules={[{ required: true, message: "Please enter your name" }]}
//               >
//                 <Input placeholder="Enter your name" />
//               </Form.Item>
//               <Form.Item
//                 label="Phone"
//                 name="phone"
//                 rules={[
//                   { required: true, message: "Please enter your phone number" },
//                 ]}
//               >
//                 <Input placeholder="Enter your phone number" />
//               </Form.Item>
//               <Form.Item
//                 label="Email"
//                 name="email"
//                 rules={[
//                   { required: true, message: "Please enter your email" },
//                   { type: "email", message: "Please enter a valid email" },
//                 ]}
//               >
//                 <Input placeholder="Enter your email" />
//               </Form.Item>
//               <Form.Item
//                 label="Enquiry"
//                 name="enquiry"
//                 rules={[{ required: true, message: "Please enter your query" }]}
//               >
//                 <Input.TextArea placeholder="Enter your query" rows={3} />
//               </Form.Item>
//               <div className="form-actions">
//                 <Button
//                   onClick={handleCloseForm}
//                   className="cancel-button"
//                 >
//                   Cancel
//                 </Button>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//               </div>
//             </Form>
//           </div>
//           <div className="overlay" onClick={handleCloseForm} />
//         </>
//       )}
//     </>
//   );
// };

// export default CardGrid;

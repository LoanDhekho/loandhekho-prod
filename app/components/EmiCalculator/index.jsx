import React, { useState } from "react";
import { Button, Modal, Input, Row, Col, Typography, Card } from "antd";

const { Title, Text } = Typography;

const EmiCalculator = ({ isVisible, onClose }) => {
  const [loanAmount, setLoanAmount] = useState(null); // Default value is null
  const [interestRate, setInterestRate] = useState(null); // Default value is null
  const [loanTenure, setLoanTenure] = useState(null); // Default value is null
  const [loanEMI, setLoanEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If input is empty, set it to null for better control
    if (value === "") {
      if (name === "loanAmount") setLoanAmount(null);
      if (name === "interestRate") setInterestRate(null);
      if (name === "loanTenure") setLoanTenure(null);
      return;
    }

    // Validate and enforce minimum value of 1
    const numericValue = Math.max(1, parseFloat(value) || 0);

    if (name === "loanAmount") setLoanAmount(numericValue);
    if (name === "interestRate") setInterestRate(numericValue);
    if (name === "loanTenure") setLoanTenure(numericValue);
  };

  const calculateEMI = () => {
    if (interestRate === 0) {
      const emi = loanAmount / loanTenure;
      setLoanEMI(emi);
      setTotalAmount(Math.round(emi * loanTenure));
      setTotalInterest(0); // No interest for 0% rate
      return;
    }

    const emi =
      loanAmount *
      (interestRate / 12 / 100) *
      (Math.pow(1 + interestRate / 12 / 100, loanTenure) /
        (Math.pow(1 + interestRate / 12 / 100, loanTenure) - 1));

    setLoanEMI(emi);
    setTotalAmount(Math.round(loanTenure * emi));
    setTotalInterest(Math.round(loanTenure * emi) - loanAmount);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    });
  };

  // Disable button only if any field is empty or less than or equal to 0
  const isButtonDisabled =
    loanAmount === null ||
    loanAmount <= 0 ||
    interestRate === null ||
    interestRate <= 0 ||
    loanTenure === null ||
    loanTenure <= 0;

  return (
    <Modal
      title="Calculate Your Monthly EMI"
      visible={isVisible}
      onCancel={onClose}
      footer={null} // Disable default footer buttons
      width={600}
      bodyStyle={{ padding: "20px" }}
    >
      <Card bordered={false} style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <Title level={3} style={{ textAlign: "center" }}>
          <img
            src="/img/svg/emi-calculator.svg"
            alt="emi-calculator"
            style={{
              width: "48px",
              height: "48px",
              marginBottom: "8px",
              paddingRight: "8px",
            }}
          />
          EMI Calculator
        </Title>
        <Row gutter={16}>
          <Col span={12}>
            <Text style={{ fontSize: "12px", display: "block", marginBottom: "8px" }}>
              Loan Amount
            </Text>
            <Input
              prefix="₹"
              type="number"
              name="loanAmount"
              value={loanAmount === null ? "" : loanAmount}
              onChange={handleInputChange}
              placeholder="Enter loan amount"
              min={1}
              style={{ marginBottom: "16px" }}
            />
          </Col>
          <Col span={12}>
            <Text style={{ fontSize: "12px", display: "block", marginBottom: "8px" }}>
              Interest Rate (%)
            </Text>
            <Input
              type="number"
              name="interestRate"
              value={interestRate === null ? "" : interestRate}
              onChange={handleInputChange}
              placeholder="Enter interest rate"
              min={1}
              style={{ marginBottom: "16px" }}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Text style={{ fontSize: "12px", display: "block", marginBottom: "8px" }}>
              Loan Tenure (months)
            </Text>
            <Input
              type="number"
              name="loanTenure"
              value={loanTenure === null ? "" : loanTenure}
              onChange={handleInputChange}
              placeholder="Enter loan tenure"
              min={1}
              style={{ marginBottom: "16px" }}
            />
          </Col>
        </Row>
        <Button
          type="primary"
          block
          onClick={calculateEMI}
          style={{
            marginBottom: "20px",
            opacity: isButtonDisabled ? 0.5 : 1,
            pointerEvents: isButtonDisabled ? "none" : "auto",
          }}
          disabled={isButtonDisabled}
        >
          Calculate EMI
        </Button>
        <div style={{ textAlign: "center" }}>
          <Text strong>Loan EMI: {formatCurrency(Math.round(loanEMI))}</Text>
          <br />
          <Text>Total Interest Payable: {formatCurrency(totalInterest)}</Text>
          <br />
          <Text>Total Amount Payable: {formatCurrency(totalAmount)}</Text>
        </div>
      </Card>
    </Modal>
  );
};

export default EmiCalculator;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartDetails from "../../Shared/CartDetails/CartDetails";

const Payment = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <h2>Payment with Stripe</h2>
        </Col>
        <Col xs={12} md={4}>
          <CartDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;

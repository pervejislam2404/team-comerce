import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CartDetails from "../../Shared/CartDetails/CartDetails";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51K7XyvJKxcqmkg6L2nlek1vfb9SzEHP7sfruW01atdpByP9gzMRBXimosUx4Zje2JXzodQI0Inpvz0ZK7zLPEGB900ZSL5N3K7"
);

const Payment = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState({});
  useEffect(() => {
    fetch(`https://limitless-hollows-74908.herokuapp.com/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [id]);
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={6} className=" me-2 p-3 shadow">
          <h2 className="py-3">Website Name</h2>
          <div className="border p-2">
            <p>Contact: {orders.orderPhone}</p>
            <hr />
            <p>
              Ship to: {orders.orderAddress} {orders.orderCity}{" "}
              {orders.orderPostalCode}
            </p>
          </div>
          <h5 className="py-3">Payment With Stripe</h5>
          {orders?.totalShoppingCost && (
            <Elements stripe={stripePromise}>
              <CheckOutForm orders={orders} id={id} />
            </Elements>
          )}
        </Col>
        <Col xs={12} md={4} className="py-5">
          <CartDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;

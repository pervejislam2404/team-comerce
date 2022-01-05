import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CartDetails from "../../Shared/CartDetails/CartDetails";

const ContactInformation = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [orders, setOrders] = useState({});
  const { order } = orders;
  let totalShoppingCost = 0;
  for (const product in order) {
    if (Object.hasOwnProperty.call(order, product)) {
      const element = order[product];
      totalShoppingCost = totalShoppingCost + element.total;
    }
  }
  useEffect(() => {
    fetch(`https://limitless-hollows-74908.herokuapp.com/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [id]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.totalShoppingCost = totalShoppingCost;
    data._id = orders._id;
    fetch("https://limitless-hollows-74908.herokuapp.com/order", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate(`/payment/${orders._id}`);
        }
      });
  };
  return (
    <Container className="my-5">
      <Row className="d-flex justify-content-center ">
        <Col xs={12} md={6} className=" me-5 p-3 shadow">
          <div className="">
            <h1>Team commerce</h1>
            <h4>Shipping address</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="w-100 p-3 my-3"
                {...register("orderEmail")}
                placeholder="Email"
                required
              />

              <input
                className="w-100 p-3 my-3"
                {...register("orderName")}
                placeholder="Your Name"
                required
              />
              <input
                className="w-100 p-3 my-3"
                {...register("orderPhone")}
                placeholder="Your Phone"
                type="number"
                required
              />

              <input
                className="w-100 p-3 my-3"
                {...register("orderAddress")}
                placeholder="Address"
                required
              />

              <input
                className="w-100 p-3 my-3"
                {...register("orderCity")}
                placeholder="City"
                required
              />
              <input
                className="w-100 p-3 my-3"
                {...register("orderPostalCode")}
                placeholder="Postal Code"
                required
                type="number"
              />
              <div className="d-flex justify-content-center pb-3">
                <Button variant="primary" type="submit">
                  Continue To Shipping
                </Button>
              </div>
            </form>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <CartDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInformation;

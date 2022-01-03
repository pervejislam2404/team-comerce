import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
    <Container>
      <Row>
        <Col xs={12} md={7} className="border">
          <div className="">
            <h1>Website Name</h1>
            <h4>Shipping address</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className="w-100 py-3 my-3" {...register("orderEmail")} />

              <input
                style={{ width: "49%" }}
                className=" py-3 my-3 me-1"
                {...register("orderName")}
              />
              <input
                style={{ width: "49%" }}
                className=" py-3 my-3 ms-2"
                {...register("orderPhone")}
              />

              <input
                className="w-100 py-3 my-3"
                {...register("orderAddress")}
              />

              <input
                style={{ width: "49%" }}
                className=" py-3 my-3 me-1"
                {...register("orderCity")}
              />
              <input
                style={{ width: "49%" }}
                className=" py-3 my-3 ms-2"
                {...register("orderPostalCode")}
              />
              <input type="submit" />
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

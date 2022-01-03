import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CartDetails = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState({});
  console.log(orders);
  const { order } = orders;
  useEffect(() => {
    fetch(`https://limitless-hollows-74908.herokuapp.com/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [id]);

  let totalShoppingCost = 0;
  for (const product in order) {
    if (Object.hasOwnProperty.call(order, product)) {
      const element = order[product];
      totalShoppingCost = totalShoppingCost + element.total;
    }
  }


  return (
    <div>
      {orders?.order?.map((order) => (
        <div
          key={order._id}
          style={{ display: "flex", justifyContent: "space-between", py: 1 }}
        >
          <div>
            <img width="100px" height="100px" src={order.img} alt="" />
            <Badge bg="secondary">{order.quantity}</Badge>
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: "16px", pl: 3 }}>
              {order.name}
            </p>
          </div>
          <div>
            <p style={{ fontWeight: 500, fontSize: "16px", pl: 3 }}>
              $ {order.total}
            </p>
          </div>
        </div>
      ))}
      <hr />
      <div className="d-flex justify-content-between">
        <p>Subtotal</p>
        <p>$ {totalShoppingCost}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Shopping Cost</p>
        <p>$ 0.00</p>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <p>Total</p>
        <p>$ {totalShoppingCost}</p>
      </div>
    </div>
  );
};

export default CartDetails;

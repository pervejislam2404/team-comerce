import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ManageAllOrders = () => {
  const Swal = require("sweetalert2");
  const user = useSelector((state) => state.statesCounter.user);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://limitless-hollows-74908.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders, user.email]);

  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      // text: "you will Cancel never back to many",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel order ",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://limitless-hollows-74908.herokuapp.com/allOrders`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your order cancel successful",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="d-flex justify-content-center pb-5">
        <h2>Manage All Orders</h2>
      </div>

      {orders.map((order) => (
        <div className="shadow bg-white text-black px-5 my-3">
          <div className="d-flex justify-content-between py-3">
            <h5>Order id: {order._id}</h5>
            <Button
              variant="primary"
              onClick={() => handleDeleteOrder(order._id)}
            >
              Cencle order
            </Button>
          </div>

          {order.order.map((od) => (
            <div className="d-flex justify-content-between align-items-center pb-3">
              <div className="">
                <img width="100" src={od.url} alt="" />
              </div>
              <div className="">
                <p>{od.name}</p>
              </div>
              <div className="">
                <p>Qty: {od.quantity}</p>
              </div>
              <div className="">
                <p> {order.status} </p>
              </div>
              <div className="">
                <p> {order.payment && "Paid"} </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ManageAllOrders;

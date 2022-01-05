import React, { useEffect, useState } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const ManageAllOrders = () => {
  let count = 0;
  const Swal = require("sweetalert2");
  const user = useSelector((state) => state.statesCounter.user);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://limitless-hollows-74908.herokuapp.com/allOrders`)
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
        fetch(`https://limitless-hollows-74908.herokuapp.com/order/${id}`, {
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

  const handleStatusUpdate = (id) => {
    const status = {
      id: id,
      status: "approved",
    };
    fetch("https://limitless-hollows-74908.herokuapp.com/orderStatusUpdate", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order approved successful",
          });
        }
      });
  };

  return (
    <Container fluid>
      <div className="d-flex justify-content-center pb-5">
        <h2>Manage All Orders</h2>
      </div>
      {orders.length ? (
        ""
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="info" />
        </div>
      )}
      {orders.length && (
        <Table responsive striped bordered hover variant="dark">
          {/* table header */}
          <thead>
            <tr className="text-center">
              <th className="fs-3 text-white">Sl</th>
              <th className="fs-3 text-white">UserName</th>
              <th className="fs-3 text-white">Order_ID</th>
              <th className="fs-3 text-white">Payment</th>
              <th className="fs-3 text-white">Status</th>
              <th className="fs-3 text-white">Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {/* looping data */}

            {orders.map((order) => (
              <tr key={order._id} className="text-center">
                <td className="fs-4 text-white ">{++count}</td>
                <td className="fs-4 text-white ">{order.user}</td>
                <td className="fs-4 text-white ">{order._id.slice(20, 25)}</td>
                <td className="fs-4 text-white ">
                  {order.payment ? "Paid" : "Unpaid"}
                </td>
                <td className="fs-4 text-white ">
                  {order.status === "approved" ? (
                    "Approved"
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => handleStatusUpdate(order._id)}
                    >
                      Approved
                    </Button>
                  )}
                </td>
                <td className="fs-4 text-white ">
                  <Button
                    variant="primary"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ManageAllOrders;

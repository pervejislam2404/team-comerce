import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserOrders = () => {
  let count = 0;
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
      text: "you will Cancel never back to many",
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
  return (
    <div>
      <div className="d-flex justify-content-center pb-5">
        <h2>My orders</h2>
      </div>
      <Table responsive striped bordered hover variant="dark">

        {/* table header */}
        <thead>
          <tr className='text-center'>
            <th className='fs-3 text-white'>Sl</th>
            <th className='fs-3 text-white'>Order_ID</th>
            <th className='fs-3 text-white'>Cancel Order</th>
          </tr>
        </thead>
        <tbody>
          {/* looping data */}

          {orders.map(order =>
            <tr key={order._id} className='text-center'>
              <td className='fs-4 text-white '>{++count}</td>
              <td className='fs-4 text-white '>{order._id}</td>
              <td className='fs-4 text-white '><Button
                variant="primary"
                onClick={() => handleDeleteOrder(order._id)}
              >
                Remove
              </Button></td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* {orders.map((order) => (
        <div className="shadow bg-white text-black px-5 my-3">
          <div className="d-flex justify-content-between py-3">
            <h4>Order id: {order._id}</h4>
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
                <h4>{od.name}</h4>
              </div>
              <div className="">
                <h4>Qty: {od.quantity}</h4>
              </div>
              <div className="">
                <h4> {order.status} </h4>
              </div>
              <div className="">
                <h4> {order.payment && "Paid"} </h4>
              </div>
            </div>
          ))}
        </div>
      ))} */}
    </div>
  );
};

export default UserOrders;

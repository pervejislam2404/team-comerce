import React, { useEffect, useState } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserOrders = () => {
  let count = 0;
  const Swal = require("sweetalert2");
  const navigate = useNavigate();
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
      {orders.map((order) => (
        <Table responsive striped bordered hover variant="dark">
          {/* table header */}
          <thead>
            <tr className="text-center">
              <th className="fs-3 text-white">Sl</th>
              <th className="fs-3 text-white">Name</th>
              <th className="fs-3 text-white">Product Name</th>
              <th className="fs-3 text-white">Product Image</th>
              <th className="fs-3 text-white">Status</th>
              <th className="fs-3 text-white">
                <Button
                  variant="primary"
                  onClick={() => handleDeleteOrder(order._id)}
                >
                  Remove Order
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* looping data */}

            {order?.order?.map((od) => (
              <tr key={order._id} className="text-center">
                <td className="fs-4 text-white ">{++count}</td>
                <td className="fs-4 text-white ">{order.user}</td>

                <td className="fs-4 text-white ">{od.name}</td>
                <td className="fs-4 text-white ">
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src={od.url}
                    alt=""
                  />
                </td>
                <td className="fs-4 text-white ">{order.status}</td>
                <td className="fs-4 text-white ">
                  {order.payment ? (
                    "Paid"
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() =>
                        navigate(`/contactInformation/${order._id}`)
                      }
                    >
                      Pay
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default UserOrders;

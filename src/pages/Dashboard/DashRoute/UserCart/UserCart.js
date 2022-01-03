import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { getStoredCart, removeFromDb } from "../../../../utilities/fakedb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserCart = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const user = useSelector((state) => state.statesCounter.user);
  // console.log(user);
  useEffect(() => {
    fetch("https://limitless-hollows-74908.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (products.length) {
      const saveCart = getStoredCart();
      const storedCart = [];
      for (const key in saveCart) {
        const addedProduct = products.find((product) => product._id === key);
        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCarts(storedCart);
    }
  }, [products]);

  for (const product of carts) {
    const total = parseInt(product.price) * parseInt(product.quantity);
    product.total = total;
  }

  let totalShoppingCost = 0;
  for (const product of carts) {
    totalShoppingCost = totalShoppingCost + product.total;
  }

  const handleRemove = (id) => {
    removeFromDb(id);
    window.location.reload();
  };

  const handleOrder = () => {
    const order = {};
    order.user = user.displayName;
    order.email = user.email;
    order.order = carts;
    order.status = "pending";
    fetch("https://limitless-hollows-74908.herokuapp.com/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate(`/contactInformation/${data.insertedId}`);
        }
      });
  };
  return (
    <div className="bg-white">
      <Row>
        <Col xs={12} md={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            {carts.length && (
              <tbody>
                {carts?.map((pd) => (
                  <tr>
                    <td>
                      <img width="100" src={pd.img} alt="" />
                    </td>
                    <td>
                      <h2 className="text-black">{pd.name}</h2>
                    </td>
                    <td>
                      <h4 className="text-black">$ {pd.price}</h4>
                    </td>
                    <td>{pd.quantity}</td>
                    <td>
                      <h4 className="text-black">$ {pd.total}</h4>
                    </td>
                    <td>
                      <Button
                        onClick={() => handleRemove(pd._id)}
                        variant="primary"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </Table>
        </Col>
        <Col xs={12} md={4}>
          <h4 className="text-black ms-4 py-2">Cart Totals</h4>
          <Row className="text-black d-flex justify-content-center">
            <Col xs={12} md={5} className="py-3 border ">
              Subtotal
            </Col>
            <Col xs={12} md={5} className="py-3 border ">
              $ {totalShoppingCost}
            </Col>
            <Col xs={12} md={5} className="py-3 border ">
              Total
            </Col>
            <Col xs={12} md={5} className="py-3 border ">
              $ {totalShoppingCost}
            </Col>
          </Row>
          <Button variant="primary" className="ms-4 mt-3" onClick={handleOrder}>
            Proceed to checkout
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default UserCart;

/* import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { addToDb } from "../../../utilities/fakedb";

const AddToCartModal = (props) => {
  const { name, url, price, description, _id } = props.product;
  console.log(url);
  console.log(props.pro);
  const handleAddToDb = (id) => {
    addToDb(id);
    props.onHide();
  };
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Row className="p-4">
          <Col md={6}>
            <img width="100%" src={props.product.url} alt="" />
          </Col>
          <Col md={6}>
            <h2>{name}</h2>
            <h4>$ {price}</h4>
            <p>{description}</p>
            <Button variant="primary" onClick={() => handleAddToDb(_id)}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default AddToCartModal;
 */

import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
const AddReview = () => {
  const Swal = require("sweetalert2");
  const { register, handleSubmit, reset } = useForm();
  const user = useSelector((state) => state.statesCounter.user);

  // sending review data to db
  const onSubmit = (data) => {
    reset();
    data.img = user.photoURL;
    axios
      .post(
        "https://limitless-hollows-74908.herokuapp.com/saveUserReview",
        data
      )
      .then(
        (res) =>
          res.data &&
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Review added successful",
          })
      );
  };
  return (
    // review data form
    <Container data-aos="zoom-in-up">
      <h2 className="text-center">Give Us a Review</h2>
      <hr className="w-25 mx-auto" />
      <form
        className="mt-3 mx-auto pt-2 w-50"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          required
          placeholder="name"
          defaultValue={user.displayName}
          className="reservation w-100"
          {...register("name")}
        />
        <textarea
          rows="4"
          required
          placeholder="Description"
          className="reservation w-100"
          {...register("description")}
        />
        <input
          type="number"
          min="1"
          max="5"
          required
          placeholder="Rating out of 5"
          className="reservation w-100"
          {...register("star")}
        />
        <button className="adminAdd btncolr w-25 mx-auto mt-4 fs-3 ">
          Add
        </button>
      </form>
    </Container>
  );
};

export default AddReview;

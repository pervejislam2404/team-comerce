import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { clearTheCart } from "../../../utilities/fakedb";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Spinner } from "react-bootstrap";

const CheckOutForm = ({ orders, id }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const Swal = require("sweetalert2");
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, serProcessing] = useState(false);
  const [clientSecret, serClientSecret] = useState("");
  useEffect(() => {
    fetch(`https://limitless-hollows-74908.herokuapp.com/create-payment-intent`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => serClientSecret(data.clientSecret));
  }, [orders]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    serProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      // console.log(paymentMethod);
    }
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: orders.orderName,
            email: orders.orderEmail,
            phone: orders.orderPhone,
            address: orders.orderAddress,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment processing was successful");
      serProcessing(false);
      clearTheCart();
      // save to database

      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        transaction: paymentIntent.id,
        laset4: paymentMethod.card.last4,
      };

      fetch(`https://limitless-hollows-74908.herokuapp.com/payment/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your payment processing was successful",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/dashboard/myOrder");
              } else {
                navigate("/dashboard/myOrder");
              }
            });
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <Button
            className="mt-3"
            variant="primary"
            type="submit"
            disabled={!stripe || success}
          >
            Pay $ {orders?.totalShoppingCost}
          </Button>
        )}
      </form>
      {error && <Alert severity="error">{error}</Alert>}
    </>
  );
};

export default CheckOutForm;

import React from "react";
import { Form, Link } from "react-router-dom";
import FormInput from "./FormInput";

const CheckoutForm = () => {
  return (
    <div>
      <Form method="POST">
        <h4 className="text-xl font-medium capitalize mb-4">
          shipping information
        </h4>
        <FormInput type="text" label="first name" />
        <FormInput type="text" label="address" />
        <Link to="/orders" className="btn btn-primary btn-block mt-8 uppercase">
          place your order
        </Link>
      </Form>
    </div>
  );
};

export default CheckoutForm;

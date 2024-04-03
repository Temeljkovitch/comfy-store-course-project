import React from "react";
import { FormInput, SubmitButton } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg gap-y-4 "
      >
        <h4 className="text-center text-3xl font-bold capitalize">login</h4>
        <FormInput
          name="identifier"
          type="email"
          label="email"
          defaultValue="test@test.com"
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitButton value="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block uppercase">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-1.5 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;

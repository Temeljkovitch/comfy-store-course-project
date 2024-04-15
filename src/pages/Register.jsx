import { FormInput, SubmitButton } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("Account created successfully!");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please, check your credentials!";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg gap-y-4 "
      >
        <h4 className="text-center text-3xl font-bold capitalize">register</h4>
        <FormInput name="username" type="text" label="username" />
        <FormInput name="email" type="email" label="email" />
        <FormInput name="password" type="password" label="password" />
        <div className="mt-4">
          <SubmitButton value="register" />
        </div>

        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-1.5 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;

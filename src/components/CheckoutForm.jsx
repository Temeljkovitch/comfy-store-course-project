import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import { customFetch, formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

export const checkoutAction =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const { cartItems, numItemsInCart, orderTotal } =
      store.getState().cartState;
    const { token } = store.getState().userState.user;
    const formattedPrice = formatPrice(orderTotal);

    try {
      const response = await customFetch.post(
        "/orders",
        {
          data: {
            address: address,
            cartItems: cartItems,
            chargeTotal: orderTotal,
            name: name,
            numItemsInCart: numItemsInCart,
            orderTotal: formattedPrice,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      toast.success("Order placed succesfully!");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error placing your order. Please, try again.";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) {
        return redirect("/login");
      }
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <div>
      <Form method="POST" className="flex flex-col gap-y-4">
        <h4 className="text-xl font-medium capitalize">shipping information</h4>
        <FormInput type="text" label="first name" name="name" />
        <FormInput type="text" label="address" name="address" />
        <div className="mt-4">
          <SubmitButton text="place your order" />
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;

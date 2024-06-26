import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const checkoutLoader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to checkout!");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const { numItemsInCart } = useSelector((state) => state.cartState);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="place your order" />
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;

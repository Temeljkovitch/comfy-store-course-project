import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useSelector((state) => state.userState);
  const { numItemsInCart } = useSelector((state) => state.cartState);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          <Link
            to={user ? "/checkout" : "/login"}
            className="btn btn-primary btn-block mt-8 uppercase"
          >
            {user ? "proceed to checkout" : "please, login"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;

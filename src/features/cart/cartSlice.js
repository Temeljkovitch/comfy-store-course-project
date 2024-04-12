import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 1000,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('item added to cart');
    },
    // addItem: (state, action) => {
    //   const product = action.payload;

    //   // Checking if the same product is already in the cart
    //   const currentItem = state.cartItems.find(
    //     (item) => item.cartID === product.cartID
    //   );
    //   if (currentItem) {
    //     // If we find the same product in the cart, we're going to change the "amount" property of it, by adding to it the new "amount" of the new product. Example: There's already a red lamp product in the cart with the "amount" property of 2. If we want to add a new red lamp product with the "amount" property of 3, we're  instead going to change the "amount" property of the "old" lamp product to 5.
    //     currentItem.amount += product.amount;
    //   } else {
    //     state.cartItems.push(product);
    //   }
    //   state.numItemsInCart += product.amount;
    //   state.cartTotal += product.price * product.amount;
    //   cartSlice.caseReducers.calculateTotals(state);
    //   toast.success("Product added to cart!");
    // },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const currentItem = state.cartItems.find(
        (item) => item.cartID === cartID
      );
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );
      state.numItemsInCart -= currentItem.amount;
      state.cartTotal -= currentItem.price * currentItem.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Product removed from cart!");
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success('Cart updated');
    },
    // editItem: (state, action) => {
    //   const { cartID, amount } = action.payload;
    //   const currentItem = state.cartItems.find(
    //     (item) => item.cartID === cartID
    //   );
    //   state.numItemsInCart += amount - currentItem.amount;
    //   state.cartTotal += currentItem.price * (amount - currentItem.amount);
    //   currentItem.amount = amount;
    //   cartSlice.caseReducers.calculateTotals(state);
    //   toast.success("Cart updated!");
    // },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(initialState));
      return initialState;
    },
    calculateTotals: (state) => {
      state.tax = state.cartTotal * 0.1;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, clearCart, editItem, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;

import React from "react";
import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
} from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { redirect, useLoaderData } from "react-router-dom";

const ordersQuery = (params, user) => {
  return {
    queryKey: ["orders", user.username, params.page ? Number(params.page) : 1],
    queryFn: () =>
      customFetch("/orders", {
        params: params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const ordersLoader =
  (store, queryClient) =>
  async ({ request }) => {
    const { user } = store.getState().userState;
    const url = new URL(request.url);
    const params = Object.fromEntries(url.searchParams.entries());

    if (!user) {
      toast.warn("You must be logged in to checkout!");
      return redirect("/login");
    }

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error getting your order(s). Please, try again";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please, make an order." />;
  }

  return (
    <>
      <SectionTitle text="your orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;

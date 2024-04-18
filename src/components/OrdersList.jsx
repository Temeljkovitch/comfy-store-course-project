import React from "react";
import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const OrdersList = () => {
  const { orders, meta } = useLoaderData();

  return (
    <>
      {/* Header */}
      <div className="mt-8">
        <h4 className="mb-4 font-medium capitalize">
          total orders: {meta.pagination.total}
        </h4>
      </div>
      {/* Orders */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* Head */}
          <thead>
            <tr>
              <th className="capitalize">name</th>
              <th className="capitalize">address</th>
              <th className="capitalize">products</th>
              <th className="capitalize">cost</th>
              <th className="hidden sm:block capitalize">date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order.id}>
                  <td>{order.attributes.name}</td>
                  <td>{order.attributes.address}</td>
                  <td>{order.attributes.numItemsInCart}</td>
                  <td>{order.attributes.orderTotal}</td>
                  <td className="hidden sm:block">
                    {day(order.attributes.createdAt).format(
                      "hh:mm a - MMM Do, YYYY"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrdersList;

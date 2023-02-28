import React from "react";
import { Link } from "react-router-dom";

const OrdersRow = ({ product }) => {
  return (
    <tr>
      <td>
        <div className="mask mask-squircle w-12 h-12">
          <img
            src={product.img}
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </td>
      <td>{product.product}</td>
      <td>{product.price}</td>
      <td>{product?.seller}</td>
      <th>
      <button className="btn btn-warning btn-xs">Pay</button>
      </th>
    </tr>
  );
};

export default OrdersRow;

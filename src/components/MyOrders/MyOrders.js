import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import OrdersRow from "./OrdersRow";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://buy-sell-server-roan.vercel.app/my-orders?email=${user.email}`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [user.email]);
  console.log(products);

  return (
    <section>
      <section>
        <h2 className="text-3xl font-bold">My Orders</h2>
        <div className="my-5">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Seller</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product) => (
                  <OrdersRow key={product.email} product={product}></OrdersRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MyOrders;

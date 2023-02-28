import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Details = () => {
  const data = useLoaderData()[0];
  console.log(data);
  const {user} = useContext(AuthContext)

  const handleOrder = ()=>{
    const order = {
      product: data.name,
      category: data.category,
      price: data.price,
      shipping: data.shipping,
      img: data.img,
      seller: data.seller,
      buyerName: user.displayName,
      email: user.email,
    }

    fetch("http://localhost:5000/order",{
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data){
        toast.success('Order placed successfully')
      }
    })

  }

  return (
    <section>
      <div className="card card-side w-9/12 mx-auto mt-20 border bg-base-100 shadow-xl">
        <figure>
          <img className="w-96" src={data?.img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data?.name}</h2>
          <div>
            <p className="text-start">Brand: {data?.seller}</p>
            <p className="text-start">Category: {data?.category}</p>
            <p className="text-start">Price: {data?.price}</p>
            <p className="text-start">Shipping: {data?.shipping}</p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={handleOrder} className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

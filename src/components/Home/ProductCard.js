import React from "react";
import { Link } from "react-router-dom";
import img from './../../assets/img/photo.png'

const ProductCard = ({product}) => {
    console.log()
  return (
    <section>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
          className=""
            src={product.img ? product.img : img}
            alt={product.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product?.name?.length > 15 ? product?.name?.slice(0,15) : product?.name}
          </h2>
          <p className="text-start">Category: {product.category}</p>
          <p>Price: {product?.price}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${product.id}`} className="badge badge-outline">More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;

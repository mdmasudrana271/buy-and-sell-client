import React from "react";

const ProductCard = ({product}) => {
    console.log()
  return (
    <section>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-64"
            src={product.img}
            alt={product.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.name}
          </h2>
          <p>{product.category}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;

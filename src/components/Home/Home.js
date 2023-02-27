import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("product.json");
      const json = await response.json();
      setProducts(json);
    }
    fetchData();
  }, []);

  console.log(products);

  return (
    <section>
      <Banner></Banner>
      <h1 className="text-3xl mt-10">Our Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mx-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default Home;

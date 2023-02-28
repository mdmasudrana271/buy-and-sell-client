import React, { useContext, useEffect, useState,} from "react";
import { AuthContext } from "../../context/AuthProvider";
import Banner from "./Banner";
import ProductCard from "./ProductCard";

const Home = () => {
  
  const {products, setProducts} = useContext(AuthContext)

  useEffect(()=>{
    fetch("http://localhost:5000/all-data")
    .then(res=> res.json())
    .then(data => {
      setProducts(data)
    })
  },[setProducts])



  const handleSearch = (event)=>{
    event.preventDefault()
    const form = event.target;
    const value = form.search.value;
    // setSearch(value)

    fetch(`http://localhost:5000/search?search=${value}`)
    .then(res=> res.json())
    .then(data => {
      console.log(data)
      setProducts(data)
    })
  }


  console.log(products)





  return (
    <section>
      <Banner></Banner>
      <h1 className="text-3xl my-10">Our Product</h1>
      <form action="" onSubmit={handleSearch } className="flex justify-center items-center">
        <input
          type="text"
          name="search"
          placeholder="Type here"
          className="input shadow-xl border w-full max-w-xs"
        />
        <button type="submit" className="btn btn-info border-none">Search</button>
      </form>
      {
        products.length === 0 ? 
        <div className="my-[200px]">
          <p>Product No Found</p>
        </div>
        : 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mx-10">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      }
    </section>
  );
};

export default Home;

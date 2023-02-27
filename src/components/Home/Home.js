import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
          const response = await fetch("product.json");
          const json = await response.json();
          setProducts(json);
        }
        fetchData();
      }, []);

      console.log(products)

    

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    products.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </section>
    );
};

export default Home;
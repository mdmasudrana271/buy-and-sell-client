import React from "react";

import img from "./../../assets/img/banner.png";
import banner from "./../../assets/img/banner2.png";

const Banner = () => {




  return (
    <section className="bg-orange-400">
      <div className="container md:flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 md:flex-row md:justify-between">
        <div className=" mt-8  w-full">
          <img
            src={banner}
            alt=""
            className=""
          />
        </div>
        <div className=" mt-8  w-full">
          <img
            src={img}
            alt=""
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

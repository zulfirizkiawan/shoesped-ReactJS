import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../molecules/ProductCard";

const RelatedProducts = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-12 md:mt-24 mb-24 md:mb-0">
      <h1 className="text-2xl font-bold mb-4">Anda mungkin juga suka</h1>
      <Carousel responsive={responsive} itemClass="px-[10px]">
        <ProductCard
          imgProduct="/assets/p1.png"
          price={300000}
          title="Jordan air 1"
        />
        <ProductCard
          imgProduct="/assets/p2.png"
          price={400000}
          title="Jordan air 1"
        />
        <ProductCard
          imgProduct="/assets/p3.png"
          price={200000}
          title="Jordan air 1"
        />
        <ProductCard
          imgProduct="/assets/p4.png"
          price={100000}
          title="Jordan air 1"
        />
      </Carousel>
    </div>
  );
};

export default RelatedProducts;

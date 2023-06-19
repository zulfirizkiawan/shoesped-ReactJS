import ProductCard from "@/components/molecules/ProductCard";
import Wrapper from "@/components/organism/Wrapper";
import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full md:py-10">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-10">
          <h1 className="text-2xl md:text-3xl mb-5 font-semibold leading-tight">
            Running Shoes
          </h1>
        </div>

        {/* product start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-14 px-5 md:px-0">
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
        </div>
        {/* End */}
      </Wrapper>
    </div>
  );
};

export default Category;

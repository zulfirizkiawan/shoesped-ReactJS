import Size from "@/components/atoms/Size";
import ProductDetailsCarousel from "@/components/molecules/ProductDetailsCarousel";
import RelatedProducts from "@/components/organism/RelatedProducts";
import Wrapper from "@/components/organism/Wrapper";
import Link from "next/link";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { NumericFormat } from "react-number-format";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-10">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-10 lg:gap-20">
          {/* left colum start */}
          <div className="w-full md:w-auto flex-1 max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* End */}

          {/* right colum start */}
          <div className="flex-1 pt-3">
            <h1 className="text-3xl font-semibold">Jordan Retro 6 G</h1>
            <h1 className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </h1>
            <h1 className="text-lg font-semibold">
              <NumericFormat
                value={4000000}
                prefix="Rp "
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
              />
            </h1>
            <h1 className="text-md font-medium text-gray-800">
              incl. of taxes
            </h1>

            {/* Product Size Range Start */}
            <div className="mb-2">
              <div className="flex justify-between my-4">
                <div className="text-md font-semibold">Size</div>
                <div className="text-md font-medium text-gray-500 cursor-pointer">
                  Size Guide
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Size size={36} />
              <Size size={37} />
              <Size size={38} />
              <Size size={39} />
              <Size size={40} disable />
              <Size size={41} />
              <Size size={42} disable />
              <Size size={43} />
            </div>
            {/* End */}

            {/* Show Error Start */}
            <div className="text-red-600 mt-1">Diperlukan pemilihan size</div>
            {/* End */}

            {/* Button add to cart Start */}
            <Link href="/cart">
              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium
            transition-transform active:scale-95 mb-3 mt-5 hover:opacity-70"
              >
                Tambah keranjang
              </button>
            </Link>
            {/* End */}

            {/* Button whishlist Start */}
            <button
              className="w-full py-4 rounded-full border border-black text-black text-lg font-medium
            transition-transform active:scale-95 flex items-center justify-center gap-3 hover:opacity-70 mb-10"
            >
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* End */}

            <div>
              <h1 className="text-lg font-bold mb-2">Product Details</h1>
              <p className="text-md mb-5">
                Jordan Retro 6 G, sepatu ikonik yang menggabungkan kekuatan dan
                gaya. Dengan desain yang legendaris, sepatu ini memancarkan aura
                keanggunan dan keunggulan. Detail yang menawan, mulai dari
                bentuknya yang aerodinamis hingga bahan berkualitas tinggi,
                menjadikan sepatu ini pilihan utama para penggemar Jordan.
              </p>
              <p className="text-md mb-5">
                Dalam setiap jahitan dan tekstur, terlihat keahlian dan
                perhatian terhadap detail. Jordan Retro 6 G memadukan unsur
                keindahan dan performa. Dengan teknologi terkini dan desain
                klasik yang tak tergoyahkan, sepatu ini memberikan kenyamanan
                dan gaya yang tak tertandingi
              </p>
            </div>
          </div>
          {/* End */}
        </div>

        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

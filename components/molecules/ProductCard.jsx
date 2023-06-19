import Link from "next/link";
import React from "react";
import { NumericFormat } from "react-number-format";

const ProductCard = ({ imgProduct, price, title }) => {
  return (
    <Link
      href="/product/jordan"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <img src={imgProduct} alt="produk" className="w-full rounded-2xl" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-normal">{title}</h2>
        <div className="flex items-center text-gray-700">
          <p className="mr-2 text-base font-semibold">
            <NumericFormat
              value={price}
              prefix="Rp "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </p>
          <p className="text-sm font-medium line-through">
            <NumericFormat
              value={price}
              prefix="Rp "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </p>
          <p className="ml-auto text-sm font-medium text-green-500">20% off</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

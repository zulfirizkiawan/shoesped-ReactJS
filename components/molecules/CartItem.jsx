import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NumericFormat } from "react-number-format";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-12 md:w-32">
        <img src="/assets/product-1.webp" alt="img cart product" />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-gray-800">
            Jordan Retro 6 G
          </div>
          <div className="text-sm md:text-base font-medium text-gray-800 block md:hidden">
            Men&apos;s Golf Shoes
          </div>
          <div className="text-sm md:text-base font-medium text-gray-700 mt-2">
            <NumericFormat
              value={20000}
              prefix="Rp "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </div>
        </div>
        <div className="text-sm md:text-base font-medium text-gray-800 hidden md:block">
          Men&apos;s Golf Shoes
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-base">
            <div className="flex items-center gap-1">
              <div className="font-medium">Size :</div>
              <select className="px-3 bg-white rounded-sm hover:text-black">
                <option value="1">36</option>
                <option value="2">37</option>
                <option value="3">38</option>
                <option value="4">39</option>
                <option value="5">40</option>
                <option value="6">41</option>
                <option value="7">42</option>
                <option value="8">43</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-medium">Quantity :</div>
              <select className="px-2 bg-white rounded-sm hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-base md:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

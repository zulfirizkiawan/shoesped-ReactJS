import CartItem from "@/components/molecules/CartItem";
import Wrapper from "@/components/organism/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NumericFormat } from "react-number-format";

const Cart = () => {
  return (
    <div className="w-full md:py-10">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-10">
          <h1 className="text-2xl md:text-3xl mb-5 font-semibold leading-tight">
            Keranjang
          </h1>
        </div>

        {/* Cart content start */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          <div className="flex-[2]">
            <div className="text-lg font-bold"> Item Keranjang</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="flex-1">
            <div className="text-lg font-bold"> Ringkasan</div>
            <div className="text-lg bg-black/[0.05] rounded-xl p-3 mt-3">
              <div className="flex justify-between">
                <h4 className="uppercase text-sm md:text-base font-semibold text-black">
                  Subtotal
                </h4>
                <div className="text-sm md:text-base font-medium text-black">
                  <NumericFormat
                    value={20000}
                    prefix="Rp "
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                  />
                </div>
              </div>

              <div className="text-sm md:text-base py-5 border-t mt-5">
                Subtotal adalah jumlah total harga pesanan Anda sebelum diskon
                diberlakukan, termasuk bea dan pajak. Namun, perlu diingat bahwa
                subtotal tidak mencakup biaya pengiriman dan biaya transaksi
                internasional.
              </div>
            </div>

            <button className="w-full py-4 mt-8 rounded-full bg-black text-white text-lg font-medium transition active:scale-95 mb-3 hover:opacity-75">
              Checkout
            </button>
          </div>
        </div>
        {/* Cart content end */}

        {/* This is Empty screens start */}
        {/* <div className="flex-[2] flex flex-col items-center pb-12 md:-mt-14">
          <Image
            src="/assets/empty-cart.jpg"
            width={400}
            height={400}
            alt=""
            className="w-[400px] md:w-[500px]"
          />
          <span className="text-xl font-bold">Keranjang anda kosong</span>
          <span className="text-center mt-4">
            Sepertinya Anda belum menambahkan apa pun ke keranjang Anda.
            <br />
            Silakan dan jelajahi kategori teratas
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div> */}
        {/* This is Empty screens end */}
      </Wrapper>
    </div>
  );
};

export default Cart;

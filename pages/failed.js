import Wrapper from "@/components/organism/Wrapper";
import Link from "next/link";
import React from "react";

const failed = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">Pembayaran gagal!</div>
          <div className="text-base mt-5">
            Untuk pertanyaan terkait produk apa pun, kirimkan email ke
          </div>
          <div className="underline">shoeshopcontact@shop.com</div>

          <Link href="/" className="font-bold mt-5">
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default failed;

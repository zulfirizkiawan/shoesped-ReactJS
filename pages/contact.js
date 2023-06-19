import Wrapper from "@/components/organism/Wrapper";
import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { TbMessage } from "react-icons/tb";
import { MdOutlineLocationCity } from "react-icons/md";

const contact = () => {
  return (
    <div className="w-full md:py-10">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-10">
          <h1 className="text-2xl md:text-3xl mb-5 font-semibold leading-tight">
            Hubungi kami
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
          <div className="text-center flex flex-col items-center">
            <IoIosPhonePortrait size={100} className="mb-6" />
            <p>083-378-982-983</p>
            <p>Produk & Pesanan: 24 jam sehari, 7 hari seminggu</p>
            <p>Info Perusahaan & Pertanyaan: 09:00 - 18:00, Senin - Jumat</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <TbMessage size={100} className="mb-6" />
            <p>24 jam sehari</p>
            <p>7 hari seminggu</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <MdOutlineLocationCity size={100} className="mb-6" />
            <p>LOKASI TOKO</p>
            <p>Temukan toko ritel Nike di dekat Anda</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default contact;

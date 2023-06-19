import Wrapper from "@/components/organism/Wrapper";
import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className="w-full md:py-10">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-8 md:mt-10">
          <h1 className="text-2xl md:text-3xl mb-5 font-semibold leading-tight">
            Tentang Kita
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div className=" flex justify-center">
            <Image
              src="/assets/logo.svg"
              width={300}
              height={300}
              alt=""
              className="w-[300px] max-w-[400px]"
            />
          </div>
          <div>
            <h6 className="uppercase font-semibold text-lg">Logo Kami</h6>
            <p className="text-justify font-normal text-base text-gray-600 mt-3">
              Logo Nike terkenal dengan desain "Swoosh" yang khas, yang
              merupakan tanda yang sangat dikenal di seluruh dunia. Filosofi di
              balik logo Nike adalah mencerminkan gerakan dan kecepatan. Swoosh
              merepresentasikan gerakan dinamis dan energi yang tak terbatas.
              Ini menggambarkan semangat atletik, kebebasan, dan keinginan untuk
              terus maju. Logo Nike menginspirasi orang untuk bergerak, berjuang
              untuk kesuksesan, dan melampaui batasan mereka.
            </p>
          </div>
        </div>

        <div className="bg-[url('/assets/slide-1.png')] w-full max-w-[1280px] h-full md:h-[500px] mt-12 bg-center rounded-lg">
          <div className="flex flex-col items-center justify-center p-5 md:px-[100px] bg-black/50 text-white h-full rounded-lg">
            <h6 className="font-semibold mb-5">Sejarah NIKE</h6>
            <p>
              Nike adalah perusahaan olahraga global yang didirikan pada tahun
              1964 oleh Bill Bowerman dan Phil Knight. Awalnya dikenal sebagai
              "Blue Ribbon Sports," perusahaan ini mulai beroperasi sebagai
              distributor sepatu olahraga merek Jepang di Amerika Serikat. Pada
              tahun 1971, perusahaan mengubah namanya menjadi Nike, mengambil
              nama dewi Yunani kemenangan.
            </p>
            <p className="mt-2">
              Selama dekade berikutnya, Nike terus mengembangkan produk inovatif
              dan mengamankan kemitraan dengan atlet terkenal seperti Michael
              Jordan, Tiger Woods, dan Serena Williams. Pada tahun 1984, Nike
              meluncurkan sepatu basket revolusioner mereka, Air Jordan, yang
              menjadi fenomena budaya dan menciptakan gelombang kegilaan di
              kalangan penggemar sepatu.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          <div className="flex flex-col justify-center">
            <h6 className="uppercase font-semibold text-lg">Visi</h6>
            <p className="text-justify font-normal text-base text-gray-600 mt-3">
              "Untuk membawa inovasi dan inspirasi kepada setiap atlet di
              dunia."
            </p>
            <h6 className="uppercase font-semibold text-lg mt-5">Misi</h6>
            <div className="text-gray-600 mt-3 font-normal text-base">
              <ol className="list-decimal list-inside">
                <li className="mb-2">
                  Inovasi Produk: Nike berkomitmen untuk terus mengembangkan
                  produk-produk inovatif yang meningkatkan performa atlet dan
                  memenuhi kebutuhan konsumen.
                </li>
                <li className="mb-2">
                  Inspirasi: Nike ingin memberikan inspirasi kepada atlet di
                  semua tingkatan, dari pemula hingga atlet profesional, untuk
                  menggapai potensi mereka yang paling tinggi.
                </li>
                <li className="mb-2">
                  Dampak Positif: Nike berusaha untuk menciptakan dampak positif
                  di masyarakat melalui berbagai program sosial, perlindungan
                  lingkungan, dan advokasi untuk keadilan sosial.
                </li>
              </ol>
            </div>
          </div>
          <div className=" flex justify-center">
            <Image
              src="/assets/p1.png"
              width={300}
              height={300}
              alt=""
              className="w-full max-w-[500px] rounded-lg"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default about;

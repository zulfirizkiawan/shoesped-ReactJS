import ProductCard from "@/components/molecules/ProductCard";
import MainBanner from "@/components/organism/MainBanner";
import Wrapper from "@/components/organism/Wrapper";

export default function Home() {
  return (
    <main className="h-full">
      <MainBanner />
      <Wrapper>
        {/* Heading dan paragraph start */}
        <div className="text-center max-w-[800px] mx-auto my-12 md:my-20">
          <h2 className="text-2xl md:text-4xl mb-5 font-semibold">
            Bantalan Optimal untuk Lari Jarak Jauh
          </h2>
          <p className="text-sm md:text-xl">
            Midsole Nike ZoomX yang ringan dikombinasikan dengan tinggi tumpukan
            yang lebih besar untuk memberikan bantalan optimal saat melakukan
            lari jarak jauh yang memanjang.
          </p>
        </div>
        {/* End */}

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
    </main>
  );
}

import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import React from "react";

const productDetail = () => {
  return (
    <div className="w-full md: py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] ">
          {/* left */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
            <ProductDetailsCarousel />
          </div>

          {/* right */}
          <div className="flex-[1] py-3 ">
            {/* title */}
            <div className="text-[34px] font-semibold mb-2 ">teri maa</div>
            {/* subtitle */}
            <div className="text-lg font-semibold mb-5 ">men's shoes</div>

            {/* price */}
            <div className="text-lg font-semibold ">MRP: RS.32233 </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default productDetail;

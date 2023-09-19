import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

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

            {/* sizes */}
            <div className="mb-10">
              <div className="flex justify-between mb-2 ">
                <div className="text-md font-semibold">Select size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select guide
                </div>
              </div>
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  uk1
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  uk1
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  uk1
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  uk1
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  uk1
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  uk1
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  uk1
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  uk1
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed opacity-50 bg-black/[0.1]">
                  uk1
                </div>
              </div>

              {/* error for size selection */}
              <div className="text-red-400 mt-1">
                Size selection is required
              </div>
            </div>

            {/* add to cart */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to cart
            </button>
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                asdfsa awfdsabhsdlf asdfhu fsa asdfsa awfdsabhsdlf asdfhu fsa
                asdfsa awfdsabhsdlf asdfhu fsa asdfsa awfdsabhsdlf asdfhu fsa
                asdfsa awfdsabhsdlf asdfhu fsa asdfsa awfdsabhsdlf asdfhu fsa
                asdfsa awfdsabhsdlf asdfhu fsa asdfsa awfdsabhsdlf asdfhu fsa
                asdfsa awfdsabhsdlf asdfhu fsa asdfsa awfdsabhsdlf asdfhu fsa
                asdfsa awfdsabhsdlf asdfhu fsa asdfsa awfdsabhsdlf asdfhu fsa
                asdfsa awfdsabhsdlf asdfhu fsa asdfsa awfdsabhsdlf asdfhu fsa
              </div>
            </div>
          </div>
        </div>

        {/* related prodect */}
        <div>
          <RelatedProducts />
        </div>
      </Wrapper>
    </div>
  );
};

export default productDetail;

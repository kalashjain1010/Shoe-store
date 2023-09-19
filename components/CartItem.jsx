import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { updateCart, removeFromCart } from "@/store/cartSlice";
// import { useDispatch } from "react-redux";
const CartItem = ({ data }) => {
  // const p = data.attributes;

  // const dispatch = useDispatch();

  // const updateCartItem = (e, key) => {
  //     let payload = {
  //         key,
  //         val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
  //         id: data.id,
  //     };
  //     dispatch(updateCart(payload));
  // };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp" />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            hgad
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            wdsafasfaisudgoiajsdfo;j
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377;32233
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          dsgaadsf
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1">uk3</option>
                <option value="1">uk3</option>
                <option value="1">uk3</option>
                <option value="1">uk3</option>
                <option value="1">uk3</option>
                <option value="1">uk3</option>
                <option value="1">uk3</option>
                <option value="1">uk4</option>
              </select>

              <div className="flex items-center gap-1">
                <div className="font-semibold">quantity:</div>
                <select className="hover:text-black">
                  <option value="1">uk3</option>
                  <option value="1">uk3</option>
                  <option value="1">uk3</option>
                  <option value="1">uk3</option>
                  <option value="1">uk3</option>
                  <option value="1">uk3</option>
                  <option value="1">uk3</option>
                  <option value="1">uk4</option>
                </select>
              </div>
            </div>
          </div>
          <RiDeleteBin6Line className="ursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

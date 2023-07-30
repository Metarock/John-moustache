"use client";
import { ProductSizeOps } from "@/types";
import React, { useState } from "react";
import * as Radio from "@radix-ui/react-radio-group";
import { cn } from "@/utils/helpers";

interface Props {
  sizes: ProductSizeOps[];
}

const ProductSizes = ({ sizes }: Props) => {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <>
      {" "}
      <div className="mt-6">
        <h3 className="text-sm text-fontSecondary">
          Sizes <span className="text-requiredColor">*</span>
        </h3>

        <Radio.Root
          className="mt-2"
          value={selectedSize}
          onValueChange={setSelectedSize}
        >
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-3">
            {sizes.map((size) => (
              <Radio.Item
                key={size.id}
                value={size.label}
                className={cn(
                  selectedSize === size.label
                    ? "border border-darkGreyBorder"
                    : "border-2",
                  "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                )}
              >
                {size.label}
              </Radio.Item>
            ))}
          </div>
        </Radio.Root>
      </div>
      <div className="mt-10">
        <button
          disabled={!selectedSize}
          className="flex max-w-xs flex-1 uppercase items-center justify-center rounded-md border border-darkGreyBorder text-fontPrimary px-8 py-3 text-base font-medium hover:bg-gray-100 disabled:bg-gray-100 disabled:text-fontSecondary disabled:border-lightGreyBorder focus:outline-none focus:ring-2 focus:ring-darkGreyBorder focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full transition-colors ease-in-out duration-200"
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ProductSizes;

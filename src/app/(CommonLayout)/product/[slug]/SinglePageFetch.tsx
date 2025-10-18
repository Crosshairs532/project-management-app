"use client";

import Gallery from "@/components/Gallary/Gallary";
import ProductDetailsSkeleton from "@/components/ui/DetailPageSk";
import { useSingleProductQuery } from "@/lib/api/services/productApi";
import Link from "next/link";
import React, { use } from "react";

const SinglePageFetch = ({ slug, product }) => {
  const single_product = slug;
  const { data, isFetching } = useSingleProductQuery({
    productname: single_product,
  });
  console.log(single_product, data);
  if (isFetching) {
    return <ProductDetailsSkeleton />;
  }

  console.log(product.images);
  return (
    <>
      <h1 className="  mt-[12vh] text-3xl md:text-2xl lg:text-4xl p-6">
        Product Details
      </h1>
      <div className="container mx-auto p-6 md:flex gap-12">
        <div className=" w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden">
          <Gallery images={product?.images} />
        </div>

        <div className="w-full  p-4 md:w-1/2 flex flex-col justify-between">
          <div className="mb-6">
            <h1 className="text-4xl font-extrabold mb-2">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4 cursor-pointer hover:underline">
              <img
                src={product.category.image}
                alt={product.category.name}
                className="w-12 h-12 rounded-full object-cover border border-[#0D1821]"
              />
              <span className="text-[#0D1821] font-semibold">
                {product.category.name}
              </span>
            </div>

            <p className="text-[#0D1821] mb-4">{product.description}</p>

            <p className="text-3xl font-bold text-[#4E6E5D] mb-6">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePageFetch;

"use client";

import getToken from "@/components/getToken";
import { EmptyDemo } from "@/components/product_comp/Empty";
import { PaginationDemo } from "@/components/product_comp/Pagination";
import ProductList from "@/components/product_comp/ProductList";
import SearchFilter from "@/components/product_comp/SearchFilter";
import LoadingProduct from "@/components/ui/Loading";
import { Pagination } from "@/components/ui/pagination";
import {
  useGetAllProductsQuery,
  useSearchProductsQuery,
  useTotalLengthQuery,
} from "@/lib/api/services/productApi";
import { useAppSelector } from "@/lib/hooks";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const ProductPage = () => {
  const { data: totalFetch, isFetching: totalFetchLoading } =
    useTotalLengthQuery({});
  const params = useSearchParams();
  const offset = params.get("offset");
  const limit = params.get("limit");
  const categoryId = params.get("categoryId");
  const searchedText = params.get("searchedText");

  const {
    data: products,
    isFetching,
    isLoading,
    refetch,
    ...other
  } = searchedText
    ? useSearchProductsQuery({ searchedText, offset, limit })
    : useGetAllProductsQuery(
        { offset, limit, categoryId },
        { skip: totalFetchLoading }
      );
  if (isFetching) {
    return <LoadingProduct isLoaded={isFetching} />;
  }

  return products ? (
    <div className=" ">
      <ProductList products={products} />
      <PaginationDemo products={products} totalFetch={totalFetch} />
    </div>
  ) : (
    <EmptyDemo name={"product"} />
  );
};

export default ProductPage;

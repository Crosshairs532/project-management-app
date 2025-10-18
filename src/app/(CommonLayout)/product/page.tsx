"use client";

import { EmptyDemo } from "@/components/product_comp/Empty";
import { PaginationDemo } from "@/components/product_comp/Pagination";
import ProductList from "@/components/product_comp/ProductList";
import SearchFilter from "@/components/product_comp/SearchFilter";
import LoadingProduct from "@/components/ui/Loading";
import { Pagination } from "@/components/ui/pagination";
import {
  useGetAllProductsQuery,
  useSearchProductsQuery,
  useTotalLengthProductQuery,
} from "@/lib/api/services/productApi";
import { useAppSelector } from "@/lib/hooks";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const ProductPage = () => {
  const { data: totalFetch, isFetching: totalFetchLoading } =
    useTotalLengthProductQuery({});
  const params = useSearchParams();
  let searchParams = {};
  const offset = params?.get("offset");
  const limit = params?.get("limit");
  const categoryId = params?.get("categoryId");
  const searchedText = params?.get("searchedText");

  if (offset) {
    searchParams[offset] = offset;
  }
  if (limit) {
    searchParams[limit] = limit;
  }
  if (categoryId) {
    searchParams[categoryId] = categoryId;
  }

  // const {
  //   data: products,
  //   isFetching,
  //   isLoading,
  //   refetch,
  //   ...other
  // } = searchedText
  //   ? useSearchProductsQuery({ searchedText, offset, limit })
  //   : useGetAllProductsQuery(searchParams, { skip: totalFetchLoading });

  const hasSearch = Boolean(searchedText);

  const searchQuery = useSearchProductsQuery(
    { searchedText, offset, limit },
    { skip: !hasSearch }
  );

  const allProductsQuery = useGetAllProductsQuery(searchParams, {
    skip: hasSearch,
  });

  const products = hasSearch ? searchQuery.data : allProductsQuery.data;
  const isFetching = hasSearch
    ? searchQuery.isFetching
    : allProductsQuery.isFetching;
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

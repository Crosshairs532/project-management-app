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

  const {
    data: products,
    isFetching,
    isLoading,
    refetch,
    ...other
  } = useGetAllProductsQuery(
    { offset, limit },
    {
      skip: totalFetchLoading,
    }
  );

  if (isFetching) {
    return <LoadingProduct isLoaded={isFetching} />;
  }

  return products ? (
    <div className=" mt-[30vh]">
      <SearchFilter />
      <ProductList products={products} />
      <PaginationDemo products={products} totalFetch={totalFetch} />
    </div>
  ) : (
    <EmptyDemo />
  );
};

export default ProductPage;

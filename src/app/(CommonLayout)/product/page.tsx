"use client";

import getToken from "@/components/getToken";
import { EmptyDemo } from "@/components/product_comp/Empty";
import FilterPage from "@/components/product_comp/FilterPage";
import { PaginationDemo } from "@/components/product_comp/Pagination";
import ProductList from "@/components/product_comp/ProductList";
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
  const { data, isFetching: totalFetch } = useTotalLengthQuery({});
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
      skip: totalFetch,
    }
  );

  if (isFetching) {
    return <LoadingProduct isLoaded={isFetching} />;
  }

  return products ? (
    <div>
      <FilterPage />
      <PaginationDemo products={products} />

      <ProductList products={products} />
    </div>
  ) : (
    <EmptyDemo />
  );
};

export default ProductPage;

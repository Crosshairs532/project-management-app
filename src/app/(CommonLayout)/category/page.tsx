"use client";

import CategoryList from "@/components/category_comp/CategoryList";
import { EmptyDemo } from "@/components/product_comp/Empty";
import { PaginationDemo } from "@/components/product_comp/Pagination";
import LoadingProduct from "@/components/ui/Loading";
import {
  useGetAllCategoryQuery,
  useTotalLengthQuery,
} from "@/lib/api/services/categoryApi";
import { useSearchParams } from "next/navigation";

const CategoryPage = () => {
  const { data: totalFetch, isFetching: totalFetchLoading } =
    useTotalLengthQuery({});
  const params = useSearchParams();

  const offset = params.get("offset");
  const limit = params.get("limit");

  const {
    data: category,
    isFetching,
    isLoading,
    refetch,
    ...other
  } = useGetAllCategoryQuery(
    { offset, limit },
    {
      skip: totalFetchLoading,
    }
  );

  if (isFetching || totalFetchLoading || isLoading) {
    return <LoadingProduct isLoaded={isFetching} />;
  }

  return category ? (
    <div className=" ">
      <CategoryList products={category} />
      <PaginationDemo products={category} totalFetch={totalFetch} />
    </div>
  ) : (
    <EmptyDemo name={"category"} />
  );
};

export default CategoryPage;

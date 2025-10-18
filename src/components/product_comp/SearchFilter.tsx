import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { CategoryFilter } from "./CategoryFilter";

const SearchFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <div className=" mt-[10vh] flex justify-between mb-4">
      <div className="search "></div>
      <div className="category_filter">
        <CategoryFilter />
      </div>
    </div>
  );
};

export default SearchFilter;

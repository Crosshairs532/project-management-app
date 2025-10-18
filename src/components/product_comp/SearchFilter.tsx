import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return <div></div>;
};

export default SearchFilter;

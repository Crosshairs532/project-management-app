"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetAllCategoryQuery } from "@/lib/api/services/categoryApi";
import { P } from "framer-motion/dist/types.d-BJcRxCew";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [position, setPosition] = React.useState("bottom");

  const { data, isFetching } = useGetAllCategoryQuery({});

  const createQueryString = React.useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const handleCategory = (e) => {
    console.log(e);

    const params = new URLSearchParams(searchParams.toString());
    params.set("categoryId", e);
    console.log(params.toString());
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Search by category</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {isFetching && (
          <p className=" text-center text-sm">No Categories to show..</p>
        )}
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {data?.map((category, idx) => {
            return (
              <DropdownMenuRadioItem
                onClick={() => handleCategory(category.id)}
                value={`${category.id}`}
              >
                {category.name}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

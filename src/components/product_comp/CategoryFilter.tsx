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

export function CategoryFilter() {
  const [position, setPosition] = React.useState("bottom");
  const { data, isFetching } = useGetAllCategoryQuery({});

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
              <DropdownMenuRadioItem value={`${category.name}`}>
                {category.name}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

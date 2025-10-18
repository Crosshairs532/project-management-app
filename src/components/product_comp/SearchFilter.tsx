import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { CategoryFilter } from "./CategoryFilter";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

const SearchFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();
    const param = new URLSearchParams();
    const searchedText = e.target.searchedText.value;
    param.set("searchedText", searchedText);
    param.set("offset", "0");
    param.set("limit", "10");
    router.replace(`${pathname}?${param.toString()}`);
  };

  return (
    <div className=" mt-[10vh] flex-col md:flex lg:flex justify-between mb-4">
      <div className="search ">
        <form
          className=" flex items-center gap-1"
          onSubmit={handleSearch}
          action=""
        >
          <InputGroup>
            <InputGroupInput
              name="searchedText"
              type="text"
              placeholder="Search..."
            />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
          <Button type="submit" variant="outline">
            Search
          </Button>
        </form>
      </div>
      <div className="category_filter">
        <CategoryFilter />
      </div>
    </div>
  );
};

export default SearchFilter;

import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ products }) => {
  return (
    <>
      <h1 className=" text-4xl mt-[15vh]">
        List of <span className=" text-[#A44A3F]">Categories</span>
      </h1>
      <div className=" grid   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => (
          <CategoryCard key={idx} product={product} />
        ))}
      </div>
    </>
  );
};

export default CategoryList;

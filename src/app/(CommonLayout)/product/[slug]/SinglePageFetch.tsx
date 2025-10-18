"use client";

import { useSingleProductQuery } from "@/lib/api/services/productApi";
import React, { use } from "react";

const SinglePageFetch = ({ slug }) => {
  const single_product = slug;
  const { data, isFetching } = useSingleProductQuery({
    productname: single_product,
  });

  if (isFetching) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return <div>{data?.name}</div>;
};

export default SinglePageFetch;

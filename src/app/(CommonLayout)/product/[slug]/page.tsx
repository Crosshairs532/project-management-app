import React from "react";
import SinglePageFetch from "./SinglePageFetch";

const SingleProductPage = async ({ params }) => {
  const { slug } = await params;

  return <SinglePageFetch slug={slug} />;
};

export default SingleProductPage;

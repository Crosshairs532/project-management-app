import React from "react";
import SinglePageFetch from "./SinglePageFetch";

const SingleProductPage = async ({ params }) => {
  const { slug } = await params;

  const dummy = {
    category: {
      createdAt: "2025-09-30T11:07:09.824206+00:00",
      description: null,
      id: "9c1129eb-cb7f-4c34-a94e-193a40f37a87",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      name: "Clothes",
      updatedAt: "2025-09-30T11:07:09.824206+00:00",
    },
    createdAt: "2025-09-29T11:09:16.110463+00:00",
    description: "test product description",
    id: "0133b509-e436-4a14-b5c4-91b2a19aadc4",
    images: ["https://laravelpoint.com/files/p_img.jpg"],
    name: "test product 1133",
    price: 1000,
    slug: "test-product-1133",
    updatedAt: "2025-09-30T11:09:16.110463+00:00",
  };
  return <SinglePageFetch slug={slug} product={dummy} />;
};

export default SingleProductPage;

import { EmptyDemo } from "@/components/product_comp/Empty";
import React from "react";

const ProductPage = () => {
  let product = 0;

  return product ? <div>Producs page</div> : <EmptyDemo />;
};

export default ProductPage;

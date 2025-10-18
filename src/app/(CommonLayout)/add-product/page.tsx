"use client";
import React from "react";
import ProductForm from "./ProductForm";
import { useGetAllCategoryQuery } from "@/lib/api/services/categoryApi";

import toast from "react-hot-toast";
import { useAddProductMutation } from "@/lib/api/services/productApi";

const AddPage = () => {
  const { data, isFetching } = useGetAllCategoryQuery({});
  const [addProduct, { data: AddedProduct, isLoading }] = useAddProductMutation(
    {}
  );

  const handleSubmit = async (data) => {
    try {
      const id = toast.loading("Adding Product");
      const res = await addProduct(data);

      if (res.error) {
        toast.error("Product Could not be created!", {
          id: id,
        });

        return;
      }
      toast.success("Product created Successfully", {
        id: id,
      });
    } catch (error) {
      toast.error("Product Could not be created!");
    }
  };
  return (
    <ProductForm
      categories={data}
      onSubmit={handleSubmit}
      isFetching={isFetching}
    />
  );
};

export default AddPage;

"use client";
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
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ProductForm = ({ categories, onSubmit, isFetching }) => {
  const [images, setImages] = useState([""]);
  const [category, setCategory] = useState(null);
  const [categoryError, setCategoryError] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [position, setPosition] = useState("bottom");

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const addImageField = () => setImages([...images, ""]);

  const handleCategory = (e) => {
    setCategory(e);
  };
  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (!category) {
          setCategoryError("Category is required");
          return;
        }
        setCategoryError("");
        onSubmit({ ...data, images, categoryId: category });
      })}
      className="max-w-2xl mx-auto p-6 bg-[#EFF1F3] rounded-lg"
    >
      <h2 className="text-2xl text-[#0D1821] font-bold mb-6">
        Create New <span className=" text-[#A44A3F]">Product</span>
      </h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Product Name</label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="w-full border bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:#0D1821"
        />
        {errors.name && (
          <small className=" text-red-500">Name is required</small>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Description</label>
        <textarea
          {...register("description", { required: true })}
          className="w-full bg-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:#0D1821"
          rows={4}
        />
        {errors.description && (
          <small className=" text-red-500">Description is required</small>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Price</label>
        <input
          type="text"
          {...register("price", { required: true })}
          className="w-full bg-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:#0D1821"
        />
        {errors.price && (
          <small className=" text-red-500">Price is required</small>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Images (URLs)</label>
        {images?.map((img, index) => (
          <input
            required
            key={index}
            type="text"
            value={img}
            onChange={(e) => handleImageChange(index, e.target.value)}
            placeholder="Image URL"
            className=" bg-white w-full mb-2 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:#0D1821"
          />
        ))}
        <button
          type="button"
          onClick={addImageField}
          className="text-[#AD8A64] font-medium hover:underline"
        >
          + Add another image
        </button>
      </div>

      <div className="mb-6">
        <label className="block font-medium mb-1">Category</label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Search by category</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {isFetching && (
              <p className=" text-center text-sm">No Categories to show..</p>
            )}
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              {categories?.map((category, idx) => {
                return (
                  <DropdownMenuRadioItem
                    key={idx}
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
        <small className=" text-red-500">{categoryError}</small>
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer bg-[#4E6E5D] text-white py-3 rounded-lg hover:bg-[#4E6E5D]/90 font-semibold transition-colors"
      >
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;

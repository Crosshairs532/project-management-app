import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useUpdateProductMutation } from "@/lib/api/services/productApi";
import toast from "react-hot-toast";

export function ProductDialogue({ children, product }) {
  const [updateProduct, { data, isError, isLoading, isSuccess }] =
    useUpdateProductMutation({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: product.id,
      name: e.target.name.value,
      description: e.target.description.value,
    };
    try {
      const toastId = toast.loading("Updating..");
      const res = updateProduct(data);

      console.log(res);

      toast.success("Updated Successfully", {
        id: toastId,
      });
    } catch (error) {
      toast.error("Update failed!");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <label htmlFor="name-1">Product Name:</label>
              <Input
                id="name-1"
                name="name"
                defaultValue={`${product?.name}`}
              />
            </div>
            <div className="grid gap-3">
              <label htmlFor="name-1">Description:</label>
              <Input
                id="username-1"
                name="description"
                defaultValue={`${product?.description}`}
              />
            </div>
          </div>
          <DialogClose asChild>
            <Button type="submit">Save changes</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}

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

export function ProductDialogue({ children, product }) {
  console.log(product);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      description: e.target.description.value,
    };

    console.log(data);
  };
  return (
    <Dialog>
      <form onSubmit={handleSubmit}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
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
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

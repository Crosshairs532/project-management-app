import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";
import { getValidImages } from "@/lib/utils";

const CategoryCard = ({ product }) => {
  const valid = getValidImages([...product.image]);
  if (!valid) {
    return;
  }
  console.log(product.image);
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{`${product.name}`}</p>
        <small>{`${product.description}`}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="relative w-[300px] h-64 rounded-xl overflow-hidden gap-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={
              //   valid.length > 0
              //     ? valid[0]
              product
                ? product?.image
                : "https://www.google.com/imgres?q=dummy%20image&imgurl=https%3A%2F%2Famericanathleticshoe.com%2Fcdn%2Fshop%2Ft%2F23%2Fassets%2Fplaceholder_600x.png%3Fv%3D113555733946226816651665571258&imgrefurl=https%3A%2F%2Famericanathleticshoe.com%2Fproducts%2Fdummy-product%3Fsrsltid%3DAfmBOopNARR0DJej3bUYkkAGq5diebbV6PYbfjWGEinyNKqY6H1LVm3n&docid=IypIJhoPoyDTIM&tbnid=KVTAD2MyKSWiTM&vet=12ahUKEwjTrMyr0K2QAxXBcGwGHU3lGZkQM3oECFsQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwjTrMyr0K2QAxXBcGwGHU3lGZkQM3oECFsQAA"
            }
            fill
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default CategoryCard;

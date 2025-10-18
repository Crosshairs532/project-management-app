import { Skeleton } from "./skeleton";

export default function LoadingProduct({ isLoaded }) {
  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((_, idx) => (
        <div key={idx} className="flex flex-col space-y-3">
          <div className="space-y-2">
            <Skeleton className="h-4 bg-[#0d182165] w-[250px]" />
            <Skeleton className="h-4 bg-[#0d182165] w-[200px]" />
          </div>
          <Skeleton className="h-[125px] bg-[#0d182165] w-[250px] rounded-xl" />
        </div>
      ))}
    </div>
  );
}

//  <Card className="py-4">
//       <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//         <p className="text-tiny uppercase font-bold">{`${product.name}`}</p>
//         <h4 className="font-bold text-large">{`${product.price}`}</h4>
//       </CardHeader>
//       <CardBody className="overflow-visible py-2">
//         <Image
//           alt="Card background"
//           className="object-cover rounded-xl"
//           src={`${product.image[0]}`}
//           width={270}
//         />
//       </CardBody>
//     </Card>

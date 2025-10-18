import { Skeleton } from "./skeleton";

export default function LoadingProduct({ isLoaded }) {
  return (
    <div className=" mt-[25vh] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

"use client";

import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <div className="mt-[12vh] p-6 container mx-auto md:flex gap-12">
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <Skeleton className="w-full h-[400px] rounded-lg" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-between p-4 space-y-6">
        <Skeleton className="h-10 w-3/4 rounded" />

        <div className="flex items-center gap-3">
          <Skeleton className="w-12 h-12 rounded-full" />
          <Skeleton className="h-6 w-24 rounded" />
        </div>
        <Skeleton className="h-20 w-full rounded" />

        <Skeleton className="h-8 w-1/4 rounded" />

        <Skeleton className="h-12 w-1/2 rounded mt-4" />
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;

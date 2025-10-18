"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function PaginationDemo({ products, totalFetch }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalFetch?.totalLength / itemsPerPage);

  const offset = Number(searchParams.get("offset")) || 0;
  const currentPage = Math.floor(offset / itemsPerPage) + 1;

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const goToPage = (page) => {
    const newOffset = (page - 1) * itemsPerPage;
    const params = new URLSearchParams(searchParams.toString());
    params.set("offset", newOffset.toString());
    params.set("limit", itemsPerPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const goNext = () => {
    currentPage < totalPages && goToPage(currentPage + 1);
  };
  const goPrev = () => currentPage > 1 && goToPage(currentPage - 1);

  const getVisiblePages = () => {
    const maxVisible = 10;
    const half = Math.floor(maxVisible / 2);

    if (totalPages <= maxVisible)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (currentPage <= half)
      return Array.from({ length: maxVisible }, (_, i) => i + 1);

    if (currentPage >= totalPages - half)
      return Array.from(
        { length: maxVisible },
        (_, i) => totalPages - maxVisible + i + 1
      );

    return Array.from({ length: maxVisible }, (_, i) => currentPage - half + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goPrev();
            }}
            className={
              currentPage === 1
                ? "opacity-50 pointer-events-none"
                : "cursor-pointer"
            }
          />
        </PaginationItem>

        {/* If not starting from 1, show ellipsis */}
        {visiblePages[0] > 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        {/* Main visible page numbers */}
        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goToPage(page);
              }}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* If not ending at last page, show ellipsis */}
        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(totalPages);
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goNext();
            }}
            className={
              currentPage === totalPages
                ? "opacity-50 pointer-events-none"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

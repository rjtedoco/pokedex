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
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationListProps {
  totalPages: number;
}

const PaginationList = ({ totalPages }: PaginationListProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const startPage = Math.max(totalPages - 4, 1);
  const endPage = totalPages;

  return (
    <Pagination className="py-2">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed pointer-events-none"
                : "opacity-100 hover:bg-gray-200"
            }`}
            href={createPageURL(currentPage - 1)}
          />
        </PaginationItem>
        {totalPages > 5 && startPage > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
          <PaginationItem key={startPage + i}>
            <PaginationLink
              className={`${
                currentPage === startPage + i
                  ? "bg-slate-200 cursor-not-allowed pointer-events-none"
                  : ""
              }`}
              isActive={currentPage === startPage + i}
              href={createPageURL(startPage + i)}
            >
              {startPage + i}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={createPageURL(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationList;

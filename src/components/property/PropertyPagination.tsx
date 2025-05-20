
import React from "react";
import { Pagination } from "@/components/ui/pagination";
import { PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const PropertyPagination: React.FC = () => {
  return (
    <div className="mt-10 flex justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PropertyPagination;

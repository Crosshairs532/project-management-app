import { ArrowUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";

export function EmptyDemo({ name }) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">{/* <IconFolderCode /> */}</EmptyMedia>
        <EmptyTitle>No {name} Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any name {name} yet.{" "}
          {name == "product" && "Get started by creating your first project."}
        </EmptyDescription>
      </EmptyHeader>
      {name == "product" && (
        <EmptyContent>
          <div className="flex gap-2">
            <Button>
              <Link href={"/add-product"}>Create Project</Link>
            </Button>
          </div>
        </EmptyContent>
      )}
    </Empty>
  );
}

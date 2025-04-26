"use client";

import { SeverityFilter, SortOrder } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownAZ, ArrowUpAZ, Filter } from "lucide-react";

interface FiltersProps {
  severityFilter: SeverityFilter;
  setSeverityFilter: (filter: SeverityFilter) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}

export default function Filters({
  severityFilter,
  setSeverityFilter,
  sortOrder,
  setSortOrder,
}: FiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-between pb-4 border-b">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center">
          <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm font-medium">Severity:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["All", "Low", "Medium", "High"] as const).map((level) => (
            <Button
              key={level}
              size="sm"
              variant={severityFilter === level ? "default" : "outline"}
              onClick={() => setSeverityFilter(level)}
              className="transition-all"
            >
              {level}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Select
          value={sortOrder}
          onValueChange={(value) => setSortOrder(value as SortOrder)}
        >
          <SelectTrigger className="w-[180px]">
            <div className="flex items-center">
              {sortOrder === "Newest First" ? (
                <ArrowDownAZ className="mr-2 h-4 w-4" />
              ) : (
                <ArrowUpAZ className="mr-2 h-4 w-4" />
              )}
              <SelectValue placeholder="Sort by" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Newest First">Newest First</SelectItem>
            <SelectItem value="Oldest First">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
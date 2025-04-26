"use client";

import { useState } from "react";
import { Incident } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IncidentListProps {
  incidents: Incident[];
}

export default function IncidentList({ incidents }: IncidentListProps) {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedIds(prevIds => {
      const newIds = new Set(prevIds);
      if (newIds.has(id)) {
        newIds.delete(id);
      } else {
        newIds.add(id);
      }
      return newIds;
    });
  };

  if (incidents.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No incidents found matching the current filters</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-4">
      {incidents.map(incident => (
        <div 
          key={incident.id}
          className="incident-card rounded-lg overflow-hidden"
        >
          <div className="p-4 flex flex-col sm:flex-row justify-between gap-3 sm:items-center">
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-3">
                <h3 className="font-medium text-base sm:text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {incident.title}
                </h3>
                <SeverityBadge severity={incident.severity} />
              </div>
              <p className="text-sm text-foreground/60">
                Reported on {formatDate(incident.reported_at)}
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => toggleExpand(incident.id)}
              className="button-hover self-end sm:self-center"
            >
              {expandedIds.has(incident.id) ? (
                <span className="flex items-center">
                  Hide details <ChevronUp className="ml-1 h-4 w-4" />
                </span>
              ) : (
                <span className="flex items-center">
                  View details <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              )}
            </Button>
          </div>
          
          <div 
            className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out", 
              expandedIds.has(incident.id) 
                ? "max-h-96 opacity-100" 
                : "max-h-0 opacity-0"
            )}
          >
            <div className="p-4 bg-secondary/10 border-t border-primary/10">
              <p className="text-sm whitespace-pre-line text-foreground/80">{incident.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SeverityBadge({ severity }: { severity: Incident["severity"] }) {
  const baseClasses = "font-medium transition-all duration-300 hover:scale-105";
  
  switch (severity) {
    case "Low":
      return (
        <Badge variant="secondary" className={cn(baseClasses, "bg-accent/20 text-accent border-accent/30")}>
          {severity}
        </Badge>
      );
    case "Medium":
      return (
        <Badge variant="default" className={cn(baseClasses, "bg-secondary/20 text-secondary border-secondary/30")}>
          {severity}
        </Badge>
      );
    case "High":
      return (
        <Badge variant="destructive" className={cn(baseClasses, "bg-destructive/20 text-destructive border-destructive/30")}>
          {severity}
        </Badge>
      );
  }
}
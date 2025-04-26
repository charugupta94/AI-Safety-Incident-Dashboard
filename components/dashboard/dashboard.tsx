"use client";

import { useState } from "react";
import { Incident, SeverityFilter, SortOrder } from "@/lib/types";
import { mockIncidents } from "@/lib/mock-data";
import IncidentList from "./incident-list";
import Filters from "./filters";
import NewIncidentForm from "./new-incident-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("Newest First");

  const addIncident = (incident: Omit<Incident, "id" | "reported_at">) => {
    const newIncident: Incident = {
      ...incident,
      id: Math.max(0, ...incidents.map(inc => inc.id)) + 1,
      reported_at: new Date().toISOString()
    };
    
    setIncidents(prev => [newIncident, ...prev]);
  };

  const filteredIncidents = incidents
    .filter(incident => 
      severityFilter === "All" ? true : incident.severity === severityFilter
    )
    .sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortOrder === "Newest First" 
        ? dateB - dateA 
        : dateA - dateB;
    });

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      <div className="flex flex-col gap-6">
        <header className="dashboard-header rounded-lg p-8 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-center">
            AI Safety Incident Dashboard
          </h1>
          <p className="text-lg mt-3 text-foreground/80 text-center">
            Monitor, report and track AI safety incidents across your organization
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="incident-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Incident Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Filters 
                  severityFilter={severityFilter}
                  setSeverityFilter={setSeverityFilter}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                />
                <IncidentList incidents={filteredIncidents} />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="form-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Report New Incident
                </CardTitle>
              </CardHeader>
              <CardContent>
                <NewIncidentForm onSubmit={addIncident} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
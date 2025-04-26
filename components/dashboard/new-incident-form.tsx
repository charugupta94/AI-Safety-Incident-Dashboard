"use client";

import { useState } from "react";
import { Incident } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters",
  }),
  severity: z.enum(["Low", "Medium", "High"], {
    required_error: "Please select a severity level",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface NewIncidentFormProps {
  onSubmit: (incident: Omit<Incident, "id" | "reported_at">) => void;
}

export default function NewIncidentForm({ onSubmit }: NewIncidentFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      severity: "Medium",
    },
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base sm:text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Title</FormLabel>
                <FormControl>
                  <Input placeholder="Incident title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base sm:text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Detailed incident description"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="severity"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base sm:text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Severity</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a severity level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div
            className={cn(
              "p-3 rounded-md transition-all duration-300",
              isSubmitted
                ? "bg-green-100 dark:bg-green-950/40 border border-green-200 dark:border-green-900 opacity-100"
                : "opacity-0 h-0 overflow-hidden border-0 p-0"
            )}
          >
            {isSubmitted && (
              <div className="flex items-center text-green-700 dark:text-green-400 text-sm">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                <span>Incident reported successfully!</span>
              </div>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-accent focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 ease-in-out
" 
            disabled={isSubmitted}
          >
            Submit Report
          </Button>
        </form>
      </Form>
    </div>
  );
}
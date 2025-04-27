import { Incident } from "./types";

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: 
      "Algorithm consistently favored certain demographics.......",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: 
      "LLM provided incorrect safety procedure information.......",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: 
      "Chatbot inadvertently exposed non-sensitive user metadata.....",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
    // To check the sorting and filtering functionality, i have added more incidents with the same severity
  // and reported_at date.
  {
    id: 4,
    title: "Scarcity of Jobs in the Market",
    description: 
      "The scarcity of jobs in today's market highlights the growing gap between available opportunities and the rising workforce. Rapid technological advancements and economic shifts have intensified competition for limited roles.",
    severity: "Medium",
    reported_at: "2025-03-25T11:45:00Z"
  },
  {
    id: 5,
    title: "Why is reactjs better than angular",
    description: 
      "React.js is often preferred over Angular because it offers a more flexible, component-based architecture, making it easier to build and scale complex user interfaces. Its virtual DOM improves performance, and the learning curve is generally smoother compared to Angular's full-fledged framework approach.",
    severity: "Low",
    reported_at: "2025-04-05T16:20:00Z"
  },
  {
    id: 6,
    title: "Impact of AI on Job Market",
    description: 
      "The impact of AI on the job market is profound, with automation and machine learning reshaping industries. While AI creates new job opportunities, it also displaces certain roles, necessitating workforce reskilling and adaptation to new technologies.",
    severity: "High",
    reported_at: "2025-04-10T08:00:00Z"
  }
];

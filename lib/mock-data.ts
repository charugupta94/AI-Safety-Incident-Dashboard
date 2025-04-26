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
    title: "Autonomous Vehicle Unexpected Behavior",
    description: 
      "During controlled testing, an autonomous vehicle made an unexpected lane change when presented with an edge case scenario involving unusual road markings. The safety driver intervened before any unsafe situation developed. The incident highlights limitations in the current perception system when dealing with non-standard road conditions.",
    severity: "Medium",
    reported_at: "2025-03-25T11:45:00Z"
  },
  {
    id: 5,
    title: "Facial Recognition False Positive",
    description: 
      "Security system's facial recognition component incorrectly identified an authorized visitor as a person on a watchlist, triggering an unnecessary security response. Investigation revealed the system had particular difficulty distinguishing between individuals of certain ethnic backgrounds, indicating a potential bias in the training dataset.",
    severity: "Medium",
    reported_at: "2025-04-05T16:20:00Z"
  },
  {
    id: 6,
    title: "Critical Infrastructure AI Failure",
    description: 
      "AI monitoring system for power grid optimization experienced a complete failure during a period of high demand, requiring emergency manual override. The system had been running autonomously for 6 months before this incident. Post-failure analysis indicated the AI had not been trained on the specific combination of conditions that occurred. This resulted in a 15-minute power fluctuation affecting approximately 10,000 customers.",
    severity: "High",
    reported_at: "2025-04-10T08:00:00Z"
  }
];
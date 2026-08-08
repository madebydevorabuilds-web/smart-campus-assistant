import { CalendarDays, GraduationCap, HelpCircle, MapPin, PartyPopper, Users } from "lucide-react";
import type { Intent } from "@/lib/campus-bot";

export const categories: { intent: Intent; label: string; icon: typeof Users; blurb: string }[] = [
  { intent: "schedule", label: "Schedules", icon: CalendarDays, blurb: "Weekly classes & labs" },
  { intent: "exams", label: "Exams", icon: GraduationCap, blurb: "Dates, times, venues" },
  { intent: "faculty", label: "Faculty", icon: Users, blurb: "Office hours & email" },
  { intent: "events", label: "Events", icon: PartyPopper, blurb: "Fests, workshops, talks" },
  { intent: "locations", label: "Locations", icon: MapPin, blurb: "Rooms & directions" },
  { intent: "help", label: "Help", icon: HelpCircle, blurb: "Academic FAQs" },
];

import {
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Droplets,
  Hammer,
  HeartHandshake,
  Home,
  Layers3,
  MessageCircle,
  Paintbrush,
  ShieldCheck,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/site";

export const serviceIcons: Record<Service["icon"], LucideIcon> = {
  zap: Zap,
  droplets: Droplets,
  wind: Wind,
  building: Building2,
  paintbrush: Paintbrush,
  hammer: Hammer,
  wrench: Wrench,
  home: Home,
  briefcase: Briefcase,
};

export const whyIcons = {
  shield: ShieldCheck,
  badge: BadgeCheck,
  check: CheckCircle2,
  heart: HeartHandshake,
  layers: Layers3,
  message: MessageCircle,
} as const;

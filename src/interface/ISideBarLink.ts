import { LucideIcon } from "lucide-react";

export interface SideBarLinkProps {
    title: string;
    label?: string | undefined;
    icon: LucideIcon;
    variant: "default" | "ghost";
} 
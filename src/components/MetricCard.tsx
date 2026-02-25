import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  variant?: "default" | "primary" | "secondary" | "accent";
}

const variantStyles = {
  default: "bg-card border border-border",
  primary: "gradient-primary text-primary-foreground",
  secondary: "gradient-secondary text-secondary-foreground",
  accent: "gradient-accent text-accent-foreground",
};

const iconBgStyles = {
  default: "bg-muted",
  primary: "bg-primary-foreground/15",
  secondary: "bg-secondary-foreground/15",
  accent: "bg-accent-foreground/15",
};

export function MetricCard({ title, value, change, changeType = "neutral", icon: Icon, variant = "default" }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("rounded-xl p-5 transition-shadow hover:shadow-md", variantStyles[variant])}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className={cn("text-sm font-medium", variant === "default" ? "text-muted-foreground" : "opacity-80")}>
            {title}
          </p>
          <p className="text-3xl font-extrabold tracking-tight">{value}</p>
          {change && (
            <p className={cn(
              "text-xs font-medium",
              changeType === "positive" && (variant === "default" ? "text-success" : "opacity-90"),
              changeType === "negative" && (variant === "default" ? "text-destructive" : "opacity-90"),
              changeType === "neutral" && "opacity-70"
            )}>
              {change}
            </p>
          )}
        </div>
        <div className={cn("p-2.5 rounded-lg", iconBgStyles[variant])}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
}

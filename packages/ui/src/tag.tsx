import { type HTMLProps } from "react";

interface TagProps {
  className?: HTMLProps<HTMLElement>["className"];
  text: string;
}

const statusColors: Record<string, string> = {
  DRAFT:
    "bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800 border-amber-200/60 shadow-amber-100/50 dark:from-amber-950/30 dark:to-yellow-950/30 dark:text-amber-200 dark:border-amber-800/40 dark:shadow-amber-900/20",
  SCHEDULED:
    "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800 border-emerald-200/60 shadow-emerald-100/50 dark:from-emerald-950/30 dark:to-green-950/30 dark:text-emerald-200 dark:border-emerald-800/40 dark:shadow-emerald-900/20",
  SCHEDULING:
    "bg-gradient-to-r from-blue-50 to-sky-50 text-blue-800 border-blue-200/60 shadow-blue-100/50 dark:from-blue-950/30 dark:to-sky-950/30 dark:text-blue-200 dark:border-blue-800/40 dark:shadow-blue-900/20",
  PUBLISHING:
    "bg-gradient-to-r from-blue-50 to-sky-50 text-blue-800 border-blue-200/60 shadow-blue-100/50 dark:from-blue-950/30 dark:to-sky-950/30 dark:text-blue-200 dark:border-blue-800/40 dark:shadow-blue-900/20",
  PROCESSING:
    "bg-gradient-to-r from-violet-50 to-purple-50 text-violet-800 border-violet-200/60 shadow-violet-100/50 dark:from-violet-950/30 dark:to-purple-950/30 dark:text-violet-200 dark:border-violet-800/40 dark:shadow-violet-900/20",
  PUBLISHED:
    "bg-gradient-to-r from-green-50 to-teal-50 text-green-800 border-green-200/60 shadow-green-100/50 dark:from-green-950/30 dark:to-teal-950/30 dark:text-green-200 dark:border-green-800/40 dark:shadow-green-900/20",
};

// Status-specific indicator styles for enhanced visual feedback
const statusIndicators: Record<string, string> = {
  DRAFT:
    "bg-gradient-to-r from-amber-400 to-amber-500 dark:from-amber-300 dark:to-amber-400 shadow-amber-200 dark:shadow-amber-900/30",
  SCHEDULED:
    "bg-gradient-to-r from-emerald-400 to-emerald-500 dark:from-emerald-300 dark:to-emerald-400 shadow-emerald-200 dark:shadow-emerald-900/30",
  SCHEDULING:
    "bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-300 dark:to-blue-400 shadow-blue-200 dark:shadow-blue-900/30 animate-pulse",
  PROCESSING:
    "bg-gradient-to-r from-violet-400 to-violet-500 dark:from-violet-300 dark:to-violet-400 shadow-violet-200 dark:shadow-violet-900/30 animate-spin",
  PUBLISHING:
    "bg-gradient-to-r from-orange-400 to-red-500 dark:from-orange-300 dark:to-red-400 shadow-orange-200 dark:shadow-red-900/30 animate-bounce",
  PUBLISHED:
    "bg-gradient-to-r from-green-400 to-teal-500 dark:from-green-300 dark:to-teal-400 shadow-green-200 dark:shadow-teal-900/30",
};

// Improved status text formatting
const formatStatusText = (status: string): string => {
  return status.charAt(0) + status.slice(1).toLowerCase();
};

export default function Tag({ text, className }: TagProps) {
  const baseClasses =
    "inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:shadow-md";
  const statusClass =
    statusColors[text] ||
    "bg-gradient-to-r from-gray-50 to-slate-50 text-gray-700 border-gray-200/60 shadow-gray-100/50 dark:from-gray-800/80 dark:to-slate-800/80 dark:text-gray-200 dark:border-gray-700/60 dark:shadow-gray-900/20";
  const indicatorClass =
    statusIndicators[text] || "bg-gray-500 dark:bg-gray-400";

  return (
    <span className={`${baseClasses} ${statusClass} ${className || ""}`}>
      {/* Enhanced status indicator with specific animations */}
      <span
        className={`w-2 h-2 rounded-full mr-2 ${indicatorClass}`}
        style={{
          filter: "drop-shadow(0 0 2px currentColor)",
        }}
      />

      {/* Formatted status text */}
      <span className="tracking-wide">{formatStatusText(text)}</span>
    </span>
  );
}

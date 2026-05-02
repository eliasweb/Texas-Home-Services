import { cn } from "@/lib/utils";

export function TexasAccent({
  className,
  variant = "star",
  opacity = 0.08,
}: {
  className?: string;
  variant?: "star" | "outline";
  opacity?: number;
}) {
  if (variant === "outline") {
    return (
      <svg
        viewBox="0 0 240 240"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        className={cn(className)}
        style={{ opacity }}
      >
        <path d="M55 30 L120 30 L122 38 L150 40 L160 50 L180 52 L195 60 L200 75 L196 90 L186 100 L182 115 L188 132 L196 148 L208 162 L214 178 L218 196 L210 208 L196 214 L180 210 L168 198 L156 192 L142 196 L130 208 L118 212 L106 206 L96 192 L80 184 L66 174 L58 158 L52 140 L48 122 L42 104 L38 86 L36 68 L40 50 L48 38 Z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      className={cn(className)}
      style={{ opacity }}
    >
      <path d="M50 4 L60.5 36.4 L94.5 36.4 L67 56.4 L77.5 88.8 L50 68.8 L22.5 88.8 L33 56.4 L5.5 36.4 L39.5 36.4 Z" />
    </svg>
  );
}

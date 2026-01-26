import * as React from "react"

const badgeVariants = {
  default: "border-transparent bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  secondary: "border-transparent bg-gray-700/50 text-gray-300",
  destructive: "border-transparent bg-red-500/10 text-red-400 border-red-500/20",
  outline: "text-gray-300 border-gray-700",
  success: "border-transparent bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  warning: "border-transparent bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  error: "border-transparent bg-red-500/10 text-red-400 border-red-500/20",
}

export function Badge({
  className = "",
  variant = "default",
  children,
  ...props
}) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${badgeVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
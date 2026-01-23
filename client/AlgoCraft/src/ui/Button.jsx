import * as React from "react"

const buttonVariants = {
  default: "bg-emerald-600 text-white hover:bg-emerald-700",
  ghost: "hover:bg-gray-800 hover:text-white",
  outline: "border border-gray-700 bg-gray-800 hover:bg-gray-700 hover:border-emerald-500/50",
  secondary: "bg-gray-800 text-white hover:bg-gray-700",
  link: "text-emerald-500 underline-offset-4 hover:underline",
}

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  children,
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
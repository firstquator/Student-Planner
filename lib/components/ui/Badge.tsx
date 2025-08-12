import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'new' | 'guestFavorite' | 'success' | 'warning' | 'error' | 'info' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'new', size = 'md', children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-bold rounded-md whitespace-nowrap"
    
    const variantClasses = {
      new: "bg-[#FF385C] text-white",
      guestFavorite: "bg-[#F7F7F7] text-[#222222]",
      success: "bg-[#008A05] text-white",
      warning: "bg-[#FFB400] text-white",
      error: "bg-[#C13515] text-white",
      info: "bg-[#0F7488] text-white",
      secondary: "bg-[#717171] text-white"
    }
    
    const sizeClasses = {
      sm: variant === 'new' ? "px-1.5 py-0.5 text-xs tracking-wide" : "px-2 py-1 text-xs",
      md: variant === 'new' ? "px-2 py-0.5 text-xs tracking-wide" : "px-2 py-1 text-sm",
      lg: variant === 'new' ? "px-2.5 py-1 text-sm tracking-wide" : "px-3 py-1.5 text-sm"
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          variant === 'new' ? "uppercase" : "",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Badge.displayName = 'Badge'

export { Badge }
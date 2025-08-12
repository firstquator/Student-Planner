import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'base' | 'search'
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = 'base', error = false, disabled, ...props }, ref) => {
    const baseClasses = "w-full bg-white text-[#222222] font-normal transition-all duration-150 ease-in-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#717171] focus:outline-none disabled:cursor-not-allowed disabled:bg-[#F7F7F7] disabled:text-[#C1C1C1]"
    
    const variantClasses = {
      base: "border border-[#DDDDDD] rounded-lg px-4 py-[14px] text-base leading-[1.25] focus:border-[#FF385C] focus:ring-2 focus:ring-[rgba(255,56,92,0.2)]",
      search: "border border-[#DDDDDD] rounded-full px-5 py-[14px] text-base shadow-[0_2px_4px_rgba(0,0,0,0.1)] focus:border-[#FF385C] focus:shadow-[0_4px_6px_rgba(0,0,0,0.1),0_0_0_2px_rgba(255,56,92,0.2)]"
    }
    
    const errorClasses = error ? "border-[#C13515] focus:border-[#C13515] focus:ring-[rgba(193,53,21,0.2)]" : ""
    
    return (
      <input
        type={type}
        className={cn(
          baseClasses,
          variantClasses[variant],
          errorClasses,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error = false, resize = 'vertical', disabled, ...props }, ref) => {
    const baseClasses = "w-full bg-white text-[#222222] font-normal transition-all duration-150 ease-in-out placeholder:text-[#717171] focus:outline-none disabled:cursor-not-allowed disabled:bg-[#F7F7F7] disabled:text-[#C1C1C1]"
    
    const styleClasses = "border border-[#DDDDDD] rounded-lg px-4 py-[14px] text-base leading-[1.25] min-h-[120px] focus:border-[#FF385C] focus:ring-2 focus:ring-[rgba(255,56,92,0.2)]"
    
    const errorClasses = error ? "border-[#C13515] focus:border-[#C13515] focus:ring-[rgba(193,53,21,0.2)]" : ""
    
    const resizeClasses = {
      none: 'resize-none',
      both: 'resize',
      horizontal: 'resize-x',
      vertical: 'resize-y'
    }
    
    return (
      <textarea
        ref={ref}
        className={cn(
          baseClasses,
          styleClasses,
          errorClasses,
          resizeClasses[resize],
          className
        )}
        disabled={disabled}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
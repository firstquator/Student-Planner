import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error = false, disabled, id, ...props }, ref) => {
    const baseClasses = "w-5 h-5 text-[#FF385C] bg-white border border-[#DDDDDD] rounded focus:ring-[#FF385C] focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-[#F7F7F7] disabled:border-[#C1C1C1] transition-all duration-150 ease-in-out"
    
    const errorClasses = error ? "border-[#C13515] focus:ring-[#C13515]" : ""
    
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

    if (label) {
      return (
        <div className="flex items-center">
          <input
            type="checkbox"
            ref={ref}
            id={checkboxId}
            className={cn(
              baseClasses,
              errorClasses,
              className
            )}
            disabled={disabled}
            {...props}
          />
          <label
            htmlFor={checkboxId}
            className={cn(
              "ml-2 text-sm font-medium text-[#222222] cursor-pointer",
              disabled ? "text-[#C1C1C1] cursor-not-allowed" : "",
              error ? "text-[#C13515]" : ""
            )}
          >
            {label}
          </label>
        </div>
      )
    }
    
    return (
      <input
        type="checkbox"
        ref={ref}
        id={checkboxId}
        className={cn(
          baseClasses,
          errorClasses,
          className
        )}
        disabled={disabled}
        {...props}
      />
    )
  }
)
Checkbox.displayName = 'Checkbox'

export { Checkbox }
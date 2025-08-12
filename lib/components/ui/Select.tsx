import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
  placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error = false, disabled, placeholder, children, ...props }, ref) => {
    const baseClasses = "w-full bg-white text-[#222222] font-normal transition-all duration-150 ease-in-out focus:outline-none disabled:cursor-not-allowed disabled:bg-[#F7F7F7] disabled:text-[#C1C1C1] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 4 5\"><path fill=\"%23666\" d=\"M2 0L0 2h4zm0 5L0 3h4z\"/></svg>')] bg-no-repeat bg-right-3 bg-[length:12px_12px]"
    
    const styleClasses = "border border-[#DDDDDD] rounded-lg px-4 py-[14px] pr-10 text-base leading-[1.25] focus:border-[#FF385C] focus:ring-2 focus:ring-[rgba(255,56,92,0.2)]"
    
    const errorClasses = error ? "border-[#C13515] focus:border-[#C13515] focus:ring-[rgba(193,53,21,0.2)]" : ""
    
    return (
      <select
        ref={ref}
        className={cn(
          baseClasses,
          styleClasses,
          errorClasses,
          className
        )}
        disabled={disabled}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </select>
    )
  }
)
Select.displayName = 'Select'

export interface SelectOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}

const SelectOption = React.forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ className, ...props }, ref) => (
    <option
      ref={ref}
      className={cn("text-[#222222] bg-white", className)}
      {...props}
    />
  )
)
SelectOption.displayName = 'SelectOption'

export { Select, SelectOption }
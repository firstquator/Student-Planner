import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  onChange?: (checked: boolean) => void
  label?: string
  size?: 'sm' | 'md' | 'lg'
  error?: boolean
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, onChange, label, size = 'md', error = false, disabled, checked, id, ...props }, ref) => {
    const sizeClasses = {
      sm: {
        container: 'w-9 h-5',
        thumb: 'w-4 h-4',
        translate: 'translate-x-4'
      },
      md: {
        container: 'w-11 h-6',
        thumb: 'w-5 h-5',
        translate: 'translate-x-5'
      },
      lg: {
        container: 'w-14 h-7',
        thumb: 'w-6 h-6',
        translate: 'translate-x-7'
      }
    }
    
    const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.checked)
      }
    }

    return (
      <div className={cn("flex items-center", className)}>
        <div className="relative">
          <input
            type="checkbox"
            ref={ref}
            id={toggleId}
            className="sr-only"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            {...props}
          />
          <label
            htmlFor={toggleId}
            className={cn(
              "relative inline-flex cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out",
              sizeClasses[size].container,
              checked 
                ? error 
                  ? "bg-[#C13515]" 
                  : "bg-[#FF385C]"
                : error
                  ? "bg-[#C13515]/20"
                  : "bg-[#DDDDDD]",
              disabled ? "cursor-not-allowed opacity-50" : "",
              "focus-within:ring-2 focus-within:ring-[#FF385C] focus-within:ring-offset-2"
            )}
          >
            <span
              className={cn(
                "inline-block rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out",
                sizeClasses[size].thumb,
                checked ? sizeClasses[size].translate : "translate-x-0.5"
              )}
            />
          </label>
        </div>
        
        {label && (
          <span
            className={cn(
              "ml-3 text-sm font-medium",
              disabled ? "text-[#C1C1C1]" : error ? "text-[#C13515]" : "text-[#222222]"
            )}
          >
            {label}
          </span>
        )}
      </div>
    )
  }
)
Toggle.displayName = 'Toggle'

export { Toggle }
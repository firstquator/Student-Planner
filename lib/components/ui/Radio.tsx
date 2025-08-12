import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, error = false, disabled, id, ...props }, ref) => {
    const baseClasses = "w-5 h-5 text-[#FF385C] bg-white border border-[#DDDDDD] focus:ring-[#FF385C] focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-[#F7F7F7] disabled:border-[#C1C1C1] transition-all duration-150 ease-in-out"
    
    const errorClasses = error ? "border-[#C13515] focus:ring-[#C13515]" : ""
    
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`

    if (label) {
      return (
        <div className="flex items-center">
          <input
            type="radio"
            ref={ref}
            id={radioId}
            className={cn(
              baseClasses,
              errorClasses,
              className
            )}
            disabled={disabled}
            {...props}
          />
          <label
            htmlFor={radioId}
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
        type="radio"
        ref={ref}
        id={radioId}
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
Radio.displayName = 'Radio'

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name: string
  value?: string
  onChange?: (value: string) => void
  error?: boolean
  disabled?: boolean
  orientation?: 'horizontal' | 'vertical'
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, name, value, onChange, error = false, disabled = false, orientation = 'vertical', children, ...props }, ref) => {
    const orientationClasses = {
      horizontal: 'flex flex-row space-x-4',
      vertical: 'flex flex-col space-y-2'
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          orientationClasses[orientation],
          className
        )}
        role="radiogroup"
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === Radio) {
            return React.cloneElement(child, {
              name,
              checked: child.props.value === value,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                if (onChange) onChange(e.target.value)
              },
              error,
              disabled: disabled || child.props.disabled
            })
          }
          return child
        })}
      </div>
    )
  }
)
RadioGroup.displayName = 'RadioGroup'

export { Radio, RadioGroup }
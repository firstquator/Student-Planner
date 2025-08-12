import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { Icon } from './Icon'

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'filled' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  selected?: boolean
  disabled?: boolean
  startIcon?: string
  endIcon?: string
  onDelete?: () => void
  clickable?: boolean
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ 
    className, 
    variant = 'filled', 
    size = 'md', 
    selected = false, 
    disabled = false,
    startIcon,
    endIcon,
    onDelete,
    clickable = false,
    children,
    onClick,
    ...props 
  }, ref) => {
    const baseClasses = "inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-150 ease-in-out"
    
    const variantClasses = {
      filled: selected 
        ? "bg-[#FF385C] text-white" 
        : "bg-[#F7F7F7] text-[#222222] hover:bg-[#EBEBEB]",
      outlined: selected
        ? "bg-[#FF385C] text-white border border-[#FF385C]"
        : "bg-transparent text-[#222222] border border-[#DDDDDD] hover:border-[#B0B0B0] hover:bg-[#F7F7F7]"
    }
    
    const sizeClasses = {
      sm: "px-2 py-1 text-xs h-6",
      md: "px-3 py-1.5 text-sm h-8",
      lg: "px-4 py-2 text-base h-10"
    }
    
    const iconSize = size === 'sm' ? 'xs' : size === 'md' ? 'sm' : 'md'
    
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : clickable || onClick ? "cursor-pointer" : ""

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return
      onClick?.(e)
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          disabledClasses,
          className
        )}
        onClick={handleClick}
        role={clickable || onClick ? "button" : undefined}
        tabIndex={clickable || onClick ? 0 : undefined}
        {...props}
      >
        {startIcon && (
          <Icon 
            name={startIcon} 
            size={iconSize} 
            color="inherit"
          />
        )}
        
        {children}
        
        {endIcon && (
          <Icon 
            name={endIcon} 
            size={iconSize} 
            color="inherit"
          />
        )}
        
        {onDelete && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onDelete()
            }}
            disabled={disabled}
            className="ml-0.5 p-0.5 rounded-full hover:bg-black/10 transition-colors duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Icon name="close" size={iconSize} color="inherit" />
          </button>
        )}
      </div>
    )
  }
)
Chip.displayName = 'Chip'

export { Chip }
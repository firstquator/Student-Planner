import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { Icon } from './Icon'

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'filled' | 'outlined' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  removable?: boolean
  onRemove?: () => void
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ className, variant = 'filled', size = 'md', color = 'primary', removable = false, onRemove, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center gap-1 font-medium rounded-full transition-all duration-150 ease-in-out"
    
    const colorMap = {
      primary: '#FF385C',
      secondary: '#717171', 
      success: '#008A05',
      warning: '#FFB400',
      error: '#C13515',
      info: '#0F7488'
    }
    
    const variantClasses = {
      filled: {
        primary: "bg-[#FF385C] text-white",
        secondary: "bg-[#717171] text-white",
        success: "bg-[#008A05] text-white",
        warning: "bg-[#FFB400] text-white",
        error: "bg-[#C13515] text-white",
        info: "bg-[#0F7488] text-white"
      },
      outlined: {
        primary: "bg-transparent text-[#FF385C] border border-[#FF385C]",
        secondary: "bg-transparent text-[#717171] border border-[#717171]",
        success: "bg-transparent text-[#008A05] border border-[#008A05]",
        warning: "bg-transparent text-[#FFB400] border border-[#FFB400]",
        error: "bg-transparent text-[#C13515] border border-[#C13515]",
        info: "bg-transparent text-[#0F7488] border border-[#0F7488]"
      },
      ghost: {
        primary: "bg-[#FF385C]/10 text-[#FF385C]",
        secondary: "bg-[#717171]/10 text-[#717171]",
        success: "bg-[#008A05]/10 text-[#008A05]",
        warning: "bg-[#FFB400]/10 text-[#FFB400]",
        error: "bg-[#C13515]/10 text-[#C13515]",
        info: "bg-[#0F7488]/10 text-[#0F7488]"
      }
    }
    
    const sizeClasses = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-base"
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant][color],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
        
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-1 p-0.5 rounded-full hover:bg-black/10 transition-colors duration-150 ease-in-out"
          >
            <Icon name="close" size={size === 'sm' ? 'xs' : 'sm'} color="inherit" />
          </button>
        )}
      </div>
    )
  }
)
Tag.displayName = 'Tag'

export { Tag }
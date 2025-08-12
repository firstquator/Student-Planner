import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  variant?: 'default' | 'rounded' | 'striped'
  animated?: boolean
  showLabel?: boolean
  label?: string
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ 
    className, 
    value, 
    max = 100, 
    size = 'md',
    color = 'primary',
    variant = 'default',
    animated = false,
    showLabel = false,
    label,
    ...props 
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    
    const sizeClasses = {
      xs: 'h-1',
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4'
    }
    
    const colorClasses = {
      primary: 'bg-[#FF385C]',
      secondary: 'bg-[#717171]',
      success: 'bg-[#008A05]',
      warning: 'bg-[#FFB400]',
      error: 'bg-[#C13515]',
      info: 'bg-[#0F7488]'
    }
    
    const variantClasses = {
      default: 'rounded-none',
      rounded: 'rounded-full',
      striped: 'bg-gradient-to-r'
    }
    
    const stripedPattern = variant === 'striped' ? 
      'bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[1rem_1rem]' : 
      ''

    return (
      <div className="w-full">
        {(showLabel || label) && (
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-[#222222]">
              {label || `${Math.round(percentage)}%`}
            </span>
            {showLabel && !label && (
              <span className="text-sm text-[#717171]">
                {value}/{max}
              </span>
            )}
          </div>
        )}
        
        <div
          ref={ref}
          className={cn(
            "w-full bg-[#F7F7F7] overflow-hidden",
            sizeClasses[size],
            variantClasses[variant],
            className
          )}
          {...props}
        >
          <div
            className={cn(
              "h-full transition-all duration-500 ease-out",
              colorClasses[color],
              stripedPattern,
              animated && "animate-[progressBarStripes_1s_linear_infinite]"
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)
ProgressBar.displayName = 'ProgressBar'

export { ProgressBar }
import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'white' | 'current'
  speed?: 'slow' | 'normal' | 'fast'
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = 'md', color = 'primary', speed = 'normal', ...props }, ref) => {
    const sizeClasses = {
      xs: 'w-3 h-3 border',
      sm: 'w-4 h-4 border-2',
      md: 'w-6 h-6 border-2',
      lg: 'w-8 h-8 border-2',
      xl: 'w-12 h-12 border-4'
    }
    
    const colorClasses = {
      primary: 'border-[#FF385C] border-t-transparent',
      secondary: 'border-[#717171] border-t-transparent',
      white: 'border-white border-t-transparent',
      current: 'border-current border-t-transparent'
    }
    
    const speedClasses = {
      slow: 'animate-[spin_2s_linear_infinite]',
      normal: 'animate-spin',
      fast: 'animate-[spin_0.5s_linear_infinite]'
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-full",
          sizeClasses[size],
          colorClasses[color],
          speedClasses[speed],
          className
        )}
        {...props}
      />
    )
  }
)
Spinner.displayName = 'Spinner'

export { Spinner }
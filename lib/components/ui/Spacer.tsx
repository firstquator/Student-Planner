import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  orientation?: 'horizontal' | 'vertical'
}

const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size = 'md', orientation = 'vertical', ...props }, ref) => {
    const sizeClasses = {
      horizontal: {
        xs: 'w-1',
        sm: 'w-2',
        md: 'w-4',
        lg: 'w-6',
        xl: 'w-8',
        '2xl': 'w-12',
        '3xl': 'w-16'
      },
      vertical: {
        xs: 'h-1',
        sm: 'h-2',
        md: 'h-4',
        lg: 'h-6',
        xl: 'h-8',
        '2xl': 'h-12',
        '3xl': 'h-16'
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          sizeClasses[orientation][size],
          orientation === 'horizontal' ? 'flex-shrink-0' : 'flex-shrink-0',
          className
        )}
        {...props}
      />
    )
  }
)
Spacer.displayName = 'Spacer'

export { Spacer }
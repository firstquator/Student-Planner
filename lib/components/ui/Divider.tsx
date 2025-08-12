import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  thickness?: 'thin' | 'medium' | 'thick'
  color?: 'light' | 'medium' | 'dark'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  children?: React.ReactNode
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ 
    className, 
    orientation = 'horizontal', 
    variant = 'solid', 
    thickness = 'thin',
    color = 'light',
    spacing = 'md',
    children,
    ...props 
  }, ref) => {
    const colorClasses = {
      light: 'border-[#DDDDDD]',
      medium: 'border-[#B0B0B0]',
      dark: 'border-[#717171]'
    }
    
    const thicknessClasses = {
      thin: 'border-t border-l',
      medium: 'border-t-2 border-l-2',
      thick: 'border-t-4 border-l-4'
    }
    
    const variantClasses = {
      solid: '',
      dashed: 'border-dashed',
      dotted: 'border-dotted'
    }
    
    const spacingClasses = {
      horizontal: {
        none: 'my-0',
        sm: 'my-2',
        md: 'my-4',
        lg: 'my-6'
      },
      vertical: {
        none: 'mx-0',
        sm: 'mx-2',
        md: 'mx-4',
        lg: 'mx-6'
      }
    }

    if (children) {
      return (
        <div
          ref={ref}
          className={cn(
            "relative flex items-center",
            orientation === 'horizontal' ? 'w-full' : 'h-full flex-col',
            spacingClasses[orientation][spacing],
            className
          )}
          {...props}
        >
          <div
            className={cn(
              orientation === 'horizontal' ? 'flex-1 border-t' : 'flex-1 border-l',
              colorClasses[color],
              thicknessClasses[thickness].split(' ')[orientation === 'horizontal' ? 0 : 1],
              variantClasses[variant]
            )}
          />
          <div
            className={cn(
              "bg-white text-[#717171] text-sm font-medium",
              orientation === 'horizontal' ? 'px-4' : 'py-2'
            )}
          >
            {children}
          </div>
          <div
            className={cn(
              orientation === 'horizontal' ? 'flex-1 border-t' : 'flex-1 border-l',
              colorClasses[color],
              thicknessClasses[thickness].split(' ')[orientation === 'horizontal' ? 0 : 1],
              variantClasses[variant]
            )}
          />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          orientation === 'horizontal' 
            ? cn('w-full border-t', thicknessClasses[thickness].split(' ')[0])
            : cn('h-full border-l', thicknessClasses[thickness].split(' ')[1]),
          colorClasses[color],
          variantClasses[variant],
          spacingClasses[orientation][spacing],
          className
        )}
        {...props}
      />
    )
  }
)
Divider.displayName = 'Divider'

export { Divider }
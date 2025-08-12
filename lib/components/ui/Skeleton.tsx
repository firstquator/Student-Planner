import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  animation?: 'pulse' | 'wave' | 'none'
  width?: string | number
  height?: string | number
  lines?: number
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ 
    className, 
    variant = 'rectangular',
    animation = 'pulse',
    width,
    height,
    lines = 1,
    ...props 
  }, ref) => {
    const baseClasses = "bg-[#F7F7F7]"
    
    const variantClasses = {
      text: 'rounded-sm',
      circular: 'rounded-full',
      rectangular: 'rounded-none',
      rounded: 'rounded-lg'
    }
    
    const animationClasses = {
      pulse: 'animate-pulse',
      wave: 'animate-[wave_1.6s_ease-in-out_infinite]',
      none: ''
    }
    
    // 텍스트 스켈레톤인 경우 여러 줄 렌더링
    if (variant === 'text' && lines > 1) {
      return (
        <div className={cn("space-y-2", className)} ref={ref} {...props}>
          {Array.from({ length: lines }, (_, i) => (
            <div
              key={i}
              className={cn(
                baseClasses,
                variantClasses[variant],
                animationClasses[animation],
                "h-4"
              )}
              style={{
                width: i === lines - 1 ? '75%' : '100%'
              }}
            />
          ))}
        </div>
      )
    }
    
    // 기본 스켈레톤
    const defaultDimensions = {
      text: { width: '100%', height: '1rem' },
      circular: { width: '2.5rem', height: '2.5rem' },
      rectangular: { width: '100%', height: '8rem' },
      rounded: { width: '100%', height: '8rem' }
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          animationClasses[animation],
          className
        )}
        style={{
          width: width ?? defaultDimensions[variant].width,
          height: height ?? defaultDimensions[variant].height
        }}
        {...props}
      />
    )
  }
)
Skeleton.displayName = 'Skeleton'

export { Skeleton }
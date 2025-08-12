import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'dots' | 'pulse'
  color?: 'primary' | 'secondary'
  text?: string
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, size = 'md', variant = 'spinner', color = 'primary', text, ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8', 
      lg: 'w-12 h-12'
    }
    
    const colorClasses = {
      primary: 'border-[#FF385C] border-t-transparent',
      secondary: 'border-[#717171] border-t-transparent'
    }
    
    const renderSpinner = () => (
      <div
        className={cn(
          "border-2 rounded-full animate-spin",
          sizeClasses[size],
          colorClasses[color]
        )}
      />
    )
    
    const renderDots = () => (
      <div className="flex space-x-1">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={cn(
              "rounded-full animate-pulse",
              size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : 'w-3 h-3',
              color === 'primary' ? 'bg-[#FF385C]' : 'bg-[#717171]'
            )}
            style={{
              animationDelay: `${index * 0.2}s`,
              animationDuration: '0.8s'
            }}
          />
        ))}
      </div>
    )
    
    const renderPulse = () => (
      <div className="flex flex-col items-center space-y-2">
        <div
          className={cn(
            "rounded-lg animate-pulse",
            size === 'sm' ? 'w-12 h-3' : size === 'md' ? 'w-16 h-4' : 'w-20 h-5',
            color === 'primary' ? 'bg-[#FF385C]/20' : 'bg-[#717171]/20'
          )}
        />
        <div
          className={cn(
            "rounded-lg animate-pulse",
            size === 'sm' ? 'w-8 h-3' : size === 'md' ? 'w-12 h-4' : 'w-16 h-5',
            color === 'primary' ? 'bg-[#FF385C]/20' : 'bg-[#717171]/20'
          )}
          style={{ animationDelay: '0.2s' }}
        />
      </div>
    )
    
    const renderVariant = () => {
      switch (variant) {
        case 'dots':
          return renderDots()
        case 'pulse':
          return renderPulse()
        default:
          return renderSpinner()
      }
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center justify-center", className)}
        {...props}
      >
        {renderVariant()}
        {text && (
          <p className={cn(
            "mt-2 text-[#717171]",
            size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'
          )}>
            {text}
          </p>
        )}
      </div>
    )
  }
)
Loading.displayName = 'Loading'

export { Loading }
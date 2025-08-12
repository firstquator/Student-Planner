import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils/cn'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, asChild = false, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-150 ease-in-out cursor-pointer disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:ring-offset-2"
    
    const variantClasses = {
      primary: "bg-[#FF385C] text-white border-none hover:bg-[#E31C5F] hover:scale-[1.02] active:bg-[#C13515] disabled:bg-[#EBEBEB] disabled:text-[#C1C1C1]",
      secondary: "bg-white text-[#222222] border border-[#222222] hover:bg-[#F7F7F7] hover:border-black active:bg-[#EBEBEB] disabled:bg-[#EBEBEB] disabled:text-[#C1C1C1] disabled:border-[#C1C1C1]",
      ghost: "bg-transparent text-[#222222] border-none hover:bg-[#F7F7F7] active:bg-[#EBEBEB] disabled:bg-transparent disabled:text-[#C1C1C1]",
      icon: "bg-transparent text-[#717171] border-none rounded-full hover:bg-[#F7F7F7] hover:text-[#222222] p-2 disabled:text-[#C1C1C1]"
    }
    
    const sizeClasses = {
      sm: variant === 'icon' ? 'w-8 h-8' : 'px-4 py-2 text-sm rounded-md',
      md: variant === 'icon' ? 'w-10 h-10' : 'px-6 py-[14px] text-base rounded-lg',
      lg: variant === 'icon' ? 'w-12 h-12' : 'px-8 py-4 text-lg rounded-lg'
    }
    
    return (
      <Comp
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            {children}
          </div>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button }
import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { Icon } from './Icon'

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  duration?: number
  closable?: boolean
  onClose?: () => void
  icon?: string | boolean
  title?: string
  description?: string
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ 
    className, 
    variant = 'default',
    duration = 5000,
    closable = true,
    onClose,
    icon,
    title,
    description,
    children,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true)
    
    const variantClasses = {
      default: "bg-white border-[#DDDDDD] text-[#222222]",
      success: "bg-white border-[#008A05] text-[#008A05]",
      warning: "bg-white border-[#FFB400] text-[#FFB400]",
      error: "bg-white border-[#C13515] text-[#C13515]",
      info: "bg-white border-[#0F7488] text-[#0F7488]"
    }
    
    const iconMap = {
      success: 'check',
      warning: 'exclamation',
      error: 'close',
      info: 'info'
    }
    
    const getIcon = () => {
      if (icon === false) return null
      if (typeof icon === 'string') return icon
      if (variant !== 'default' && iconMap[variant as keyof typeof iconMap]) {
        return iconMap[variant as keyof typeof iconMap]
      }
      return null
    }
    
    React.useEffect(() => {
      if (duration > 0) {
        const timer = setTimeout(() => {
          setIsVisible(false)
          setTimeout(() => onClose?.(), 300)
        }, duration)
        
        return () => clearTimeout(timer)
      }
    }, [duration, onClose])
    
    const handleClose = () => {
      setIsVisible(false)
      setTimeout(() => onClose?.(), 300)
    }

    if (!isVisible) {
      return (
        <div
          ref={ref}
          className="transform transition-all duration-300 ease-out opacity-0 translate-y-2 scale-95"
        />
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-start gap-3 p-4 rounded-lg border shadow-lg transform transition-all duration-300 ease-out",
          "animate-[slideIn_300ms_ease-out]",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {getIcon() && (
          <Icon 
            name={getIcon()!} 
            size="md" 
            className={cn(
              "mt-0.5 flex-shrink-0",
              variant === 'success' && "text-[#008A05]",
              variant === 'warning' && "text-[#FFB400]", 
              variant === 'error' && "text-[#C13515]",
              variant === 'info' && "text-[#0F7488]",
              variant === 'default' && "text-[#717171]"
            )}
          />
        )}
        
        <div className="flex-1 min-w-0">
          {title && (
            <div className={cn(
              "font-semibold text-sm mb-1",
              variant === 'default' ? "text-[#222222]" : ""
            )}>
              {title}
            </div>
          )}
          
          {description && (
            <div className="text-sm text-[#717171] mb-1">
              {description}
            </div>
          )}
          
          {children}
        </div>
        
        {closable && (
          <button
            type="button"
            onClick={handleClose}
            className="flex-shrink-0 p-1 rounded hover:bg-black/5 transition-colors duration-150 ease-in-out"
          >
            <Icon name="close" size="sm" className="text-[#717171]" />
          </button>
        )}
      </div>
    )
  }
)
Toast.displayName = 'Toast'

export { Toast }
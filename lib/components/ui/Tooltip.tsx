import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  content: React.ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  offset?: number
  arrow?: boolean
  disabled?: boolean
  children: React.ReactNode
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ 
    className,
    content,
    placement = 'top',
    delay = 500,
    offset = 8,
    arrow = true,
    disabled = false,
    children,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const [showTimeout, setShowTimeout] = React.useState<NodeJS.Timeout | null>(null)
    const [hideTimeout, setHideTimeout] = React.useState<NodeJS.Timeout | null>(null)
    
    const placementClasses = {
      'top': 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      'bottom': 'top-full left-1/2 -translate-x-1/2 mt-2',
      'left': 'right-full top-1/2 -translate-y-1/2 mr-2',
      'right': 'left-full top-1/2 -translate-y-1/2 ml-2'
    }
    
    const arrowClasses = {
      'top': 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-[#222222]',
      'bottom': 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-[#222222]',
      'left': 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-[#222222]',
      'right': 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-[#222222]'
    }
    
    const handleMouseEnter = () => {
      if (disabled) return
      
      if (hideTimeout) {
        clearTimeout(hideTimeout)
        setHideTimeout(null)
      }
      
      const timeout = setTimeout(() => {
        setIsVisible(true)
      }, delay)
      
      setShowTimeout(timeout)
    }
    
    const handleMouseLeave = () => {
      if (showTimeout) {
        clearTimeout(showTimeout)
        setShowTimeout(null)
      }
      
      const timeout = setTimeout(() => {
        setIsVisible(false)
      }, 100)
      
      setHideTimeout(timeout)
    }
    
    React.useEffect(() => {
      return () => {
        if (showTimeout) clearTimeout(showTimeout)
        if (hideTimeout) clearTimeout(hideTimeout)
      }
    }, [showTimeout, hideTimeout])

    return (
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        
        {isVisible && !disabled && (
          <div
            ref={ref}
            className={cn(
              "absolute z-[1070] px-2 py-1 text-sm text-white bg-[#222222] rounded whitespace-nowrap pointer-events-none",
              "animate-[fadeIn_150ms_ease-out]",
              placementClasses[placement],
              className
            )}
            style={{
              marginTop: placement === 'bottom' ? `${offset}px` : placement === 'top' ? `-${offset}px` : 0,
              marginLeft: placement === 'right' ? `${offset}px` : placement === 'left' ? `-${offset}px` : 0
            }}
            {...props}
          >
            {content}
            
            {arrow && (
              <div
                className={cn(
                  "absolute w-0 h-0 border-2",
                  arrowClasses[placement]
                )}
              />
            )}
          </div>
        )}
      </div>
    )
  }
)
Tooltip.displayName = 'Tooltip'

export { Tooltip }
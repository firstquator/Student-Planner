import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  trigger: React.ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
  offset?: number
  arrow?: boolean
  closeOnClick?: boolean
  closeOnOutsideClick?: boolean
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ 
    className,
    open,
    onClose,
    trigger,
    placement = 'bottom',
    offset = 8,
    arrow = true,
    closeOnClick = false,
    closeOnOutsideClick = true,
    children,
    ...props 
  }, ref) => {
    const [triggerRect, setTriggerRect] = React.useState<DOMRect | null>(null)
    const triggerRef = React.useRef<HTMLDivElement>(null)
    const popoverRef = React.useRef<HTMLDivElement>(null)
    
    const placementClasses = {
      'top': 'bottom-full left-1/2 -translate-x-1/2',
      'bottom': 'top-full left-1/2 -translate-x-1/2',
      'left': 'right-full top-1/2 -translate-y-1/2',
      'right': 'left-full top-1/2 -translate-y-1/2',
      'top-start': 'bottom-full left-0',
      'top-end': 'bottom-full right-0',
      'bottom-start': 'top-full left-0',
      'bottom-end': 'top-full right-0'
    }
    
    const arrowClasses = {
      'top': 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-white',
      'bottom': 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-white',
      'left': 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-white',
      'right': 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-white',
      'top-start': 'top-full left-4 border-l-transparent border-r-transparent border-b-transparent border-t-white',
      'top-end': 'top-full right-4 border-l-transparent border-r-transparent border-b-transparent border-t-white',
      'bottom-start': 'bottom-full left-4 border-l-transparent border-r-transparent border-t-transparent border-b-white',
      'bottom-end': 'bottom-full right-4 border-l-transparent border-r-transparent border-t-transparent border-b-white'
    }
    
    React.useEffect(() => {
      if (triggerRef.current) {
        setTriggerRect(triggerRef.current.getBoundingClientRect())
      }
    }, [open])
    
    React.useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (
          closeOnOutsideClick &&
          popoverRef.current && 
          triggerRef.current &&
          !popoverRef.current.contains(event.target as Node) &&
          !triggerRef.current.contains(event.target as Node)
        ) {
          onClose()
        }
      }
      
      if (open) {
        document.addEventListener('mousedown', handleOutsideClick)
      }
      
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick)
      }
    }, [open, closeOnOutsideClick, onClose])
    
    const handleContentClick = () => {
      if (closeOnClick) {
        onClose()
      }
    }

    return (
      <div className="relative inline-block">
        <div ref={triggerRef}>
          {trigger}
        </div>
        
        {open && (
          <div
            ref={popoverRef}
            className={cn(
              "absolute z-[1060] min-w-max",
              placementClasses[placement]
            )}
            style={{
              marginTop: placement.includes('bottom') ? `${offset}px` : placement.includes('top') ? `-${offset}px` : 0,
              marginLeft: placement.includes('right') ? `${offset}px` : placement.includes('left') ? `-${offset}px` : 0
            }}
          >
            <div
              ref={ref}
              className={cn(
                "bg-white border border-[#DDDDDD] rounded-lg shadow-lg p-3 animate-[fadeIn_150ms_ease-out]",
                className
              )}
              onClick={handleContentClick}
              {...props}
            >
              {children}
            </div>
            
            {arrow && (
              <div
                className={cn(
                  "absolute w-0 h-0 border-4",
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
Popover.displayName = 'Popover'

export { Popover }
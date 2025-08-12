import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { Icon } from './Icon'

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  centered?: boolean
  backdrop?: boolean
  closeOnBackdrop?: boolean
  closeOnEscape?: boolean
}

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ 
    className, 
    open, 
    onClose, 
    size = 'md',
    centered = true,
    backdrop = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    children, 
    ...props 
  }, ref) => {
    const sizeClasses = {
      xs: 'max-w-xs',
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      full: 'max-w-full mx-4'
    }
    
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && closeOnEscape && open) {
          onClose()
        }
      }
      
      if (open) {
        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'
      }
      
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'auto'
      }
    }, [open, closeOnEscape, onClose])

    if (!open) return null

    return (
      <div className="fixed inset-0 z-[1050] overflow-y-auto">
        {/* 배경 오버레이 */}
        {backdrop && (
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity duration-300"
            onClick={closeOnBackdrop ? onClose : undefined}
          />
        )}
        
        {/* 다이얼로그 컨텐츠 */}
        <div className={cn(
          "flex min-h-full items-center justify-center p-4",
          !centered && "items-start pt-12"
        )}>
          <div
            ref={ref}
            className={cn(
              "relative w-full bg-white rounded-xl shadow-2xl transform transition-all duration-300",
              "animate-[scaleIn_300ms_ease-out]",
              sizeClasses[size],
              className
            )}
            onClick={(e) => e.stopPropagation()}
            {...props}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Dialog.displayName = 'Dialog'

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  closable?: boolean
  onClose?: () => void
}

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, closable = true, onClose, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between p-6 border-b border-[#DDDDDD]",
        className
      )}
      {...props}
    >
      <div className="flex-1">
        {children}
      </div>
      
      {closable && onClose && (
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-full hover:bg-[#F7F7F7] transition-colors duration-150 ease-in-out"
        >
          <Icon name="close" size="md" className="text-[#717171]" />
        </button>
      )}
    </div>
  )
)
DialogHeader.displayName = 'DialogHeader'

export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-xl font-semibold text-[#222222] pr-4", className)}
      {...props}
    />
  )
)
DialogTitle.displayName = 'DialogTitle'

export interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const DialogDescription = React.forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-[#717171] mt-1 pr-4", className)}
      {...props}
    />
  )
)
DialogDescription.displayName = 'DialogDescription'

export interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-6", className)}
      {...props}
    />
  )
)
DialogBody.displayName = 'DialogBody'

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-end gap-3 p-6 border-t border-[#DDDDDD]",
        className
      )}
      {...props}
    />
  )
)
DialogFooter.displayName = 'DialogFooter'

export { 
  Dialog, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogBody, 
  DialogFooter 
}
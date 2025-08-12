import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { Icon } from './Icon'
import { Avatar } from './Avatar'

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  avatar?: string
  avatarFallback?: string
  icon?: string
  title: string
  description?: string
  time?: string
  read?: boolean
  closable?: boolean
  onClose?: () => void
  onRead?: () => void
  actions?: React.ReactNode
}

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  ({ 
    className, 
    variant = 'default',
    avatar,
    avatarFallback,
    icon,
    title,
    description,
    time,
    read = false,
    closable = true,
    onClose,
    onRead,
    actions,
    ...props 
  }, ref) => {
    const variantClasses = {
      default: "border-[#DDDDDD]",
      success: "border-l-4 border-l-[#008A05] border-t-[#DDDDDD] border-r-[#DDDDDD] border-b-[#DDDDDD]",
      warning: "border-l-4 border-l-[#FFB400] border-t-[#DDDDDD] border-r-[#DDDDDD] border-b-[#DDDDDD]",
      error: "border-l-4 border-l-[#C13515] border-t-[#DDDDDD] border-r-[#DDDDDD] border-b-[#DDDDDD]",
      info: "border-l-4 border-l-[#0F7488] border-t-[#DDDDDD] border-r-[#DDDDDD] border-b-[#DDDDDD]"
    }
    
    const getVariantIcon = () => {
      const iconMap = {
        success: 'check',
        warning: 'exclamation',
        error: 'close',
        info: 'info'
      }
      return iconMap[variant as keyof typeof iconMap]
    }

    const handleClick = () => {
      if (!read && onRead) {
        onRead()
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-start gap-3 p-4 bg-white border rounded-lg transition-all duration-150 ease-in-out",
          !read ? "shadow-md" : "shadow-sm",
          !read ? "bg-[#FAFAFA]" : "bg-white",
          variantClasses[variant],
          "hover:shadow-lg cursor-pointer",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {/* 읽지 않은 표시 */}
        {!read && (
          <div className="absolute top-2 right-2 w-2 h-2 bg-[#FF385C] rounded-full" />
        )}
        
        {/* 아바타 또는 아이콘 */}
        <div className="flex-shrink-0">
          {avatar ? (
            <Avatar 
              src={avatar} 
              fallback={avatarFallback}
              size="md"
            />
          ) : icon ? (
            <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center">
              <Icon 
                name={icon} 
                size="md" 
                className={cn(
                  variant === 'success' && "text-[#008A05]",
                  variant === 'warning' && "text-[#FFB400]", 
                  variant === 'error' && "text-[#C13515]",
                  variant === 'info' && "text-[#0F7488]",
                  variant === 'default' && "text-[#717171]"
                )}
              />
            </div>
          ) : variant !== 'default' && getVariantIcon() ? (
            <div className="w-10 h-10 rounded-full bg-[#F7F7F7] flex items-center justify-center">
              <Icon 
                name={getVariantIcon()!} 
                size="md" 
                className={cn(
                  variant === 'success' && "text-[#008A05]",
                  variant === 'warning' && "text-[#FFB400]", 
                  variant === 'error' && "text-[#C13515]",
                  variant === 'info' && "text-[#0F7488]"
                )}
              />
            </div>
          ) : null}
        </div>
        
        {/* 컨텐츠 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <h4 className={cn(
              "font-semibold text-sm",
              !read ? "text-[#222222]" : "text-[#717171]"
            )}>
              {title}
            </h4>
            
            <div className="flex items-center gap-2">
              {time && (
                <span className="text-xs text-[#717171] flex-shrink-0">
                  {time}
                </span>
              )}
              
              {closable && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onClose?.()
                  }}
                  className="p-1 rounded hover:bg-[#F7F7F7] transition-colors duration-150 ease-in-out"
                >
                  <Icon name="close" size="sm" className="text-[#717171]" />
                </button>
              )}
            </div>
          </div>
          
          {description && (
            <p className="text-sm text-[#717171] mt-1 line-clamp-2">
              {description}
            </p>
          )}
          
          {actions && (
            <div className="mt-3">
              {actions}
            </div>
          )}
        </div>
      </div>
    )
  }
)
Notification.displayName = 'Notification'

export { Notification }
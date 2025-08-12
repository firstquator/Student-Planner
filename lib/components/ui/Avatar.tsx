import * as React from 'react'
import { Image } from './Image'
import { cn } from '@/lib/utils/cn'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  fallback?: string
  status?: 'online' | 'offline' | 'away' | 'busy'
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = '', size = 'md', fallback, status, children, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false)
    
    const sizeClasses = {
      xs: 'w-6 h-6 text-xs',
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
      xl: 'w-16 h-16 text-xl',
      '2xl': 'w-20 h-20 text-2xl'
    }
    
    const statusClasses = {
      online: 'bg-[#008A05]',
      offline: 'bg-[#717171]',
      away: 'bg-[#FFB400]',
      busy: 'bg-[#C13515]'
    }
    
    const statusSizeClasses = {
      xs: 'w-1.5 h-1.5 -bottom-0 -right-0',
      sm: 'w-2 h-2 -bottom-0 -right-0',
      md: 'w-2.5 h-2.5 -bottom-0.5 -right-0.5',
      lg: 'w-3 h-3 -bottom-0.5 -right-0.5',
      xl: 'w-4 h-4 -bottom-1 -right-1',
      '2xl': 'w-5 h-5 -bottom-1 -right-1'
    }
    
    const getInitials = (name?: string) => {
      if (!name) return '?'
      return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
    
    const renderContent = () => {
      if (src && !imageError) {
        return (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        )
      }
      
      if (fallback) {
        return (
          <div className="flex items-center justify-center w-full h-full bg-[#F7F7F7] text-[#717171] font-medium">
            {getInitials(fallback)}
          </div>
        )
      }
      
      return children || (
        <div className="flex items-center justify-center w-full h-full bg-[#F7F7F7] text-[#717171]">
          <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full overflow-hidden",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {renderContent()}
        
        {status && (
          <div
            className={cn(
              "absolute rounded-full border-2 border-white",
              statusClasses[status],
              statusSizeClasses[size]
            )}
          />
        )}
      </div>
    )
  }
)
Avatar.displayName = 'Avatar'

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
  spacing?: 'tight' | 'normal' | 'loose'
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max = 5, spacing = 'normal', children, ...props }, ref) => {
    const spacingClasses = {
      tight: '-space-x-1',
      normal: '-space-x-2',
      loose: '-space-x-1'
    }
    
    const avatars = React.Children.toArray(children)
    const visibleAvatars = max ? avatars.slice(0, max) : avatars
    const hiddenCount = max ? Math.max(0, avatars.length - max) : 0

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center",
          spacingClasses[spacing],
          className
        )}
        {...props}
      >
        {visibleAvatars.map((avatar, index) => (
          <div key={index} className="relative">
            {avatar}
          </div>
        ))}
        
        {hiddenCount > 0 && (
          <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F7F7F7] border-2 border-white text-sm font-medium text-[#717171]">
            +{hiddenCount}
          </div>
        )}
      </div>
    )
  }
)
AvatarGroup.displayName = 'AvatarGroup'

export { Avatar, AvatarGroup }
import * as React from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils/cn'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
  underline?: 'none' | 'hover' | 'always'
  external?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, variant = 'primary', underline = 'hover', external = false, children, ...props }, ref) => {
    const baseClasses = "transition-all duration-150 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:ring-offset-2 rounded-sm"
    
    const variantClasses = {
      primary: "text-[#FF385C] hover:text-[#E31C5F]",
      secondary: "text-[#222222] hover:text-[#FF385C]",
      ghost: "text-[#717171] hover:text-[#222222]"
    }
    
    const underlineClasses = {
      none: "no-underline",
      hover: "no-underline hover:underline",
      always: "underline"
    }
    
    // 외부 링크인 경우 일반 <a> 태그 사용
    if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          ref={ref}
          href={href}
          className={cn(
            baseClasses,
            variantClasses[variant],
            underlineClasses[underline],
            className
          )}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...props}
        >
          {children}
        </a>
      )
    }
    
    // 내부 링크인 경우 Next.js Link 사용
    return (
      <NextLink
        ref={ref}
        href={href}
        className={cn(
          baseClasses,
          variantClasses[variant],
          underlineClasses[underline],
          className
        )}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)
Link.displayName = 'Link'

export { Link }
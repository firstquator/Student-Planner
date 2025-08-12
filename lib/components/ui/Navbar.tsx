import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, fixed = true, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "bg-white border-b border-[#DDDDDD] px-6 h-20 z-[1020]",
          fixed ? "sticky top-0" : "",
          className
        )}
        {...props}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-full">
          {children}
        </div>
      </nav>
    )
  }
)
Navbar.displayName = 'Navbar'

export interface NavbarBrandProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
}

const NavbarBrand = React.forwardRef<HTMLAnchorElement, NavbarBrandProps>(
  ({ className, href = '/', children, ...props }, ref) => (
    <Link
      ref={ref}
      href={href}
      className={cn("flex items-center font-bold text-xl text-[#FF385C]", className)}
      {...props}
    >
      {children}
    </Link>
  )
)
NavbarBrand.displayName = 'NavbarBrand'

export interface NavbarMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarMenu = React.forwardRef<HTMLDivElement, NavbarMenuProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center space-x-1", className)}
      {...props}
    >
      {children}
    </div>
  )
)
NavbarMenu.displayName = 'NavbarMenu'

export interface NavbarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  active?: boolean
}

const NavbarItem = React.forwardRef<HTMLAnchorElement, NavbarItemProps>(
  ({ className, href, active = false, children, ...props }, ref) => (
    <Link
      ref={ref}
      href={href}
      className={cn(
        "text-[#222222] text-base font-medium px-3 py-2 rounded-full transition-all duration-150 ease-in-out",
        "hover:bg-[#F7F7F7]",
        active ? "bg-[#EBEBEB]" : "",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
)
NavbarItem.displayName = 'NavbarItem'

export interface NavbarActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarActions = React.forwardRef<HTMLDivElement, NavbarActionsProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center space-x-2", className)}
      {...props}
    >
      {children}
    </div>
  )
)
NavbarActions.displayName = 'NavbarActions'

export { Navbar, NavbarBrand, NavbarMenu, NavbarItem, NavbarActions }
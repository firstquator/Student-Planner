import * as React from 'react'
import NextImage from 'next/image'
import { cn } from '@/lib/utils/cn'

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  quality?: number
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  fallback?: React.ReactNode
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ 
    className, 
    src, 
    alt, 
    width, 
    height, 
    fill = false,
    priority = false,
    quality = 75,
    sizes,
    placeholder = 'empty',
    blurDataURL,
    rounded = 'md',
    objectFit = 'cover',
    fallback,
    ...props 
  }, ref) => {
    const [error, setError] = React.useState(false)
    
    const roundedClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full'
    }
    
    const objectFitClasses = {
      contain: 'object-contain',
      cover: 'object-cover',
      fill: 'object-fill',
      none: 'object-none',
      'scale-down': 'object-scale-down'
    }
    
    if (error && fallback) {
      return <div className={cn("flex items-center justify-center bg-[#F7F7F7]", roundedClasses[rounded], className)}>{fallback}</div>
    }
    
    if (error) {
      return (
        <div className={cn(
          "flex items-center justify-center bg-[#F7F7F7] text-[#717171] text-sm",
          roundedClasses[rounded],
          className
        )} style={{ width, height }}>
          이미지를 불러올 수 없습니다
        </div>
      )
    }

    return (
      <NextImage
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={cn(
          roundedClasses[rounded],
          objectFitClasses[objectFit],
          className
        )}
        onError={() => setError(true)}
        {...props}
      />
    )
  }
)
Image.displayName = 'Image'

export { Image }
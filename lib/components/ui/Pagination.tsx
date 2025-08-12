import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { Button } from './button'
import { Icon } from './Icon'

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
  boundaryCount?: number
  showFirstLast?: boolean
  showPrevNext?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ 
    className,
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
    boundaryCount = 1,
    showFirstLast = true,
    showPrevNext = true,
    disabled = false,
    size = 'md',
    ...props 
  }, ref) => {
    const generatePageNumbers = () => {
      const pages: (number | string)[] = []
      
      // 시작 범위
      for (let i = 1; i <= Math.min(boundaryCount, totalPages); i++) {
        pages.push(i)
      }
      
      // 왼쪽 생략 부호
      const leftSiblingIndex = Math.max(currentPage - siblingCount, boundaryCount + 1)
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - boundaryCount)
      
      if (leftSiblingIndex > boundaryCount + 2) {
        pages.push('...')
      }
      
      // 현재 페이지 주변
      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
        if (i > boundaryCount && i <= totalPages - boundaryCount) {
          pages.push(i)
        }
      }
      
      // 오른쪽 생략 부호
      if (rightSiblingIndex < totalPages - boundaryCount - 1) {
        pages.push('...')
      }
      
      // 끝 범위
      for (let i = Math.max(totalPages - boundaryCount + 1, boundaryCount + 1); i <= totalPages; i++) {
        if (!pages.includes(i)) {
          pages.push(i)
        }
      }
      
      return pages
    }
    
    const pages = generatePageNumbers()
    
    const buttonSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'

    return (
      <nav
        ref={ref}
        className={cn("flex items-center justify-center space-x-1", className)}
        {...props}
      >
        {/* 첫 페이지 */}
        {showFirstLast && (
          <Button
            variant="ghost"
            size={buttonSize}
            onClick={() => onPageChange(1)}
            disabled={disabled || currentPage === 1}
            className="px-3"
          >
            <Icon name="chevron-left" size="sm" className="mr-1" />
            <Icon name="chevron-left" size="sm" />
          </Button>
        )}
        
        {/* 이전 페이지 */}
        {showPrevNext && (
          <Button
            variant="ghost"
            size={buttonSize}
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={disabled || currentPage === 1}
            className="px-3"
          >
            <Icon name="chevron-left" size="sm" />
            이전
          </Button>
        )}
        
        {/* 페이지 번호들 */}
        {pages.map((page, index) => (
          page === '...' ? (
            <span
              key={`ellipsis-${index}`}
              className="px-3 py-2 text-[#717171]"
            >
              ...
            </span>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "primary" : "ghost"}
              size={buttonSize}
              onClick={() => onPageChange(page as number)}
              disabled={disabled}
              className={cn(
                "min-w-[2.5rem]",
                currentPage === page && "pointer-events-none"
              )}
            >
              {page}
            </Button>
          )
        ))}
        
        {/* 다음 페이지 */}
        {showPrevNext && (
          <Button
            variant="ghost"
            size={buttonSize}
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={disabled || currentPage === totalPages}
            className="px-3"
          >
            다음
            <Icon name="chevron-right" size="sm" />
          </Button>
        )}
        
        {/* 마지막 페이지 */}
        {showFirstLast && (
          <Button
            variant="ghost"
            size={buttonSize}
            onClick={() => onPageChange(totalPages)}
            disabled={disabled || currentPage === totalPages}
            className="px-3"
          >
            <Icon name="chevron-right" size="sm" />
            <Icon name="chevron-right" size="sm" className="ml-1" />
          </Button>
        )}
      </nav>
    )
  }
)
Pagination.displayName = 'Pagination'

export { Pagination }
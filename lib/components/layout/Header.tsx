import Link from 'next/link'
import { Button } from '@/lib/components/ui/button'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            학생 플래너
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              대시보드
            </Link>
            <Link href="/assignments" className="text-gray-600 hover:text-gray-900">
              과제
            </Link>
            <Link href="/schedule" className="text-gray-600 hover:text-gray-900">
              일정
            </Link>
            <Link href="/subjects" className="text-gray-600 hover:text-gray-900">
              과목
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm">
              로그인
            </Button>
            <Button size="sm">
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
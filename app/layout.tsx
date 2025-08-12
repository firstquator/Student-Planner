import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/lib/components/layout/Header'
import Footer from '@/lib/components/layout/Footer'

export const metadata: Metadata = {
  title: '학생 플래너 - 효율적인 학습 관리',
  description: '과제, 일정, 목표를 체계적으로 관리하는 학생 전용 플래너',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
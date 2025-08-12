import Link from 'next/link'
import { Button } from '@/lib/components/ui/button'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* 히어로 섹션 */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          효율적인 학습 관리의 시작
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          과제, 일정, 목표를 체계적으로 관리하고 학업 성과를 향상시키세요.
          학생을 위한 올인원 플래너입니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">지금 시작하기</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">더 알아보기</Link>
          </Button>
        </div>
      </section>

      {/* 주요 기능 소개 */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 rounded-lg border">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📚</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">과제 관리</h3>
          <p className="text-gray-600">
            마감일, 우선순위, 진행상황을 체계적으로 관리하여 과제를 놓치지 마세요.
          </p>
        </div>

        <div className="text-center p-6 rounded-lg border">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📅</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">일정 관리</h3>
          <p className="text-gray-600">
            수업, 시험, 개인 일정을 한 눈에 보고 효율적으로 시간을 관리하세요.
          </p>
        </div>

        <div className="text-center p-6 rounded-lg border">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">목표 설정</h3>
          <p className="text-gray-600">
            학습 목표를 설정하고 진행 상황을 추적하여 꾸준한 성장을 이루세요.
          </p>
        </div>

        <div className="text-center p-6 rounded-lg border">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">성과 분석</h3>
          <p className="text-gray-600">
            학습 패턴과 성과를 분석하여 더 나은 학습 전략을 세우세요.
          </p>
        </div>

        <div className="text-center p-6 rounded-lg border">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔔</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">알림 기능</h3>
          <p className="text-gray-600">
            중요한 일정과 마감일을 놓치지 않도록 스마트 알림을 받아보세요.
          </p>
        </div>

        <div className="text-center p-6 rounded-lg border">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📱</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">모바일 최적화</h3>
          <p className="text-gray-600">
            언제 어디서나 모바일에서도 편리하게 플래너를 사용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="text-center bg-blue-50 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">지금 시작해보세요!</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          무료로 시작하여 체계적인 학습 관리의 효과를 직접 경험해보세요.
          더 나은 학업 성과를 위한 첫걸음을 지금 내딛으세요.
        </p>
        <Button size="lg" asChild>
          <Link href="/signup">무료로 시작하기</Link>
        </Button>
      </section>
    </div>
  )
}
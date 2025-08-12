import { Button } from '@/lib/components/ui/button'

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">대시보드</h1>
        <p className="text-gray-600">학습 현황을 한눈에 확인하세요</p>
      </div>

      {/* 요약 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">진행 중인 과제</h3>
            <span className="text-2xl">📚</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">5</div>
          <p className="text-xs text-gray-500">전체 12개 중</p>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">오늘 일정</h3>
            <span className="text-2xl">📅</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">3</div>
          <p className="text-xs text-gray-500">수업 및 개인 일정</p>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">완료된 목표</h3>
            <span className="text-2xl">🎯</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">8</div>
          <p className="text-xs text-gray-500">이번 달 달성</p>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">학습 시간</h3>
            <span className="text-2xl">⏰</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">24h</div>
          <p className="text-xs text-gray-500">이번 주 총 학습시간</p>
        </div>
      </div>

      {/* 빠른 액션 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">빠른 작업</h2>
          <div className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              📝 새 과제 추가
            </Button>
            <Button className="w-full justify-start" variant="outline">
              📅 일정 등록
            </Button>
            <Button className="w-full justify-start" variant="outline">
              🎯 목표 설정
            </Button>
            <Button className="w-full justify-start" variant="outline">
              📊 성과 분석
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">이번 주 일정</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div>
                <p className="font-medium">데이터베이스 설계 과제</p>
                <p className="text-sm text-gray-600">오늘 오후 6시 마감</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-medium">소프트웨어공학 발표</p>
                <p className="text-sm text-gray-600">내일 오전 10시</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div>
                <p className="font-medium">알고리즘 중간고사</p>
                <p className="text-sm text-gray-600">금요일 오후 2시</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function DashboardPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">대시보드</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">📋 할 일 목록</h2>
            <p className="text-gray-600">오늘 해야 할 일들을 확인하세요.</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-blue-600">5</span>
              <span className="text-sm text-gray-500 ml-1">개의 할 일</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">📅 오늘의 일정</h2>
            <p className="text-gray-600">오늘 예정된 일정들입니다.</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-green-600">3</span>
              <span className="text-sm text-gray-500 ml-1">개의 일정</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">📊 학습 진도</h2>
            <p className="text-gray-600">이번 주 학습 진도율입니다.</p>
            <div className="mt-4">
              <span className="text-2xl font-bold text-purple-600">75%</span>
              <span className="text-sm text-gray-500 ml-1">완료</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">📈 최근 활동</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">수학 과제 완료</span>
                <span className="text-xs text-gray-500 ml-auto">2시간 전</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">영어 단어 암기</span>
                <span className="text-xs text-gray-500 ml-auto">4시간 전</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">과학 실험 보고서 작성</span>
                <span className="text-xs text-gray-500 ml-auto">1일 전</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">🎯 이번 주 목표</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">수학 문제집 50문제</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">진행 중</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">영어 단어 100개 암기</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">완료</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">과학 실험 보고서 3개</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">대기 중</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
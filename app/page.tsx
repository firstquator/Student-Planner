export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Student Planner
        </h1>
        <p className="text-center text-gray-600 mb-8">
          학생을 위한 일정 관리 애플리케이션
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">📚 할 일 관리</h2>
            <p className="text-gray-600">
              과제와 공부할 내용을 체계적으로 관리하세요.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">📅 일정 관리</h2>
            <p className="text-gray-600">
              수업 일정과 시험 일정을 한눈에 확인하세요.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">📊 진도 추적</h2>
            <p className="text-gray-600">
              학습 진도를 추적하고 목표를 달성하세요.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
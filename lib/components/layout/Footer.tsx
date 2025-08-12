export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">학생 플래너</h3>
            <p className="text-gray-600">
              효율적인 학습 관리를 위한 올인원 플래너
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">주요 기능</h4>
            <ul className="space-y-2 text-gray-600">
              <li>과제 관리</li>
              <li>일정 관리</li>
              <li>과목 관리</li>
              <li>학습 목표 설정</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">지원</h4>
            <ul className="space-y-2 text-gray-600">
              <li>도움말</li>
              <li>문의하기</li>
              <li>개인정보처리방침</li>
              <li>이용약관</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 학생 플래너. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
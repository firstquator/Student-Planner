# Student Planner - 프로젝트 구현 Todo List

## 📋 프로젝트 현황 분석

### ✅ 완료된 기본 설정
- [x] Next.js 15 프로젝트 초기화
- [x] TypeScript 설정 
- [x] Tailwind CSS 설정
- [x] 기본 UI 컴포넌트 라이브러리 구성 (Button, Input, Card 등)
- [x] Supabase 클라이언트 설정
- [x] 기본 폴더 구조 설정
- [x] 홈페이지 레이아웃 구현
- [x] 기본 과제 관련 쿼리 함수 작성 (assignments.ts)

### 🔄 현재 상태
- 프로젝트 기본 골격은 완성
- UI 컴포넌트 시스템 구축됨
- Supabase 연동 준비 완료
- 데이터베이스 구조 설계 완료

---

## 🎯 Phase 1: 핵심 기능 구현 (Frontend 우선)

### 1.1 인증 시스템 구현
#### 🔐 Authentication UI
- [ ] `app/(auth)/login/page.tsx` - 로그인 페이지 구현
- [ ] `app/(auth)/signup/page.tsx` - 회원가입 페이지 구현
- [ ] `app/(auth)/forgot-password/page.tsx` - 비밀번호 재설정 페이지
- [ ] `app/(auth)/components/AuthForm.tsx` - 공통 인증 폼 컴포넌트
- [ ] `app/(auth)/components/SocialLogin.tsx` - 소셜 로그인 컴포넌트

#### 🔧 Authentication Logic
- [ ] `lib/hooks/useAuth.ts` - 인증 상태 관리 훅
- [ ] `lib/hooks/useAuthForm.ts` - 인증 폼 로직 훅
- [ ] `app/api/auth/signup/route.ts` - 회원가입 API
- [ ] `app/api/auth/login/route.ts` - 로그인 API
- [ ] `app/api/auth/logout/route.ts` - 로그아웃 API
- [ ] `middleware.ts` 업데이트 - 라우트 보호 로직

### 1.2 데이터베이스 구조 구현
#### 📊 Supabase Schema
- [ ] `users` 테이블 생성 및 RLS 설정
- [ ] `subjects` 테이블 생성 및 RLS 설정
- [ ] `assignments` 테이블 생성 및 RLS 설정
- [ ] `schedules` 테이블 생성 및 RLS 설정
- [ ] `goals` 테이블 생성 및 RLS 설정
- [ ] `goal_milestones` 테이블 생성 및 RLS 설정
- [ ] `notifications` 테이블 생성 및 RLS 설정

#### 🔗 Database Queries
- [ ] `lib/supabase/queries/subjects.ts` - 과목 관련 쿼리
- [ ] `lib/supabase/queries/schedules.ts` - 일정 관련 쿼리
- [ ] `lib/supabase/queries/goals.ts` - 목표 관련 쿼리
- [ ] `lib/supabase/queries/dashboard.ts` - 대시보드 관련 쿼리
- [ ] `lib/supabase/types.ts` 업데이트 - 자동 생성된 타입

### 1.3 대시보드 구현
#### 📊 Dashboard UI
- [ ] `app/dashboard/page.tsx` - 메인 대시보드 페이지
- [ ] `app/dashboard/components/DashboardStats.tsx` - 통계 위젯
- [ ] `app/dashboard/components/TodayAssignments.tsx` - 오늘 과제 위젯
- [ ] `app/dashboard/components/TodaySchedule.tsx` - 오늘 일정 위젯
- [ ] `app/dashboard/components/RecentActivity.tsx` - 최근 활동 위젯
- [ ] `app/dashboard/components/QuickActions.tsx` - 빠른 작업 버튼

#### 📈 Dashboard Logic
- [ ] `app/dashboard/hooks/useDashboardData.ts` - 대시보드 데이터 훅
- [ ] `app/api/dashboard/route.ts` - 대시보드 API
- [ ] `app/api/dashboard/stats/route.ts` - 통계 API

### 1.4 과제 관리 시스템 구현
#### 📝 Assignments UI
- [ ] `app/assignments/page.tsx` - 과제 목록 페이지
- [ ] `app/assignments/[id]/page.tsx` - 과제 상세 페이지
- [ ] `app/assignments/new/page.tsx` - 새 과제 생성 페이지
- [ ] `app/assignments/components/AssignmentList.tsx` - 과제 목록 컴포넌트
- [ ] `app/assignments/components/AssignmentCard.tsx` - 과제 카드 컴포넌트
- [ ] `app/assignments/components/AssignmentForm.tsx` - 과제 폼 컴포넌트
- [ ] `app/assignments/components/AssignmentFilters.tsx` - 필터 컴포넌트
- [ ] `app/assignments/components/FileUpload.tsx` - 파일 업로드 컴포넌트

#### ⚙️ Assignments Logic
- [ ] `app/assignments/hooks/useAssignments.ts` - 과제 목록 훅
- [ ] `app/assignments/hooks/useAssignmentForm.ts` - 과제 폼 훅
- [ ] `app/assignments/hooks/useAssignmentFilters.ts` - 필터 훅
- [ ] `app/api/assignments/route.ts` - 과제 CRUD API
- [ ] `app/api/assignments/[id]/route.ts` - 개별 과제 API
- [ ] `app/api/assignments/[id]/complete/route.ts` - 과제 완료 API
- [ ] `app/api/assignments/[id]/attachments/route.ts` - 첨부파일 API

---

## 🚀 Phase 2: 추가 기능 구현

### 2.1 과목 관리 시스템
#### 📚 Subjects UI
- [ ] `app/subjects/page.tsx` - 과목 관리 페이지
- [ ] `app/subjects/components/SubjectList.tsx` - 과목 목록
- [ ] `app/subjects/components/SubjectForm.tsx` - 과목 폼
- [ ] `app/subjects/components/ColorPicker.tsx` - 색상 선택기

#### ⚙️ Subjects Logic
- [ ] `app/subjects/hooks/useSubjects.ts` - 과목 관리 훅
- [ ] `app/api/subjects/route.ts` - 과목 CRUD API
- [ ] `app/api/subjects/[id]/route.ts` - 개별 과목 API

### 2.2 일정 관리 시스템
#### 📅 Calendar UI
- [ ] `app/calendar/page.tsx` - 캘린더 메인 페이지
- [ ] `app/calendar/components/CalendarView.tsx` - 캘린더 뷰
- [ ] `app/calendar/components/EventForm.tsx` - 일정 폼
- [ ] `app/calendar/components/EventList.tsx` - 일정 목록
- [ ] `app/calendar/components/TimeTable.tsx` - 시간표 뷰
- [ ] `app/calendar/components/EventModal.tsx` - 일정 상세 모달

#### ⚙️ Calendar Logic
- [ ] `app/calendar/hooks/useCalendar.ts` - 캘린더 데이터 훅
- [ ] `app/calendar/hooks/useSchedules.ts` - 일정 관리 훅
- [ ] `app/api/schedules/route.ts` - 일정 CRUD API
- [ ] `app/api/schedules/[id]/route.ts` - 개별 일정 API

### 2.3 목표 관리 시스템
#### 🎯 Goals UI
- [ ] `app/goals/page.tsx` - 목표 관리 페이지
- [ ] `app/goals/[id]/page.tsx` - 목표 상세 페이지
- [ ] `app/goals/components/GoalList.tsx` - 목표 목록
- [ ] `app/goals/components/GoalCard.tsx` - 목표 카드
- [ ] `app/goals/components/GoalForm.tsx` - 목표 폼
- [ ] `app/goals/components/MilestoneList.tsx` - 마일스톤 목록
- [ ] `app/goals/components/ProgressChart.tsx` - 진행률 차트

#### ⚙️ Goals Logic
- [ ] `app/goals/hooks/useGoals.ts` - 목표 관리 훅
- [ ] `app/goals/hooks/useMilestones.ts` - 마일스톤 훅
- [ ] `app/api/goals/route.ts` - 목표 CRUD API
- [ ] `app/api/goals/[id]/route.ts` - 개별 목표 API
- [ ] `app/api/goals/[goalId]/milestones/route.ts` - 마일스톤 API

---

## 🎨 Phase 3: UI/UX 개선 및 고급 기능

### 3.1 성과 분석 시스템
#### 📊 Analytics UI
- [ ] `app/analytics/page.tsx` - 분석 메인 페이지
- [ ] `app/analytics/components/StatsOverview.tsx` - 통계 개요
- [ ] `app/analytics/components/CompletionChart.tsx` - 완료율 차트
- [ ] `app/analytics/components/TimeAnalysis.tsx` - 시간 분석 차트
- [ ] `app/analytics/components/SubjectPerformance.tsx` - 과목별 성과
- [ ] `app/analytics/components/MonthlyReport.tsx` - 월간 리포트

#### ⚙️ Analytics Logic
- [ ] `app/analytics/hooks/useAnalytics.ts` - 분석 데이터 훅
- [ ] `app/api/analytics/assignments/route.ts` - 과제 분석 API
- [ ] `app/api/analytics/study-time/route.ts` - 학습 시간 분석 API
- [ ] `app/api/analytics/report/route.ts` - 리포트 생성 API

### 3.2 알림 시스템
#### 🔔 Notifications UI
- [ ] `lib/components/layout/NotificationDropdown.tsx` - 알림 드롭다운
- [ ] `app/notifications/page.tsx` - 알림 관리 페이지
- [ ] `app/notifications/components/NotificationList.tsx` - 알림 목록
- [ ] `app/notifications/components/NotificationSettings.tsx` - 알림 설정

#### ⚙️ Notifications Logic
- [ ] `lib/hooks/useNotifications.ts` - 알림 관리 훅
- [ ] `app/api/notifications/route.ts` - 알림 API
- [ ] `app/api/notifications/settings/route.ts` - 알림 설정 API
- [ ] 브라우저 알림 기능 구현

### 3.3 사용자 설정 시스템
#### ⚙️ Settings UI
- [ ] `app/settings/page.tsx` - 설정 메인 페이지
- [ ] `app/settings/components/ProfileSettings.tsx` - 프로필 설정
- [ ] `app/settings/components/AppSettings.tsx` - 앱 설정
- [ ] `app/settings/components/NotificationSettings.tsx` - 알림 설정
- [ ] `app/settings/components/DataExport.tsx` - 데이터 내보내기

#### ⚙️ Settings Logic
- [ ] `app/settings/hooks/useSettings.ts` - 설정 관리 훅
- [ ] `app/api/users/profile/route.ts` - 프로필 API
- [ ] `app/api/settings/route.ts` - 설정 API

---

## 🎛️ Phase 4: 성능 최적화 및 고도화

### 4.1 성능 최적화
- [ ] **이미지 최적화**: Next.js Image 컴포넌트 적용
- [ ] **코드 분할**: 동적 import를 통한 지연 로딩
- [ ] **캐싱 전략**: React Query/SWR 도입 검토
- [ ] **번들 분석**: webpack-bundle-analyzer 적용
- [ ] **Web Vitals 최적화**: Core Web Vitals 개선

### 4.2 접근성 개선
- [ ] **ARIA 라벨 추가**: 스크린 리더 지원
- [ ] **키보드 내비게이션**: 전체 앱 키보드 접근성
- [ ] **색상 대비 검사**: WCAG 2.1 AA 준수
- [ ] **포커스 관리**: 모달, 드롭다운 포커스 처리
- [ ] **의미있는 HTML**: 시맨틱 마크업 개선

### 4.3 모바일 최적화
- [ ] **터치 제스처 지원**: 스와이프, 탭 제스처
- [ ] **모바일 네비게이션**: 햄버거 메뉴, 하단 탭
- [ ] **반응형 테이블**: 작은 화면에서의 데이터 표시
- [ ] **가상 키보드 대응**: 입력 필드 최적화
- [ ] **오프라인 지원**: PWA 기능 검토

### 4.4 검색 기능
- [ ] `lib/components/layout/GlobalSearch.tsx` - 전역 검색
- [ ] `app/api/search/route.ts` - 통합 검색 API
- [ ] **전문 검색**: 과제, 일정, 목표 통합 검색
- [ ] **검색 필터**: 날짜, 타입, 상태별 필터

---

## 🧪 Phase 5: 테스팅 및 품질 보증

### 5.1 테스트 환경 구축
- [ ] **Jest 설정**: 유닛 테스트 환경 구축
- [ ] **React Testing Library**: 컴포넌트 테스트 도구
- [ ] **MSW**: API 모킹을 위한 Service Worker
- [ ] **Playwright**: E2E 테스트 도구

### 5.2 테스트 작성
- [ ] **컴포넌트 테스트**: 주요 UI 컴포넌트 테스트
- [ ] **훅 테스트**: 커스텀 훅 단위 테스트
- [ ] **API 테스트**: Route Handler 통합 테스트
- [ ] **E2E 테스트**: 핵심 사용자 워크플로우

### 5.3 코드 품질 관리
- [ ] **ESLint 규칙 강화**: 엄격한 린트 규칙 적용
- [ ] **Prettier 설정**: 일관된 코드 포맷팅
- [ ] **Husky**: Git Hook을 통한 pre-commit 검사
- [ ] **Codecov**: 코드 커버리지 측정

---

## 🚢 Phase 6: 배포 및 운영

### 6.1 배포 환경 설정
- [ ] **Vercel 배포**: 프로덕션 배포 설정
- [ ] **환경 변수 관리**: 개발/스테이징/프로덕션 환경 분리
- [ ] **도메인 설정**: 커스텀 도메인 연결
- [ ] **SSL 인증서**: HTTPS 적용

### 6.2 모니터링 설정
- [ ] **Vercel Analytics**: 사용자 분석 도구
- [ ] **Error Tracking**: 에러 모니터링 (Sentry 검토)
- [ ] **Performance Monitoring**: Core Web Vitals 추적
- [ ] **Database Monitoring**: Supabase 모니터링 설정

### 6.3 문서화
- [ ] **README 업데이트**: 프로젝트 소개 및 설정 가이드
- [ ] **API 문서**: 실제 API 엔드포인트 문서화
- [ ] **컴포넌트 문서**: Storybook 도입 검토
- [ ] **사용자 가이드**: 앱 사용법 가이드

---

## 🎯 우선순위 및 마일스톤

### 🥇 Phase 1 (핵심 기능) - 목표: 4-6주
**MVP(Minimum Viable Product) 완성**
1. 인증 시스템 (1주)
2. 데이터베이스 구조 (1주)
3. 대시보드 (1주)
4. 과제 관리 (2-3주)

### 🥈 Phase 2 (기본 기능 완성) - 목표: 3-4주
**기본적인 학습 관리 도구로서 완성**
1. 과목 관리 (1주)
2. 일정 관리 (2주)
3. 목표 관리 (1-2주)

### 🥉 Phase 3 (고급 기능) - 목표: 2-3주
**사용자 경험 향상**
1. 성과 분석 (1주)
2. 알림 시스템 (1주)
3. 사용자 설정 (1주)

### 🏆 Phase 4-6 (최적화 및 운영) - 목표: 2-3주
**프로덕션 준비 및 품질 향상**

---

## 📝 개발 규칙 및 가이드라인

### 코딩 컨벤션
- **TypeScript 엄격 모드** 사용
- **ESLint + Prettier** 강제 적용
- **컴포넌트명**: PascalCase
- **파일명**: kebab-case 또는 PascalCase (컴포넌트)
- **함수명**: camelCase
- **상수명**: UPPER_SNAKE_CASE

### Git 워크플로우
- **Feature Branch**: `feature/assignment-list`
- **Commit Message**: 한국어 사용, 명령형
- **PR Template**: 체크리스트 및 스크린샷 포함

### 개발 순서
1. **UI 컴포넌트 먼저 구현** (Storybook 활용 검토)
2. **Mock 데이터로 기능 검증**
3. **API 연동 및 데이터베이스 연결**
4. **에러 핸들링 및 로딩 상태**
5. **테스트 작성**
6. **성능 최적화**

### 품질 체크리스트
- [ ] TypeScript 에러 없음
- [ ] ESLint 경고 없음
- [ ] 반응형 디자인 적용
- [ ] 로딩 상태 처리
- [ ] 에러 상태 처리
- [ ] 접근성 고려
- [ ] 성능 최적화

---

## 🎉 완료 기준

### Phase 1 완료 기준
- 회원가입/로그인 가능
- 과제 CRUD 가능
- 기본 대시보드 동작
- 모바일에서 정상 동작

### 전체 프로젝트 완료 기준
- 모든 핵심 기능 동작
- 성능 기준 충족 (Lighthouse 90+ 점수)
- 접근성 기준 충족 (WCAG 2.1 AA)
- 테스트 커버리지 80% 이상
- 프로덕션 배포 완료
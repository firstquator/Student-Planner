# S1-1. 인증시스템 구현 - SuperClaude 프롬프트

## 🎯 세션 목표
Next.js 15 + Supabase 환경에서 완전한 인증 시스템을 구현합니다.
사용자 회원가입, 로그인, 비밀번호 재설정, 소셜 로그인 기능을 모두 포함합니다.

## 📋 구현 대상
### 🔐 Authentication UI
- `app/(auth)/login/page.tsx` - 로그인 페이지 구현
- `app/(auth)/signup/page.tsx` - 회원가입 페이지 구현
- `app/(auth)/forgot-password/page.tsx` - 비밀번호 재설정 페이지
- `app/(auth)/components/AuthForm.tsx` - 공통 인증 폼 컴포넌트
- `app/(auth)/components/SocialLogin.tsx` - 소셜 로그인 컴포넌트

### 🔧 Authentication Logic
- `lib/hooks/useAuth.ts` - 인증 상태 관리 훅
- `lib/hooks/useAuthForm.ts` - 인증 폼 로직 훅
- `app/api/auth/signup/route.ts` - 회원가입 API
- `app/api/auth/login/route.ts` - 로그인 API
- `app/api/auth/logout/route.ts` - 로그아웃 API
- `middleware.ts` 업데이트 - 라우트 보호 로직

## 🚀 SuperClaude 구현 프롬프트

```
/sc:implement 학생 플래너 프로젝트의 완전한 인증 시스템 구현

현재 프로젝트는 Next.js 15 + TypeScript + Supabase + Tailwind CSS 환경입니다.

## 구현 요구사항

### 1. Authentication Pages 구현
1. **로그인 페이지** (`app/(auth)/login/page.tsx`)
   - 이메일/비밀번호 입력 폼
   - "비밀번호를 잊어버리셨나요?" 링크
   - 소셜 로그인 버튼들 (Google, GitHub)
   - 회원가입 페이지로 이동 링크
   - 로딩 상태 및 에러 메시지 표시
   - 반응형 디자인 (모바일 우선)

2. **회원가입 페이지** (`app/(auth)/signup/page.tsx`)
   - 이메일, 비밀번호, 비밀번호 확인, 전체 이름 입력
   - 비밀번호 강도 표시기
   - 이용약관 동의 체크박스
   - 이메일 인증 안내 메시지
   - 로그인 페이지로 이동 링크

3. **비밀번호 재설정 페이지** (`app/(auth)/forgot-password/page.tsx`)
   - 이메일 입력 폼
   - 재설정 이메일 발송 확인 메시지
   - 로그인 페이지로 돌아가기 링크

### 2. Shared Components 구현
1. **공통 인증 폼** (`app/(auth)/components/AuthForm.tsx`)
   - 재사용 가능한 폼 컴포넌트
   - 폼 검증 로직 포함
   - 로딩 상태 관리
   - 에러 메시지 표시

2. **소셜 로그인** (`app/(auth)/components/SocialLogin.tsx`)
   - Google, GitHub 로그인 버튼
   - 소셜 로그인 로직 처리
   - 에러 처리

### 3. Custom Hooks 구현
1. **인증 상태 관리** (`lib/hooks/useAuth.ts`)
   - 사용자 인증 상태 추적
   - 로그인/로그아웃 함수 제공
   - 사용자 정보 캐싱
   - 자동 토큰 갱신

2. **인증 폼 로직** (`lib/hooks/useAuthForm.ts`)
   - 폼 상태 관리 (로딩, 에러, 성공)
   - 입력 검증 로직
   - 제출 처리 로직

### 4. API Routes 구현
1. **회원가입 API** (`app/api/auth/signup/route.ts`)
   - Supabase Auth를 사용한 회원가입
   - 이메일 검증 처리
   - 사용자 프로필 생성
   - 에러 처리 및 응답

2. **로그인 API** (`app/api/auth/login/route.ts`)
   - Supabase Auth를 사용한 로그인
   - 세션 쿠키 설정
   - 에러 처리

3. **로그아웃 API** (`app/api/auth/logout/route.ts`)
   - 세션 종료
   - 쿠키 클리어
   - 리디렉션 처리

### 5. 미들웨어 업데이트 (`middleware.ts`)
   - 인증이 필요한 페이지 보호
   - 로그인한 사용자의 인증 페이지 접근 방지
   - 자동 리디렉션 처리

## 기술적 요구사항
- **TypeScript**: 모든 컴포넌트와 API에 타입 정의
- **Supabase Auth**: 인증 제공자로 Supabase 사용
- **Form Validation**: react-hook-form 또는 네이티브 검증 사용
- **UI Components**: 프로젝트의 기존 UI 컴포넌트 시스템 활용
- **Error Handling**: 사용자 친화적인 에러 메시지
- **Accessibility**: WCAG 2.1 AA 접근성 기준 준수
- **Mobile First**: 모바일 우선 반응형 디자인

## 설계 패턴
- **App Router**: Next.js App Router 패턴 준수
- **Server/Client Components**: 적절한 컴포넌트 분리
- **Route Handlers**: API 엔드포인트는 Route Handler 사용
- **RLS**: Supabase Row Level Security 설정
- **Type Safety**: Database 타입과 API 타입 일치

## 보안 고려사항
- 비밀번호 최소 8자리, 특수문자 포함 강제
- CSRF 보호
- Rate Limiting 고려
- 민감한 정보는 서버에서만 처리
- 적절한 에러 메시지 (보안 정보 노출 방지)

--seq --c7 --persona-security --persona-frontend --validate
```

## 🧪 테스트 체크리스트
- [ ] 회원가입 프로세스가 정상 동작하는가?
- [ ] 로그인/로그아웃이 정상 동작하는가?
- [ ] 비밀번호 재설정이 정상 동작하는가?
- [ ] 소셜 로그인이 정상 동작하는가?
- [ ] 미들웨어가 보호된 페이지를 적절히 보호하는가?
- [ ] 모바일에서 정상 동작하는가?
- [ ] 접근성 기준을 충족하는가?
- [ ] 에러 상황이 적절히 처리되는가?

## 💡 MCP 활용 가이드
- **Context7**: Supabase Auth, Next.js App Router 패턴 참조
- **Sequential**: 복잡한 인증 플로우 분석 및 설계
- **Supabase MCP**: 데이터베이스 스키마 설정 및 RLS 정책
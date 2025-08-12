# CLAUDE.md

이 파일은 이 저장소에서 코드 작업을 할 때 Claude Code (claude.ai/code)에 대한 가이드를 제공합니다.

---

## 언어 설정

**모든 응답과 커뮤니케이션은 한국어로 진행하세요.** 
코드 주석, 커밋 메시지, 문서화, 사용자와의 대화 등 모든 상황에서 한국어를 사용합니다.

---

## MCP

다음과 같은 MCP 를 적극 활용하기 바람.

- context7 MCP
- sequential-thinking MCP
- playwright MCP
- supabase MCP

## Next.js: Route Handler 우선 사용

-   **모든 API 엔드포인트는 Route Handler를 사용하여 구현하세요.**
-   **데이터베이스 작업, 외부 API 호출, 인증 등 복잡한 서버 작업은 반드시 Route Handler를 사용하세요.**
-   **Server Action은 단순 폼 제출 또는 간단한 데이터 처리에만 사용하세요.**

---

## Next.js 라우팅: App Router 사용

-   **프로젝트 내 라우팅은 Pages Router 대신 App Router를 사용하세요.**

---

## 프로젝트 구조: 주요 폴더 구조 예시

-   **프로젝트 구조는 다음과 같이 설정하세요. `src` 폴더는 사용하지 않습니다.**

```

your-nextjs-project/
├──CLAUDE.md
├── app/                         # App Router 라우트 폴더
│   ├── api/                     # API 엔드포인트
│   │   └── auth/
│   │       └── route.ts
│   ├── dashboard/               # 대시보드 페이지
│   │   ├── page.tsx             # 대시보드 메인 페이지
│   │   ├── components/          # 대시보드 전용 컴포넌트
│   │   │   ├── DashboardStats.tsx
│   │   │   ├── RecentActivity.tsx
│   │   │   └── index.ts
│   │   ├── hooks/               # 대시보드 전용 훅
│   │   │   ├── useDashboardData.ts
│   │   │   └── index.ts
│   │   └── types.ts             # 대시보드 전용 타입
│   ├── profile/                 # 프로필 페이지 (예시)
│   │   ├── page.tsx
│   │   ├── components/
│   │   └── hooks/
│   ├── layout.tsx               # 루트 레이아웃
│   ├── page.tsx                 # 홈 페이지
│   ├── loading.tsx              # 로딩 UI
│   ├── error.tsx                # 에러 UI
│   └── not-found.tsx            # 404 페이지
│
│
├── lib/                         # 라이브러리 및 유틸리티
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   ├── middleware.ts
│   │   ├── types.ts
│   │   └── queries/
│   ├── components/                  # 공통 컴포넌트
│   │   ├── ui/                      
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── toast.tsx
│   │   │   └── toaster.tsx
│   │   ├── layout/                  # 레이아웃 관련 컴포넌트
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── OptionsDropdown.tsx
│   │   ├── PromptInput.tsx
│   │   └── GeneratedImagePreview.tsx
│   │            ├── auth.ts
│   │            ├── users.ts
│   │            └── posts.ts
│   ├── hooks/                   # 공통 커스텀 훅
│   │   ├── use-toast.ts
│   │   ├── use-auth.ts
│   │   └── use-media.ts
│   └── utils/                   # 유틸리티 함수
│       ├── cn.ts               # clsx/tailwind-merge 유틸
│       ├── fetcher.ts
│       └── mockData.ts
│
├── store/                       # 상태 관리 (Zustand/Redux 등)
│   ├── gallery.ts
│   ├── auth.ts
│   ├── community.ts
│   └── index.ts
│
├── types/                       # 공통 타입 정의
│   └── index.ts
│
├── styles/                      # 글로벌 스타일
│   └── globals.css
│
├── public/                      # 정적 파일
│   ├── favicon.ico
│   ├── images/
│   └── icons/
│
├── .env                         # 환경 변수
├── middleware.ts                # Next.js 미들웨어
├── next.config.mjs              # Next.js 설정
├── package.json                 # 패키지 정보
├── tailwind.config.ts           # Tailwind 설정
├── tsconfig.json                # TypeScript 설정
└── components.json              # ShadCN UI 설정

```

---

## 프로젝트 구조: 페이지별 폴더 구조 규칙

### 기본 원칙

각 페이지는 독립적인 폴더 구조를 가지며, 페이지 전용 컴포넌트와 훅은 해당 페이지 폴더 내부에서 관리합니다.

### 폴더 구조

```
app/
├── [page-name]/
│   ├── page.tsx              # 메인 페이지 컴포넌트
│   ├── components/           # 페이지 전용 컴포넌트
│   │   ├── ComponentA.tsx
│   │   ├── ComponentB.tsx
│   │   └── index.ts          # 컴포넌트 re-export 파일 (선택사항)
│   ├── hooks/               # 페이지 전용 훅
│   │   ├── useCustomHook.ts
│   │   ├── useAnotherHook.ts
│   │   └── index.ts          # 훅 re-export 파일 (선택사항)
│   └── types.ts             # 페이지 전용 타입 정의 (필요시)
```

### 구현 규칙

#### 1. 페이지 컴포넌트 분리

- `page.tsx`는 최대한 간결하게 유지
- 복잡한 로직이나 UI는 별도 컴포넌트로 분리
- 재사용 가능한 컴포넌트는 전역 `lib/components/`에, 페이지 전용 컴포넌트는 `components/` 폴더에 배치

#### 2. 훅 분리

- 페이지에서 사용하는 커스텀 훅은 `hooks/` 폴더에 배치
- 재사용 가능한 훅은 전역 `lib/hooks/`에, 페이지 전용 훅은 해당 페이지의 `hooks/`에 배치

#### 3. 임포트 규칙

```typescript
// page.tsx 예시
import { ComponentA, ComponentB } from './components'
import { useCustomHook, useAnotherHook } from './hooks'

// 또는 개별 임포트
import ComponentA from './components/ComponentA'
import { useCustomHook } from './hooks/useCustomHook'
```

#### 4. 네이밍 컨벤션

- **컴포넌트**: PascalCase (예: `DashboardStats.tsx`)
- **훅**: camelCase, `use` 접두사 (예: `useDashboardData.ts`)
- **페이지 폴더**: kebab-case 또는 camelCase

### 예시 구현

#### Dashboard 페이지 예시

```
app/dashboard/
├── page.tsx
├── components/
│   ├── DashboardStats.tsx
│   ├── RecentActivity.tsx
│   ├── UserProfile.tsx
│   └── index.ts
├── hooks/
│   ├── useDashboardData.ts
│   ├── useUserStats.ts
│   └── index.ts
└── types.ts
```

#### page.tsx 구현 예시

```typescript
// app/dashboard/page.tsx
import { DashboardStats, RecentActivity, UserProfile } from './components'
import { useDashboardData, useUserStats } from './hooks'

export default function DashboardPage() {
  const { data: dashboardData, loading } = useDashboardData()
  const { userStats } = useUserStats()

  if (loading) return <div>Loading...</div>

  return (
    <div className="dashboard-container">
      <DashboardStats data={dashboardData} />
      <UserProfile stats={userStats} />
      <RecentActivity />
    </div>
  )
}
```

#### components/index.ts 예시

```typescript
// app/dashboard/components/index.ts
export { default as DashboardStats } from './DashboardStats'
export { default as RecentActivity } from './RecentActivity'
export { default as UserProfile } from './UserProfile'
```

#### hooks/index.ts 예시

```typescript
// app/dashboard/hooks/index.ts
export { useDashboardData } from './useDashboardData'
export { useUserStats } from './useUserStats'
```

### 주의사항

1. **전역 vs 로컬**: 다른 페이지에서도 사용될 가능성이 있는 컴포넌트나 훅은 전역 폴더(`components/`, `lib/hooks/`)에 배치
2. **과도한 분리 금지**: 단순한 컴포넌트까지 무리하게 분리하지 않음
3. **일관성 유지**: 프로젝트 전체에서 동일한 구조와 네이밍 컨벤션 사용

### 코드 작성 시 체크리스트

- [ ] `page.tsx`가 200줄 이하로 간결한가?
- [ ] 페이지 전용 컴포넌트가 `components/` 폴더에 있는가?
- [ ] 페이지 전용 훅이 `hooks/` 폴더에 있는가?
- [ ] 임포트 경로가 상대경로로 명확하게 작성되었는가?
- [ ] 네이밍 컨벤션을 따르고 있는가?

## TypeScript 사용: TS 사용 권장

-   **프로젝트 전반에 TypeScript를 사용하세요.**
-   **타입 안정성을 위해 모든 컴포넌트와 서버 로직에 TypeScript를 적용하세요.**

---

## TypeScript 인터페이스 정의 규칙: 'I' 접두사 사용

-   **인터페이스 정의 시 이름 앞에 'I'를 접두사로 추가하세요.**
-   예시:
    ```typescript
    export interface IComment {
        id: string
        text: string
        author: string
    }
    ```
-   인터페이스 생성은 types/index.ts 파일에 작성하세요.

---

## Supabase 사용 가이드라인

### 프로젝트 구조

```
lib/
├── supabase/
│   ├── client.ts         # 클라이언트 사이드 Supabase 클라이언트
│   ├── server.ts         # 서버 사이드 Supabase 클라이언트
│   ├── middleware.ts     # 미들웨어용 Supabase 클라이언트
│   ├── types.ts          # 자동 생성된 데이터베이스 타입
│   └── queries/          # 재사용 가능한 쿼리 함수들
│       ├── auth.ts
│       ├── users.ts
│       └── posts.ts
```

### 클라이언트 초기화 규칙

#### 1. 환경변수 관리

```typescript
// .env.local (필수)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key  # 서버 사이드 전용
```

#### 2. 클라이언트 초기화

```typescript
// lib/supabase/client.ts (Client Components용)
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from './types'

export const supabase = createClientComponentClient<Database>()
```

```typescript
// lib/supabase/server.ts (Server Components/Actions용)
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Database } from './types'

export const createServerSupabaseClient = () => {
  const cookieStore = cookies()
  return createServerComponentClient<Database>({ cookies: () => cookieStore })
}
```

```typescript
// lib/supabase/middleware.ts (Middleware용)
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'
import type { Database } from './types'

export const createMiddlewareSupabaseClient = (req: NextRequest) => {
  return createMiddlewareClient<Database>({ req })
}
```

### 타입 안전성 규칙

#### 1. 타입 생성 자동화

```bash
# package.json scripts에 추가
"scripts": {
  "types:generate": "supabase gen types typescript --project-id YOUR_PROJECT_ID --schema public > lib/supabase/types.ts"
}
```

#### 2. 타입 사용 예시

```typescript
// lib/supabase/types.ts에서 import
import type { Database } from '@/lib/supabase/types'

// 테이블 타입 추출
type User = Database['public']['Tables']['users']['Row']
type UserInsert = Database['public']['Tables']['users']['Insert']
type UserUpdate = Database['public']['Tables']['users']['Update']
```

### 쿼리 작성 규칙

#### 1. 재사용 가능한 쿼리 함수화

```typescript
// lib/supabase/queries/users.ts
import { createServerSupabaseClient } from '../server'
import type { Database } from '../types'

export async function getUserProfile(userId: string) {
  const supabase = createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('users')
    .select('id, email, full_name, avatar_url')
    .eq('id', userId)
    .single()

  if (error) throw new Error(`Failed to fetch user: ${error.message}`)
  return data
}

export async function updateUserProfile(
  userId: string, 
  updates: Database['public']['Tables']['users']['Update']
) {
  const supabase = createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  if (error) throw new Error(`Failed to update user: ${error.message}`)
  return data
}
```

#### 2. 쿼리 최적화 규칙

- **필요한 필드만 select**: `select('id, name')` 사용
- **적절한 인덱싱**: 자주 사용하는 필터링 컬럼에 인덱스 설정
- **페이지네이션**: `.range(0, 9)` 사용하여 대량 데이터 처리
- **조인 최소화**: 필요한 경우에만 foreign key 조인 사용

```typescript
// ❌ 나쁜 예: 모든 필드 조회
const { data } = await supabase.from('posts').select('*')

// ✅ 좋은 예: 필요한 필드만 조회
const { data } = await supabase
  .from('posts')
  .select('id, title, created_at, author:users(name)')
  .range(0, 9)
```

### 인증 관련 규칙

#### 1. Server Component에서의 인증 확인

```typescript
// app/dashboard/page.tsx
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }

  return <div>Dashboard for {user.email}</div>
}
```

#### 2. Client Component에서의 인증 상태 관리

```typescript
// hooks/useAuth.ts
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase/client'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 현재 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // 인증 상태 변경 리스너
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return { user, loading }
}
```

### RLS (Row Level Security) 규칙

#### 1. RLS 정책 예시

```sql
-- 사용자는 자신의 데이터만 조회/수정 가능
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);
```

#### 2. 정책 우회가 필요한 경우 (Service Role 사용)

```typescript
// Server Action에서 관리자 권한 필요한 경우
import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // RLS 우회 가능
  { auth: { autoRefreshToken: false, persistSession: false } }
)
```

### 실시간 구독 관리

#### 1. 구독 설정 및 정리

```typescript
// hooks/useRealtimeSubscription.ts
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export function useRealtimeData(table: string) {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    // 초기 데이터 로드
    const fetchData = async () => {
      const { data: initialData } = await supabase.from(table).select('*')
      if (initialData) setData(initialData)
    }
    fetchData()

    // 실시간 구독
    const subscription = supabase
      .channel(`public:${table}`)
      .on('postgres_changes', 
          { event: '*', schema: 'public', table }, 
          (payload) => {
            console.log('Real-time update:', payload)
            // 데이터 업데이트 로직
          })
      .subscribe()

    // 정리 함수 (메모리 누수 방지)
    return () => {
      subscription.unsubscribe()
    }
  }, [table])

  return data
}
```

### 에러 핸들링 규칙

#### 1. 표준화된 에러 핸들링

```typescript
// lib/supabase/errorHandler.ts
import { PostgrestError } from '@supabase/supabase-js'

export function handleSupabaseError(error: PostgrestError | null) {
  if (!error) return null

  console.error('Supabase Error:', error)
  
  // 사용자 친화적 에러 메시지 변환
  switch (error.code) {
    case '23505': // unique_violation
      return '이미 존재하는 데이터입니다.'
    case '23503': // foreign_key_violation
      return '연관된 데이터를 찾을 수 없습니다.'
    case 'PGRST301': // 권한 없음
      return '접근 권한이 없습니다.'
    default:
      return '요청 처리 중 오류가 발생했습니다.'
  }
}

// 사용 예시
const { data, error } = await supabase.from('users').select('*')
if (error) {
  const userMessage = handleSupabaseError(error)
  toast.error(userMessage)
  return
}
```

### Server Actions 패턴

```typescript
// app/actions/user-actions.ts
'use server'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateUserProfile(formData: FormData) {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    throw new Error('Unauthorized')
  }

  const updates = {
    full_name: formData.get('full_name') as string,
    avatar_url: formData.get('avatar_url') as string,
  }

  const { error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', user.id)

  if (error) {
    throw new Error('Failed to update profile')
  }

  revalidatePath('/profile')
}
```

## 보안 체크리스트

- [ ] 클라이언트에서 Service Role Key 사용하지 않음
- [ ] 민감한 데이터에 적절한 RLS 정책 설정
- [ ] 실시간 구독에 정리 함수 구현
- [ ] 쿼리에 적절한 에러 핸들링 적용
- [ ] 필요한 필드만 select하여 데이터 노출 최소화
- [ ] 타입 안전성을 위한 TypeScript 타입 활용

## 성능 최적화 체크리스트

- [ ] 데이터베이스 인덱스 적절히 설정
- [ ] 페이지네이션 구현
- [ ] 필요한 필드만 조회
- [ ] 중복 쿼리 제거 (React Query/SWR과 함께 사용 권장)
- [ ] 실시간 구독 최소화 및 적절한 정리

## Git 커밋 메시지 작성 규칙

**포맷:**

```
<type>: <subject>

<body>
```

**커밋 타입 (Type):**

-   feat: 새로운 기능 추가
-   fix: 버그 수정
-   docs: 문서 수정
-   style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
-   refactor: 코드 리팩토링
-   test: 테스트 코드, 리팩토링 테스트 코드 추가
-   chore: 빌드 업무 수정, 패키지 매니저 수정

**제목 (Subject):**

-   변경 사항에 대한 간단한 설명
-   50자 이내로 작성
-   마침표 없이 작성
-   현재 시제 사용

**본문 (Body):**

-   변경 사항에 대한 자세한 설명
-   어떻게 보다는 무엇을, 왜 변경했는지 설명
-   여러 줄의 메시지를 작성할 땐 "-"로 구분

**예시:**

```plaintext
feat: 로그인 화면 키보드 UX 개선
- TextInput ref를 사용하여 자동 포커스 기능 추가
- returnKeyType 설정으로 키보드 엔터키 동작 개선
- 전화번호 입력 후 자동으로 비밀번호 입력창으로 포커스 이동
- 비밀번호 입력 후 엔터키로 로그인 가능하도록 개선
```
---

## UI 컴포넌트 사용 규칙

### 필수 UI 컴포넌트 목록

**프로젝트에서 다음 UI 컴포넌트들을 필수적으로 사용하세요. 새로운 UI가 필요한 경우 반드시 이 컴포넌트들을 우선 고려해야 합니다.**

#### 기본 컴포넌트
- `Button` - 모든 버튼 요소에 사용
- `Input` - 텍스트 입력 필드
- `Textarea` - 다중 라인 텍스트 입력
- `Select` - 드롭다운 선택
- `Checkbox` - 체크박스 입력
- `Radio` - 라디오 버튼 입력
- `Toggle` - 토글 스위치
- `Label` - 폼 라벨

#### 레이아웃 컴포넌트
- `Card` - 콘텐츠 카드 레이아웃
- `Modal` - 모달 다이얼로그
- `Dialog` - 다이얼로그 팝업
- `Popover` - 팝오버 툴팁
- `Navbar` - 네비게이션 바
- `Divider` - 구분선
- `Spacer` - 공간 분리

#### 피드백 컴포넌트
- `Toast` - 토스트 알림
- `Notification` - 알림 메시지
- `Loading` - 로딩 상태
- `Spinner` - 스피너 로딩
- `Skeleton` - 스켈레톤 로딩
- `ProgressBar` - 진행률 표시

#### 표시 컴포넌트
- `Avatar` - 아바타 이미지
- `Image` - 이미지 표시
- `Badge` - 뱃지/라벨
- `Tag` - 태그 표시
- `Chip` - 칩 컴포넌트
- `Icon` - 아이콘 표시
- `Link` - 링크 컴포넌트
- `Tooltip` - 툴팁

#### 기타 컴포넌트
- `Pagination` - 페이지네이션

### 컴포넌트 임포트 규칙

```typescript
// ✅ 올바른 임포트 방법
import { Button, Input, Card } from '@/lib/components/ui'

// 또는 개별 임포트
import Button from '@/lib/components/ui/Button'
import Input from '@/lib/components/ui/Input'
```

### 새로운 컴포넌트 생성 규칙

**⚠️ 중요: 새로운 UI 컴포넌트를 임의로 생성하지 마세요!**

새로운 컴포넌트가 필요한 상황에서는 다음 단계를 따르세요:

#### 1. 기존 컴포넌트 우선 검토
- 위의 필수 컴포넌트 목록에서 대체 가능한 컴포넌트가 있는지 확인
- 기존 컴포넌트를 조합하여 원하는 UI를 구현할 수 있는지 검토

#### 2. 컴포넌트 생성 승인 요청
새로운 컴포넌트가 정말 필요한 경우, 반드시 다음 정보와 함께 사용자에게 승인을 요청하세요:

```
새로운 UI 컴포넌트 생성이 필요합니다.

📋 컴포넌트 정보:
- 컴포넌트 이름: [컴포넌트명]
- 생성 이유: [기존 컴포넌트로 구현할 수 없는 이유]
- 사용 위치: [어떤 페이지/기능에서 사용될 예정인지]
- 재사용성: [다른 곳에서도 사용될 가능성]

기존 컴포넌트로 대체할 수 없나요? 승인해주시면 새로운 컴포넌트를 생성하겠습니다.
```

#### 3. 승인 후 생성 규칙
- 컴포넌트는 `lib/components/ui/` 폴더에 생성
- PascalCase 네이밍 컨벤션 사용
- TypeScript 인터페이스는 'I' 접두사 사용
- `index.ts`에 export 추가
- 일관된 스타일링과 props 구조 유지

### 컴포넌트 사용 체크리스트

새로운 UI를 구현하기 전에 다음을 확인하세요:

- [ ] 기존 UI 컴포넌트 목록을 확인했는가?
- [ ] 기존 컴포넌트 조합으로 구현 가능한가?
- [ ] 새 컴포넌트가 정말 필요한 경우 사용자에게 승인을 요청했는가?
- [ ] 올바른 임포트 경로를 사용하고 있는가?

---
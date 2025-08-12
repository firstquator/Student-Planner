// 공통 인터페이스 정의

// 사용자 관련 인터페이스
export interface IUser {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

// 과제 관련 인터페이스
export interface IAssignment {
  id: string
  user_id: string
  title: string
  description?: string
  due_date: string
  subject: string
  priority: 'low' | 'medium' | 'high'
  status: 'pending' | 'in_progress' | 'completed'
  created_at: string
  updated_at: string
}

// 일정 관련 인터페이스
export interface ISchedule {
  id: string
  user_id: string
  title: string
  description?: string
  start_time: string
  end_time: string
  type: 'class' | 'study' | 'personal' | 'assignment'
  color?: string
  created_at: string
  updated_at: string
}

// 과목 관련 인터페이스
export interface ISubject {
  id: string
  user_id: string
  name: string
  color: string
  description?: string
  professor?: string
  room?: string
  credits?: number
  created_at: string
  updated_at: string
}

// 학습 목표 관련 인터페이스
export interface IGoal {
  id: string
  user_id: string
  title: string
  description?: string
  target_date: string
  status: 'active' | 'completed' | 'paused'
  progress: number // 0-100
  created_at: string
  updated_at: string
}

// 공통 응답 타입
export interface IApiResponse<T> {
  data: T | null
  error: string | null
  success: boolean
}

// 페이지네이션 타입
export interface IPagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

// 필터 옵션 타입
export interface IFilterOptions {
  subject?: string
  priority?: 'low' | 'medium' | 'high'
  status?: string
  dateRange?: {
    start: string
    end: string
  }
}
// 공통 타입 정의
export interface IUser {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
}

export interface ITask {
  id: string
  title: string
  description?: string
  completed: boolean
  user_id: string
  created_at: string
  updated_at: string
}

export interface ISchedule {
  id: string
  title: string
  date: string
  time: string
  description?: string
  user_id: string
  created_at: string
}
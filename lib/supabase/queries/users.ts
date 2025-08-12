import { createServerSupabaseClient } from '../server'
import type { Database } from '../types'

type User = Database['public']['Tables']['users']['Row']
type UserInsert = Database['public']['Tables']['users']['Insert']
type UserUpdate = Database['public']['Tables']['users']['Update']

export async function getUserProfile(userId: string): Promise<User> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) {
    throw new Error(`사용자 프로필 조회 실패: ${error.message}`)
  }
  
  return data
}

export async function updateUserProfile(
  userId: string, 
  updates: UserUpdate
): Promise<User> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('users')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', userId)
    .select()
    .single()

  if (error) {
    throw new Error(`사용자 프로필 업데이트 실패: ${error.message}`)
  }
  
  return data
}

export async function createUserProfile(userProfile: UserInsert): Promise<User> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('users')
    .insert({
      ...userProfile,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single()

  if (error) {
    throw new Error(`사용자 프로필 생성 실패: ${error.message}`)
  }
  
  return data
}
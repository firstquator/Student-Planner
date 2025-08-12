import { createServerSupabaseClient } from '../server'
import type { Database } from '../types'

export async function getCurrentUser() {
  const supabase = await createServerSupabaseClient()
  
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error) {
    throw new Error(`인증 확인 실패: ${error.message}`)
  }
  
  return user
}

export async function signOut() {
  const supabase = await createServerSupabaseClient()
  
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    throw new Error(`로그아웃 실패: ${error.message}`)
  }
}
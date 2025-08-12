import { createServerSupabaseClient } from '../server'
import type { Database } from '../types'

type Assignment = Database['public']['Tables']['assignments']['Row']
type AssignmentInsert = Database['public']['Tables']['assignments']['Insert']
type AssignmentUpdate = Database['public']['Tables']['assignments']['Update']

export async function getAssignments(userId: string): Promise<Assignment[]> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('assignments')
    .select('*')
    .eq('user_id', userId)
    .order('due_date', { ascending: true })

  if (error) {
    throw new Error(`과제 목록 조회 실패: ${error.message}`)
  }
  
  return data || []
}

export async function getAssignment(id: string): Promise<Assignment> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('assignments')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    throw new Error(`과제 조회 실패: ${error.message}`)
  }
  
  return data
}

export async function createAssignment(assignment: AssignmentInsert): Promise<Assignment> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('assignments')
    .insert({
      ...assignment,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single()

  if (error) {
    throw new Error(`과제 생성 실패: ${error.message}`)
  }
  
  return data
}

export async function updateAssignment(
  id: string, 
  updates: AssignmentUpdate
): Promise<Assignment> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('assignments')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    throw new Error(`과제 업데이트 실패: ${error.message}`)
  }
  
  return data
}

export async function deleteAssignment(id: string): Promise<void> {
  const supabase = await createServerSupabaseClient()
  
  const { error } = await supabase
    .from('assignments')
    .delete()
    .eq('id', id)

  if (error) {
    throw new Error(`과제 삭제 실패: ${error.message}`)
  }
}
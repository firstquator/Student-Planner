import { createServerSupabaseClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const supabase = createServerSupabaseClient()
  
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: '사용자 정보를 가져오는데 실패했습니다.' }, 
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  const supabase = createServerSupabaseClient()
  const { email, password } = await request.json()

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ user: data.user }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: '로그인에 실패했습니다.' }, 
      { status: 500 }
    )
  }
}
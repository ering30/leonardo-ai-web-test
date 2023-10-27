import { useState } from "react"

import { useSession } from "next-auth/react"

import type { User } from '@prisma/client'

import supabase from "@/utils/supabase"

type FetchUserParams = {
  email: string,
  setUser: (user: User) => void,
}

const fetchUser = async (params: FetchUserParams) => {
  const { email, setUser } = params

  try {
    const { data, error } = await supabase
      .from('User')
      .select('*')
      .eq('email', email)
    if (error) throw error
    if (!!data) {
      setUser(data[0])
    }
  } catch (error) {
    alert(error.message)
  }
}

type SetJobTitleParams = {
  setUser: (user: User) => void,
  updatedJobTitle: string,
  userId: number,
}

const setJobTitle = async (params: SetJobTitleParams) => {
  const { setUser, updatedJobTitle, userId, } = params
  console.log('setJobTitleParams', params)

  try {
    const { data, error } = await supabase
      .from('User')
      .update({ jobTitle: updatedJobTitle })
      .eq('id', userId)
      .select()
    if (error) throw error
    if (!!data) {
      setUser(data[0])
      alert('Job Title Updated')
    }
  } catch (error) {
    alert(error.message)
  }
}

type SetUsernameParams = {
  setUser: (user: User) => void,
  updatedUsername: string,
  userId: number,
}

const setUsername = async (params: SetUsernameParams) => {
  const { setUser, updatedUsername, userId, } = params

  try {
    const { data, error } = await supabase
      .from('User')
      .update({ username: updatedUsername })
      .eq('id', userId)
      .select()
    if (error) throw error
    if (!!data) {
      setUser(data[0])
      alert('Username Updated')
    }
  } catch (error) {
    alert(error.message)
  }
}

const useUser = () => {
  const { data: session } = useSession()
  const { user: sessionUser } = session || {}

  // Session user doesn't have an id to reference
  // We lookup user by their email
  const sessionUserEmail = sessionUser?.email || ''

  const [user, setUser] = useState({})

  return {
    callbacks: {
      fetchUser: () => fetchUser({ email: sessionUserEmail, setUser }),
      setJobTitle: (payload: SetJobTitleParams) => setJobTitle(payload),
      setUsername: (payload: SetUsernameParams) => setUsername(payload),
      setUser,
    },
    sessionUserEmail,
    user,
  }
}

export type useUserPayload = ReturnType<typeof useUser>

export default useUser
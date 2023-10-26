import { useEffect, useState } from "react"

import { useSession } from "next-auth/react"

import supabase from "@/utils/supabase"

type FetchUserParams = {
  email: string,
  setUser: (user: object) => void,
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

const useUser = () => {
  const { data: session } = useSession()
  const { user: sessionUser } = session || {}

  // Session user doesn't have an id to reference
  // We lookup user by their email
  const sessionUserEmail = sessionUser?.email || ''

  const [user, setUser] = useState({})

  return {
    callbacks: {
      fetchUser: () => fetchUser({ email: sessionUserEmail, setUser })
    },
    sessionUserEmail,
    user,
  }
}

export default useUser
import { useEffect } from "react"

import Layout from '@/components/Layout'
import UsernameForm from "@/components/Forms/UsernameForm"

import useUser from "@/hooks/useUser"

const UsernamePage = () => {

  const userPayload = useUser()
  const {
    callbacks,
    callbacks: {
      fetchUser,
    },
    sessionUserEmail,
    user,
  } = userPayload

  useEffect(() => {
    fetchUser()
  }, [sessionUserEmail])

  return (
    <Layout>
      <UsernameForm callbacks={callbacks} user={user} />
    </Layout>
  )
}

export default UsernamePage
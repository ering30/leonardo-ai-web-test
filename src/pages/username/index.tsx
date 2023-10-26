import { useEffect } from "react"

import useUser from "@/hooks/useUser"

const UsernamePage = () => {

  const userPayload = useUser()
  const {
    callbacks: {
      fetchUser,
    },
    sessionUserEmail,
    user,
  } = userPayload

  console.log('user', user)

  useEffect(() => {
    fetchUser()
  }, [sessionUserEmail])

  return (
    <div>hi</div>
  )
}

export default UsernamePage
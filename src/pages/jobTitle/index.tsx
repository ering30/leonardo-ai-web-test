import { useEffect } from "react"

import Layout from '@/components/Layout'
import JobTitleForm from "@/components/Forms/JobTitleForm"

import useUser from "@/hooks/useUser"

const JobTitlePage = () => {

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
      <JobTitleForm callbacks={callbacks} user={user} />
    </Layout>
  )
}

export default JobTitlePage
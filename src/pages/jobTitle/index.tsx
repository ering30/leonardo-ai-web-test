import { useEffect } from "react"

import Layout from '@/components/Layout'
import JobTitleForm from "@/components/Forms/JobTitleForm"

import useUser from "@/hooks/useUser"

const JobTitlePage = () => {

  const userPayload = useUser()
  const {
    callbacks: {
      fetchUser,
      setJobTitle,
    },
    sessionUserEmail,
    user,
  } = userPayload

  useEffect(() => {
    fetchUser()
  }, [sessionUserEmail])

  return (
    <Layout>
      <JobTitleForm callbacks={{ setJobTitle }} user={user} />
    </Layout>
  )
}

export default JobTitlePage
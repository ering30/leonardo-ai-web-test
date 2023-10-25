import { ChakraProvider } from '@chakra-ui/react'

import { SessionProvider } from "next-auth/react"

import type { AppType } from 'next/app'
import type { Session } from 'next-auth'


const MyApp: AppType<{ session: Session | null }> = (props) => {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props

  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp;
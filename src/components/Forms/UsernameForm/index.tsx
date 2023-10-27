import { Field, Formik } from 'formik'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  VStack,
} from '@chakra-ui/react'

import type { User } from '@prisma/client'

import type { useUserPayload } from '@/hooks/useUser'

type OnSubmitParams = {
  username: string
}
interface UsernameFormProps {
  callbacks: useUserPayload['callbacks'],
  user: User,
}

const UsernameForm = (props: UsernameFormProps) => {
  const { callbacks, user } = props
  const { setUser, setUsername } = callbacks

  const { 
    id,
    username,
  } = user || {}

  // TODO
  // intialValues prop doesn't wait for username to load and isn't rendered 
  // unless we conditionally render the whole form to wait. 
  const hasUser = !!user

  return (
    <>
      {!hasUser && (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
          <Spinner />
        </Flex>
      )}

      {hasUser && (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w={64}>
          <Formik
            initialValues={{
              username: username,
            }}
            onSubmit={({ username }: OnSubmitParams) => {
              setUsername({ setUser, updatedUsername: username, userId: id})
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Field
                      as={Input}
                      id="username"
                      name="username"
                      type="username"
                      variant="filled"
                    />
                  </FormControl>
                  <Button type="submit" colorScheme="green" w="full">
                    Submit
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>)}
    </>
  )
}

export default UsernameForm
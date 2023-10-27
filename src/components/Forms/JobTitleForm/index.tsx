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

interface JobTitleFormProps {
  callbacks: useUserPayload['callbacks'],
  user: User,
}

const JobTitleForm = (props: JobTitleFormProps) => {
  const { callbacks, user } = props
  const { setUser, setJobTitle } = callbacks

  const { 
    id,
    jobTitle,
  } = user || {}

  // TODO
  // intialValues prop doesn't wait for jobTitle to load and isn't rendered 
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
              jobTitle: jobTitle,
            }}
            onSubmit={(values) => {
              setJobTitle({ setUser, updatedJobTitle: values.jobTitle, userId: id })
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
                    <Field
                      as={Input}
                      id="jobTitle"
                      name="jobTitle"
                      type="jobTitle"
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

export default JobTitleForm
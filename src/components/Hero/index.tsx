import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function HeroSection() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Project under construction <br />
            <Text as={'span'} color={'red.400'}>
              bear with us
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            This project is currently being built. Sign In or Sign Up to see what&apos;s on offer so far.
          </Text>
        </Stack>
      </Container>
    </>
  )
}
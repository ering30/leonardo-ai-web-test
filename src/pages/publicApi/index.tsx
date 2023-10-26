import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import {
  Flex,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

import Layout from '@/components/Layout'

type FilmModel = {
  title: string,
}

const PublicApi = ({ films }) => {
  return (
    <Layout>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <UnorderedList>
          {films.map((film: FilmModel) => {
            const { title } = film
            return <ListItem key={title} >{title}</ListItem>
          })}
        </UnorderedList>
      </Flex>
    </Layout>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query Query {
        allFilms {
          films {
            title
            director
            releaseDate
            speciesConnection {
              species {
                name
                classification
                homeworld {
                  name
                }
              }
            }
          }
        }
      }
    `
  })

  return {
    props: {
      films: data.allFilms.films
    }
  }
}

export default PublicApi
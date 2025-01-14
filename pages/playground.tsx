import 'graphiql/graphiql.css'

import { createGraphiQLFetcher } from '@graphiql/toolkit'
import { GraphiQL } from 'graphiql'

import { SEO } from '../src/components/SEO'
import { defaultQuery } from '../src/config/graphiql/graphiql'
import { useGraphQLSchema } from '../src/hooks/useGraphQLSchema'

export default function Playground() {
  const { schema } = useGraphQLSchema()

  if (typeof window === 'undefined') return null

  if (!process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL) {
    throw new Error('NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL is not defined')
  }

  const fetcher = createGraphiQLFetcher({
    url: process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL,
  })

  return (
    <div id="graphql-embed" className="h-screen">
      <SEO
        title="GraphQL Playground"
        url={`/playground`}
        canonicalUrl={`/playground`}
      />
      <GraphiQL
        schema={schema}
        fetcher={fetcher}
        editorTheme={'dracula'}
        defaultQuery={defaultQuery}
        shouldPersistHeaders={true}
        tabs={true}
      />
    </div>
  )
}


import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

type GraphQLProviderProps = {
  children: React.ReactNode;
}

export const GraphQLProvider: React.FC<GraphQLProviderProps> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
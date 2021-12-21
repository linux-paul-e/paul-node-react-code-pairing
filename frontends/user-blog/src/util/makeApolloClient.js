import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getConfig } from './../config/get-config';

const { GRAPHQL_API_ENDPOINT, STAGE, BUILD_COMMIT, BUILD_NUMBER } = getConfig();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, path }) => {
      const errorMessage = `[GraphQL error]: Message: ${message}, Path: ${path}`;
      console.log(errorMessage);
    });
  }

  if (networkError) {
    const errorMessage = `[Network error]: ${networkError}`;
    console.log(errorMessage);
  }
});

const headerLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'apollographql-client-name': `frontend-${STAGE}`,
      'apollographql-client-version': `${BUILD_NUMBER}_${BUILD_COMMIT}`,
    },
  };
});

const httpLink = () => {
  return createHttpLink({
    uri: GRAPHQL_API_ENDPOINT,
  });
};

const getClient = new ApolloClient({
  link: ApolloLink.from([headerLink, errorLink, httpLink()]),
  cache: new InMemoryCache(),
});

export { getClient };

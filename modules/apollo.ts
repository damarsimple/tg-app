import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";

import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { createUploadLink } from "apollo-upload-client";
import { useUserStore } from "stores/user";

const httpLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

const { token } = useUserStore.getState();

const wsClient = process.browser
  ? createClient({
      lazy: true,
      url: `${process.env.NEXT_PUBLIC_GRAPHQL_WS_URL}`,
      connectionParams: {
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      },
    })
  : null;

const wsLink = process.browser && wsClient ? new GraphQLWsLink(wsClient) : null;

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,

      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// The split function takes three parameters:

//

// * A function that's called for each operation to execute

// * The Link to use for an operation if the function returns a "truthy" value

// * The Link to use for an operation if the function returns a "falsy" value

const splitLink =
  process.browser && wsLink
    ? split(
        //only create the split in the browser
        // split based on operation type
        ({ query }) => {
          const definition = getMainDefinition(query);
          console.log(definition);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        authLink.concat(httpLink)
      )
    : authLink.concat(httpLink);

export const client = new ApolloClient({
  link: splitLink,

  cache: new InMemoryCache(),
});

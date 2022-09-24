// index.js
// This is the main entry point of our application
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: '/api' });

app.get('/', (req, res) => {
  res.send('Hello Web Server!!!');
});

app.listen(port, () =>
  console.log(
    `GraphQL Server runine at http://localhost:${port}${server.graphqlPath}`
  )
);

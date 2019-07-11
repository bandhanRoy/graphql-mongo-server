const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const express = require("express");
const mongoose = require("mongoose");

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    // These will be defined for both new or existing servers
    typeDefs,
    resolvers
  });

  await mongoose.connect("mongodb://localhost:27017/graphql-mongodb-node", {
    useNewUrlParser: true
  });

  server.applyMiddleware({ app }); // app is from an existing express app

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();

const { gql } = require("apollo-server-express");
export const typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cat!]!
    books: [Book]
    book(id: ID!): Book
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Book {
    title: String!
    author: String!
  }

  type Mutation {
    createCat(name: String!): Cat!
    createBook(title: String!, author: String!): Book!
  }
`;

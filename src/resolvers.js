const { Cat } = require("./models/catModel");
const { Book } = require("./models/bookModel");

export const resolvers = {
  Query: {
    hello: () => "hello",
    cats: () => Cat.find(),
    books: () => Book.find()
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      console.log(kitty);
      return kitty;
    },
    createBook: (_, { title, author }) => {
      const book = new Book({ title, author });
      book.save();
      return book;
    }
  }
};

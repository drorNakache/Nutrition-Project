const graphql = require("graphql");
const Book = require("./models/book");
const Author = require("./models/author");


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
} = graphql;

// var books = [
//   { name: "Name of the Wind", genre: "Fantasy", id: "1", authorId: "1" },
//   { name: "The Final Empire", genre: "Fantasy", id: "2", authorId: "2" },
//   { name: "The Hero of Ages", genre: "Fantasy", id: "4", authorId: "2" },
//   { name: "The Long Earth", genre: "Sci-Fi", id: "3", authorId: "3" },
//   { name: "The Colour of Magic", genre: "Fantasy", id: "5", authorId: "3" },
//   { name: "The Light Fantastic", genre: "Fantasy", id: "6", authorId: "3" },
// ];

// var authors = [
//   { name: "Patrick Rothfuss", age: 44, id: "1" },
//   { name: "Brandon Sanderson", age: 42, id: "2" },
//   { name: "Terry Pratchett", age: 66, id: "3" },
// ];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    tomato:{type: GraphQLString},
    author:{ 
        type:AuthorType,
        resolve(parent, args){
            //return authors.find(author=>author.id==parent.authorId)
        }
    }
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
        //is it possible to create graphqllist of many  types
      type: GraphQLList(BookType),
      resolve(parent, args) {
        //return books.filter((book) => book.authorId == parent.id);
      },
    },
  }),
});



const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: {
      type: BookType,
      //how to give possibility to pass name or id
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //return books.find((book) => book.id == args.id);
      },
    },
    author: {
      type: AuthorType,
      //how to give possibility to pass name or id
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //return authors.find((author) => author.id == args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        //return books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        //return authors;
      },
    },
  
  },
});


const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        
      },
    },
  },
});


module.exports = new GraphQLSchema({
  query: RootQuery,
});

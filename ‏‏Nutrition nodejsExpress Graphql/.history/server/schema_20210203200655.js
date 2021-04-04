const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString} = graphql


var books = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

// var books = [
//   { name: "Name of the Wind", genre: "Fantasy", id: "1", authorId: "1" },
//   { name: "The Final Empire", genre: "Fantasy", id: "2", authorId: "2" },
//   { name: "The Hero of Ages", genre: "Fantasy", id: "4", authorId: "2" },
//   { name: "The Long Earth", genre: "Sci-Fi", id: "3", authorId: "3" },
//   { name: "The Colour of Magic", genre: "Fantasy", id: "5", authorId: "3" },
//   { name: "The Light Fantastic", genre: "Fantasy", id: "6", authorId: "3" },
// ];

const BookType = new GraphQLObjectType({
    name:"Book",
    fields: ()=>({
      id: {type:GraphQLString},
      name:{type:GraphQLString},
      genre:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
   book: {
       type:"BookType",
       args:{id: {type:GraphQLString}},
       resolve(parent, args){
           //result
       }
   }
  }
});

module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
})

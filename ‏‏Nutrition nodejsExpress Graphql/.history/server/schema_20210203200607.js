const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString} = graphql


var books = [
  { name: "Name of the Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];


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

const graphql = require("graphql");
const Book = require("./models/book");
const User = require("./models/user");
const WeightReport = require("./models/weightreport");


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt  ,
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

  
const WeightreportType = new GraphQLObjectType({
  name: "Weightreport",
  fields: () => ({
    id: { type: GraphQLString },
    weekNumber: { type: GraphQLString },
    weightMeasure: { type: GraphQLString },
    
/*     author:{ 
        type:UserType,
        resolve(parent, args){
            return Author.findById(parent.authorId)
        }
    } */
  }),
});

const FoodIngredientsType = new GraphQLObjectType({
  name: "Foodingredients",
  fields: () => ({
    id: { type: GraphQLString },
    calories: { type: GraphQLString },
    proteins: { type: GraphQLString },
    fat: { type: GraphQLString },
    
  }),
});

  const GoalsReportType = new GraphQLObjectType({
    name: "GoalsReport",
    fields: () => ({
      id: { type: GraphQLString },
      weekNumber: { type: GraphQLString },
      foodIngredients: { type: FoodIngredientsType },
      
    }),
  });

  const MealReportType = new GraphQLObjectType({
    name: "MealReport",
    fields: () => ({
      id: { type: GraphQLString },
      dayNumber: { type: GraphQLString },
      foodIngredients: { type: FoodIngredientsType },
      
    }),
  });

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLString },
    height: { type: GraphQLString },
    weightreport: { type: WeightreportType},
    goalsreport: { type: GoalsReportType},
    //mealreport: {type: MealReportType},
    
/*     books: {
        //is it possible to create graphqllist of many  types
      type: GraphQLList(WeightReportType),
      resolve(parent, args) {
       return Book.find({authorId:parent.id})
      },
    }, */
  }),
});



const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: {
      type: WeightreportType,
      //how to give possibility to pass name or id
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Book.findById(args.id);
      },
    },
    weightReport: {
      type: WeightreportType,
      //how to give possibility to pass name or id
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return WeightReport.findById(args.id);
      },
    },
    GetUser: {
      type: UserType,
      //how to give possibility to pass name or id
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
       return User.findById(args.id);
      },
    },
    books: {
      type: new GraphQLList(WeightreportType),
      resolve(parent, args) {
       return Book.find({})
      },
    },

    listUsers: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      },
    },

    authors: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return Author.find({});
      },
    },
  
  },
});


const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addWeightReport: {
      type: WeightreportType,
      args: {
        weekNumber: { type: GraphQLString },
        weightMeasure: { type: GraphQLString },
        userId: { type: GraphQLString },
      },
      resolve(parent, args) {
        let weightReport = new WeightReport({
          weekNumber: args.weekNumber,
          weightMeasure: args.weightMeasure,
          userId: args.userId,
        });
        return weightReport.save();
      },
    },

    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLString },
        height: { type: GraphQLString },
      },
      resolve(parent, args) {
        let user = new User({
          name: args.name,
          age: args.age,
          height: args.height,
        });
        return  user.save();
      },
    },
  }, 
});




module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation:Mutations
});

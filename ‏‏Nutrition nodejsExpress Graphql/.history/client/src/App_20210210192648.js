import React from "react";
import ApolloClient from "apollo-boost"
import ApolloProvider from "apollo-boost"
import BooKList from "./components/BookList"


const client =new ApolloClient({
  uri:"http://localhost:4000/graphql"
});
const App =()=>{
 {
    return (
      
        <div>
           <BooKList />
        </div>
     
    );
  }
}

export default App;

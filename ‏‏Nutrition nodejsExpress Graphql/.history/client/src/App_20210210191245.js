import React from "react";
import ApolloClient from "apollo-boost"
import BooKList from "./components/BookList"


const client =new ApolloClient({
  uri:"http://localhost:4001"
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

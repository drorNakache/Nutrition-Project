import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      author{
          
      }
      id
    }
  }
`;

const BookList = (props) => {
  console.log(props);
  const data = props.data
  return (
    <div>
      <h3>GraphQL project</h3>
     
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);

import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = (props) => {
    console.log(props)
  return (<div>
<h3>GraphQL project</h3>
<ul
  </div>);
};

export default graphql(getBooksQuery)(BookList);

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
    conso
  return (<div>
<h3>GraphQL project</h3>
  </div>);
};

export default graphql(getBooksQuery)(BookList);

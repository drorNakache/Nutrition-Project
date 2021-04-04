import React from "react";
import { gql } from "apollo-boost";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = (props) => {
  return <div></div>;
};

export default graphql(getBooksQuery)   BookList;

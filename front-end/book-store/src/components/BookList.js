import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`
  {
    books{
      name
      id
    }
  }
`

class Booklist extends Component {
  return(){
    <div>
      <ul id="book-list">
        <li>Book Name</li>
      </ul>
    </div>
  }
}

export default BookList
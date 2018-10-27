const graphql = require('graphql')
<<<<<<< HEAD
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql

var books = [
  {name: 'Name of the Wind', genre: 'Fantasy', id:'1'},
  {name: 'The Final Empire', genre:'Fantasy', id:'2'},
  {name: 'The Long Earth', genre:'Sci-Fi', id:'3'}
]

var authors = [
  {name: 'Patrick Rothfuss', age: 44, id:'1'},
  {name: 'Brandon Sanderson', age: 42, id:'2'},
  {name: 'Terry Pratchett', age: 66, id:'3'}
=======
const_ = require('lodash')
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql

var books = [
  {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
  {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
  {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'}
>>>>>>> e71745627b6d9e9c2a9544ba2d09292593d44f00
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
<<<<<<< HEAD
    id: {type: GraphQLID},
    name: {type:GraphQLString},
    genre:{type:GraphQLString}
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type:GraphQLString},
    age:{type:GraphQLInt}
=======
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}
>>>>>>> e71745627b6d9e9c2a9544ba2d09292593d44f00
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
<<<<<<< HEAD
      args: {id:{type: GraphQLID}},
      resolve(parent, args){
        return _.find(books,{id: args.id})
      }
    },
    author: {
      type: AuthorType,
      args: {id:{type:GraphQLID}},
      resolve(parent,args){
        return _.find(authors, {id:args.id})
=======
      args: {id: {type: GraphQLString}},
      resolve(parents, args) {
        return _.find(books, {id: args.id})
>>>>>>> e71745627b6d9e9c2a9544ba2d09292593d44f00
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})

const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

mongoose.connect("mongodb://johndoe:test123@ds143953.mlab.com:43953/bookstore");
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});

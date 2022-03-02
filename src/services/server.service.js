const express = require('express');
const bodyParser = require('body-parser');
const config = require("../configs");
const cors = require('cors');
const port = config.server.port;
const apiRouter = require('../routes');
const { ApolloServer, gql } = require('apollo-server-express');

const FilmSchema = require('../apollo/schemas/Film.schema');
const UserSchema = require('../apollo/schemas/user.schema');

const FilmResolvers = require('../apollo/resolvers/Film.resolver');
const userResolvers = require('../apollo/resolvers/user.resolver');

const app = express();

const graphQlServer = new ApolloServer({
  typeDefs: [FilmSchema,UserSchema],
  resolvers:[FilmResolvers,userResolvers]
});

graphQlServer.applyMiddleware({ app, path: '/graphql' })
app.use(cors());
// app.use(bodyParser.json());

app.use(function (req, res, next) {
  if (req.originalUrl === '/api/v1/webhooks/stripe') {
    next();
  } else {
    express.json()(req, res, next);
  }
});
app.use('/api/v1/', apiRouter);

exports.start = () => {
  app.listen(port, (err) => {
    if (err) {
      console.log(`Errors: ${err}`);
      process.exit(-1);
    }
    console.log(`app is runnning on port ${port}`);
  });
};

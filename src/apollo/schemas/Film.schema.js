const { gql } = require('apollo-server-express');

const typeDefs = gql`
scalar Date
    type Films {
        id: ID
        title: String
        description: String
        src: String
        categorie: String
        date: Date
    }
    type Query {
        getFilms:[Films]
        getFilm(id:ID):Films
    }
    input FilmInput{
        title: String
        description: String
        src : String
        categorie: String
        date: Date
    }
    type Mutation {
        createfilm(films: FilmInput):Films
    }
`
module.exports= typeDefs;

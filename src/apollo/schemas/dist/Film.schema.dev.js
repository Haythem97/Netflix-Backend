"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nscalar Date\n    type Films {\n        id: ID\n        title: String\n        description: String\n        src: String\n        categorie: String\n        date: Date\n    }\n    type Query {\n        getFilms:[Films]\n        getFilm(id:ID):Films\n    }\n    input FilmInput{\n        title: String\n        description: String\n        src : String\n        categorie: String\n        date: Date\n    }\n    type Mutation {\n        createfilm(films: FilmInput):Films\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server-express'),
    gql = _require.gql;

var typeDefs = gql(_templateObject());
module.exports = typeDefs;
"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var FilmsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  src: {
    type: String
  },
  categorie: {
    type: String
  },
  date: {
    type: Date
  }
});
var Films = mongoose.model('Films', FilmsSchema);
module.exports = Films;
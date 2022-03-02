const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FilmsSchema = new Schema({
  title: {
    type :String,
    required: true,},

  description:{
    type: String,
  },
  src:{
  type : String,
  },
  categorie:{
    type : String,
    },
    date:{
      type : Date,
    },
});
const Films = mongoose.model('Films',FilmsSchema);
module.exports = Films;
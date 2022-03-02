const Films = require('../../models/film.model')

const resolvers = {
    Query: { 
        getFilms: async() => {
            return await Films.find({})
        },
        getFilm(parent, args, context) {
            return Films.findById(args.id);
        }},

        Mutation : {
        createfilm:async(parent,args,context,info) => {
            const{title,description,src} = args.films;
            const film= new Films ({title,description,src,categorie,date});
            await film.save();
            return film;
          }
      }
    }
    module.exports= resolvers;
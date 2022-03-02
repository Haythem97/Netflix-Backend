"use strict";

var Films = require('../../models/film.model');

var resolvers = {
  Query: {
    getFilms: function getFilms() {
      return regeneratorRuntime.async(function getFilms$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(Films.find({}));

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    getFilm: function getFilm(parent, args, context) {
      return Films.findById(args.id);
    }
  },
  Mutation: {
    createfilm: function createfilm(parent, args, context, info) {
      var _args$films, title, description, src, film;

      return regeneratorRuntime.async(function createfilm$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _args$films = args.films, title = _args$films.title, description = _args$films.description, src = _args$films.src;
              film = new Films({
                title: title,
                description: description,
                src: src,
                categorie: categorie,
                date: date
              });
              _context2.next = 4;
              return regeneratorRuntime.awrap(film.save());

            case 4:
              return _context2.abrupt("return", film);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }
};
module.exports = resolvers;
/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('movie_recommender_db');

// Insert a few documents into the sales collection.
db.getCollection('movies').insertMany([
    {
        "title": "The Godfather",
        "slug": "the-godfather",
        "year": 1972,
        "country": "USA",
        "director": "Francis Ford Coppola",
        "top_actors": ["Marlon Brando", "Al Pacino", "James Caan"],
        "genre": "Crime"
      },
      {
        "title": "Parasite",
        "slug": "parasite",
        "year": 2019,
        "country": "South Korea",
        "director": "Bong Joon-ho",
        "top_actors": ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
        "genre": "Thriller"
      },
      {
        "title": "Amélie",
        "slug": "amelie",
        "year": 2001,
        "country": "France",
        "director": "Jean-Pierre Jeunet",
        "top_actors": ["Audrey Tautou", "Mathieu Kassovitz", "Rufus"],
        "genre": "Romantic Comedy"
      },
      {
        "title": "Spirited Away",
        "slug": "spirited-away",
        "year": 2001,
        "country": "Japan",
        "director": "Hayao Miyazaki",
        "top_actors": ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
        "genre": "Animation"
      },
      {
        "title": "City of God",
        "slug": "city-of-god",
        "year": 2002,
        "country": "Brazil",
        "director": "Fernando Meirelles",
        "top_actors": ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen"],
        "genre": "Crime"
      },
      {
        "title": "Pan's Labyrinth",
        "slug": "pans-labyrinth",
        "year": 2006,
        "country": "Mexico",
        "director": "Guillermo del Toro",
        "top_actors": ["Ivana Baquero", "Sergi López", "Maribel Verdú"],
        "genre": "Fantasy"
      },
      {
        "title": "Inception",
        "slug": "inception",
        "year": 2010,
        "country": "USA",
        "director": "Christopher Nolan",
        "top_actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        "genre": "Sci-Fi"
      },
      {
        "title": "Oldboy",
        "slug": "oldboy",
        "year": 2003,
        "country": "South Korea",
        "director": "Park Chan-wook",
        "top_actors": ["Choi Min-sik", "Yoo Ji-tae", "Kang Hye-jung"],
        "genre": "Thriller"
      },
      {
        "title": "Cinema Paradiso",
        "slug": "cinema-paradiso",
        "year": 1988,
        "country": "Italy",
        "director": "Giuseppe Tornatore",
        "top_actors": ["Philippe Noiret", "Enzo Cannavale", "Antonella Attili"],
        "genre": "Drama"
      },
      {
        "title": "The Lives of Others",
        "slug": "the-lives-of-others",
        "year": 2006,
        "country": "Germany",
        "director": "Florian Henckel von Donnersmarck",
        "top_actors": ["Ulrich Mühe", "Martina Gedeck", "Sebastian Koch"],
        "genre": "Drama"
      },
      {
        "title": "The Intouchables",
        "slug": "the-intouchables",
        "year": 2011,
        "country": "France",
        "director": "Olivier Nakache & Éric Toledano",
        "top_actors": ["François Cluzet", "Omar Sy", "Anne Le Ny"],
        "genre": "Comedy-Drama"
      },
      {
        "title": "Pulp Fiction",
        "slug": "pulp-fiction",
        "year": 1994,
        "country": "USA",
        "director": "Quentin Tarantino",
        "top_actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        "genre": "Crime"
      },
      {
        "title": "Life Is Beautiful",
        "slug": "life-is-beautiful",
        "year": 1997,
        "country": "Italy",
        "director": "Roberto Benigni",
        "top_actors": ["Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini"],
        "genre": "Comedy-Drama"
      },
      {
        "title": "The Pianist",
        "slug": "the-pianist",
        "year": 2002,
        "country": "France/Poland",
        "director": "Roman Polanski",
        "top_actors": ["Adrien Brody", "Thomas Kretschmann", "Frank Finlay"],
        "genre": "Drama"
      },
      {
        "title": "Crouching Tiger, Hidden Dragon",
        "slug": "crouching-tiger-hidden-dragon",
        "year": 2000,
        "country": "China",
        "director": "Ang Lee",
        "top_actors": ["Chow Yun-fat", "Michelle Yeoh", "Zhang Ziyi"],
        "genre": "Action"
      },
      {
        "title": "The Secret in Their Eyes",
        "slug": "the-secret-in-their-eyes",
        "year": 2009,
        "country": "Argentina",
        "director": "Juan José Campanella",
        "top_actors": ["Ricardo Darín", "Soledad Villamil", "Pablo Rago"],
        "genre": "Thriller"
      },
      {
        "title": "Trainspotting",
        "slug": "trainspotting",
        "year": 1996,
        "country": "UK",
        "director": "Danny Boyle",
        "top_actors": ["Ewan McGregor", "Ewen Bremner", "Jonny Lee Miller"],
        "genre": "Drama"
      },
      {
        "title": "Slumdog Millionaire",
        "slug": "slumdog-millionaire",
        "year": 2008,
        "country": "UK",
        "director": "Danny Boyle",
        "top_actors": ["Dev Patel", "Freida Pinto", "Anil Kapoor"],
        "genre": "Drama"
      },
      {
        "title": "Rashomon",
        "slug": "rashomon",
        "year": 1950,
        "country": "Japan",
        "director": "Akira Kurosawa",
        "top_actors": ["Toshiro Mifune", "Machiko Kyō", "Masayuki Mori"],
        "genre": "Drama"
      },
      {
        "title": "Seven Samurai",
        "slug": "seven-samurai",
        "year": 1954,
        "country": "Japan",
        "director": "Akira Kurosawa",
        "top_actors": ["Toshiro Mifune", "Takashi Shimura", "Yoshio Inaba"],
        "genre": "Action"
      },
      {
        "title": "Roma",
        "slug": "roma",
        "year": 2018,
        "country": "Mexico",
        "director": "Alfonso Cuarón",
        "top_actors": ["Yalitza Aparicio", "Marina de Tavira", "Diego Cortina Autrey"],
        "genre": "Drama"
      },
      {
        "title": "The Hunt",
        "slug": "the-hunt",
        "year": 2012,
        "country": "Denmark",
        "director": "Thomas Vinterberg",
        "top_actors": ["Mads Mikkelsen", "Thomas Bo Larsen", "Annika Wedderkopp"],
        "genre": "Drama"
      },
      {
        "title": "Portrait of a Lady on Fire",
        "slug": "portrait-of-a-lady-on-fire",
        "year": 2019,
        "country": "France",
        "director": "Céline Sciamma",
        "top_actors": ["Noémie Merlant", "Adèle Haenel", "Luàna Bajrami"],
        "genre": "Romance"
      },
      {
        "title": "The Grand Budapest Hotel",
        "slug": "the-grand-budapest-hotel",
        "year": 2014,
        "country": "USA",
        "director": "Wes Anderson",
        "top_actors": ["Ralph Fiennes", "Tony Revolori", "Saoirse Ronan"],
        "genre": "Comedy"
      },
      {
        "title": "Dangal",
        "slug": "dangal",
        "year": 2016,
        "country": "India",
        "director": "Nitesh Tiwari",
        "top_actors": ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"],
        "genre": "Drama"
      },
      {
        "title": "Drunken Master",
        "slug": "drunken-master",
        "year": 1978,
        "country": "Hong Kong",
        "director": "Yuen Woo-ping",
        "top_actors": ["Jackie Chan", "Yuen Siu-tien", "Hwang Jang-lee"],
        "genre": "Action"
      },
      {
        "title": "A Separation",
        "slug": "a-separation",
        "year": 2011,
        "country": "Iran",
        "director": "Asghar Farhadi",
        "top_actors": ["Peyman Maadi", "Leila Hatami", "Sareh Bayat"],
        "genre": "Drama"
      },
      {
        "title": "The Handmaiden",
        "slug": "the-handmaiden",
        "year": 2016,
        "country": "South Korea",
        "director": "Park Chan-wook",
        "top_actors": ["Kim Min-hee", "Kim Tae-ri", "Ha Jung-woo"],
        "genre": "Thriller"
      },
      {
        "title": "Z",
        "slug": "z",
        "year": 1969,
        "country": "Algeria/France",
        "director": "Costa-Gavras",
        "top_actors": ["Yves Montand", "Irene Papas", "Jean-Louis Trintignant"],
        "genre": "Political Thriller"
      },
      {
        "title": "Fanny and Alexander",
        "slug": "fanny-and-alexander",
        "year": 1982,
        "country": "Sweden",
        "director": "Ingmar Bergman",
        "top_actors": ["Pernilla Allwin", "Bertil Guve", "Jan Malmsjö"],
        "genre": "Drama"
      },
      {
        "title": "Downfall",
        "slug": "downfall",
        "year": 2004,
        "country": "Germany",
        "director": "Oliver Hirschbiegel",
        "top_actors": ["Bruno Ganz", "Alexandra Maria Lara", "Corinna Harfouch"],
        "genre": "Drama"
      },
      {
        "title": "Wings of Desire",
        "slug": "wings-of-desire",
        "year": 1987,
        "country": "Germany",
        "director": "Wim Wenders",
        "top_actors": ["Bruno Ganz", "Solveig Dommartin", "Otto Sander"],
        "genre": "Fantasy"
      },
      {
        "title": "Yojimbo",
        "slug": "yojimbo",
        "year": 1961,
        "country": "Japan",
        "director": "Akira Kurosawa",
        "top_actors": ["Toshiro Mifune", "Eijirō Tōno", "Tatsuya Nakadai"],
        "genre": "Action"
      },
      {
        "title": "Ikiru",
        "slug": "ikiru",
        "year": 1952,
        "country": "Japan",
        "director": "Akira Kurosawa",
        "top_actors": ["Takashi Shimura", "Nobuo Kaneko", "Kyōko Seki"],
        "genre": "Drama"
      },
      {
        "title": "Bicycle Thieves",
        "slug": "bicycle-thieves",
        "year": 1948,
        "country": "Italy",
        "director": "Vittorio De Sica",
        "top_actors": ["Lamberto Maggiorani", "Enzo Staiola", "Lianella Carell"],
        "genre": "Drama"
      },
      {
        "title": "La Haine",
        "slug": "la-haine",
        "year": 1995,
        "country": "France",
        "director": "Mathieu Kassovitz",
        "top_actors": ["Vincent Cassel", "Hubert Koundé", "Saïd Taghmaoui"],
        "genre": "Drama"
      },
      {
        "title": "The Battle of Algiers",
        "slug": "the-battle-of-algiers",
        "year": 1966,
        "country": "Italy/Algeria",
        "director": "Gillo Pontecorvo",
        "top_actors": ["Brahim Haggiag", "Jean Martin", "Yacef Saadi"],
        "genre": "War"
      },
      {
        "title": "The Wages of Fear",
        "slug": "the-wages-of-fear",
        "year": 1953,
        "country": "France",
        "director": "Henri-Georges Clouzot",
        "top_actors": ["Yves Montand", "Charles Vanel", "Folco Lulli"],
        "genre": "Thriller"
      },
      {
        "title": "The Umbrellas of Cherbourg",
        "slug": "the-unbrella-of-cherbourg",
        "year": 1964,
        "country": "France",
        "director": "Jacques Demy",
        "top_actors": ["Catherine Deneuve", "Nino Castelnuovo", "Anne Vernon"],
        "genre": "Musical"
      },
      {
        "title": "Son of Saul",
        "slug": "son-of-saul",
        "year": 2015,
        "country": "Hungary",
        "director": "László Nemes",
        "top_actors": ["Géza Röhrig", "Levente Molnár", "Urs Rechn"],
        "genre": "Drama"
      },
      {
        "title": "Incendies",
        "slug": "incendies",
        "year": 2010,
        "country": "Canada",
        "director": "Denis Villeneuve",
        "top_actors": ["Lubna Azabal", "Mélissa Désormeaux-Poulin", "Maxim Gaudette"],
        "genre": "Drama"
      },
      {
        "title": "A Prophet",
        "slug": "a-prophet",
        "year": 2009,
        "country": "France",
        "director": "Jacques Audiard",
        "top_actors": ["Tahar Rahim", "Niels Arestrup", "Adel Bencherif"],
        "genre": "Crime"
      },
      {
        "title": "Wild Tales",
        "slug": "wild-tales",
        "year": 2014,
        "country": "Argentina",
        "director": "Damián Szifron",
        "top_actors": ["Ricardo Darín", "Oscar Martínez", "Leonardo Sbaraglia"],
        "genre": "Comedy"
      },
      {
        "title": "The Celebration",
        "slug": "the-celebration",
        "year": 1998,
        "country": "Denmark",
        "director": "Thomas Vinterberg",
        "top_actors": ["Ulrich Thomsen", "Henning Moritzen", "Thomas Bo Larsen"],
        "genre": "Drama"
      }
]);


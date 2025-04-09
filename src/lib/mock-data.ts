
import { Film, Genre } from "./types";

export const mockGenres: Genre[] = [
  { id: "action", name: "Action" },
  { id: "adventure", name: "Adventure" },
  { id: "animation", name: "Animation" },
  { id: "comedy", name: "Comedy" },
  { id: "crime", name: "Crime" },
  { id: "documentary", name: "Documentary" },
  { id: "drama", name: "Drama" },
  { id: "family", name: "Family" },
  { id: "fantasy", name: "Fantasy" },
  { id: "history", name: "History" },
  { id: "horror", name: "Horror" },
  { id: "music", name: "Music" },
  { id: "mystery", name: "Mystery" },
  { id: "romance", name: "Romance" },
  { id: "science-fiction", name: "Science Fiction" },
  { id: "thriller", name: "Thriller" },
  { id: "war", name: "War" },
  { id: "western", name: "Western" },
];

export const mockFilms: Film[] = [
  {
    id: "1",
    title: "Interstellar",
    posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg",
    year: 2014,
    rating: 8.6,
    runtime: 169,
    genres: ["Science Fiction", "Adventure", "Drama"],
    overview: "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    id: "2",
    title: "The Shawshank Redemption",
    posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    year: 1994,
    rating: 8.7,
    runtime: 142,
    genres: ["Drama", "Crime"],
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
  },
  {
    id: "3",
    title: "Parasite",
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    year: 2019,
    rating: 8.5,
    runtime: 132,
    genres: ["Thriller", "Comedy", "Drama"],
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]
  },
  {
    id: "4",
    title: "The Dark Knight",
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    year: 2008,
    rating: 8.5,
    runtime: 152,
    genres: ["Action", "Crime", "Drama", "Thriller"],
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
  },
  {
    id: "5",
    title: "Pulp Fiction",
    posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2QM528GluxMcAd.jpg",
    year: 1994,
    rating: 8.5,
    runtime: 154,
    genres: ["Thriller", "Crime"],
    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
  },
  {
    id: "6",
    title: "Inception",
    posterUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    year: 2010,
    rating: 8.3,
    runtime: 148,
    genres: ["Action", "Science Fiction", "Adventure"],
    overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
  },
  {
    id: "7",
    title: "Spirited Away",
    posterUrl: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",
    year: 2001,
    rating: 8.5,
    runtime: 125,
    genres: ["Animation", "Family", "Fantasy"],
    overview: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"]
  },
  {
    id: "8",
    title: "The Godfather",
    posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    year: 1972,
    rating: 8.7,
    runtime: 175,
    genres: ["Drama", "Crime"],
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"]
  },
  {
    id: "9",
    title: "Everything Everywhere All at Once",
    posterUrl: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/qTkJ6kbTeSjqfHCFCmWnfWZJOtm.jpg",
    year: 2022,
    rating: 8.0,
    runtime: 139,
    genres: ["Action", "Adventure", "Science Fiction"],
    overview: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    director: "Daniel Kwan, Daniel Scheinert",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"]
  },
  {
    id: "10",
    title: "Your Name",
    posterUrl: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg",
    year: 2016,
    rating: 8.4,
    runtime: 106,
    genres: ["Animation", "Drama", "Romance", "Fantasy"],
    overview: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki's body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    director: "Makoto Shinkai",
    cast: ["Ryunosuke Kamiki", "Mone Kamishiraishi", "Ryo Narita"]
  },
  {
    id: "11",
    title: "Whiplash",
    posterUrl: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg",
    year: 2014,
    rating: 8.3,
    runtime: 105,
    genres: ["Drama", "Music"],
    overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"]
  },
  {
    id: "12",
    title: "The Grand Budapest Hotel",
    posterUrl: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/svYzz6A6xleZv5toTLAhigXd1DX.jpg",
    year: 2014,
    rating: 8.1,
    runtime: 99,
    genres: ["Comedy", "Drama"],
    overview: "The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.",
    director: "Wes Anderson",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"]
  }
];

export const getRecommendedFilms = () => {
  // In a real app, this would be based on user preferences and viewing history
  return mockFilms.slice(0, 6);
};

export const getTrendingFilms = () => {
  // In a real app, this would be based on popularity metrics
  return mockFilms.slice(6, 12);
};

export const getFeaturedFilm = () => {
  // In a real app, this would be carefully selected or rotated
  return mockFilms[0];
};

export const getFilmById = (id: string) => {
  return mockFilms.find(film => film.id === id);
};

export const searchFilms = (query: string) => {
  if (!query) return [];
  const lowercaseQuery = query.toLowerCase();
  return mockFilms.filter(film => 
    film.title.toLowerCase().includes(lowercaseQuery) ||
    film.overview.toLowerCase().includes(lowercaseQuery) ||
    film.genres.some(genre => genre.toLowerCase().includes(lowercaseQuery))
  );
};

export const getFilmsByGenre = (genreId: string | null) => {
  if (!genreId) return mockFilms;
  const genre = mockGenres.find(g => g.id === genreId);
  if (!genre) return [];
  return mockFilms.filter(film => 
    film.genres.some(g => g.toLowerCase() === genre.name.toLowerCase())
  );
};


import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturedFilm } from "@/components/featured-film";
import { FilmSection } from "@/components/film-section";
import { GenreCarousel } from "@/components/genre-carousel";
import { 
  getFeaturedFilm, 
  getRecommendedFilms,
  getTrendingFilms,
  getFilmsByGenre,
  mockGenres
} from "@/lib/mock-data";

const Index = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<string | null>(null);
  
  const featuredFilm = getFeaturedFilm();
  const recommendedFilms = getRecommendedFilms();
  const trendingFilms = getTrendingFilms();
  const genreFilms = getFilmsByGenre(selectedGenreId);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <FeaturedFilm film={featuredFilm} />
        
        <FilmSection 
          title="Recommended for You" 
          films={recommendedFilms} 
          seeAllLink="/recommended" 
        />
        
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-semibold mb-4">Browse by Genre</h2>
          <GenreCarousel 
            genres={mockGenres} 
            selectedGenreId={selectedGenreId} 
            onSelectGenre={setSelectedGenreId} 
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 mt-6">
            {genreFilms.slice(0, 12).map((film) => (
              <div key={film.id} className="film-card">
                <img 
                  src={film.posterUrl} 
                  alt={film.title} 
                  className="film-card-image" 
                />
                <div className="p-2">
                  <h3 className="font-medium text-sm line-clamp-1">{film.title}</h3>
                  <div className="flex items-center text-xs mt-1">
                    <span className="text-yellow-500 font-medium">{film.rating}</span>
                    <span className="mx-1.5 text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{film.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <FilmSection 
          title="Trending Now" 
          films={trendingFilms} 
          seeAllLink="/trending" 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

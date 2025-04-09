
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { mockFilms } from "@/lib/mock-data";
import { FilmCard } from "@/components/film-card";

const Favorites = () => {
  // In a real app, this would be fetched from a database
  const [favorites, setFavorites] = useState(mockFilms.slice(5, 11));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Favorite Films</h1>
        
        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {favorites.map((film) => (
              <FilmCard key={film.id} film={film} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold mb-3">No favorites yet</h2>
            <p className="text-muted-foreground mb-6">Start adding films to your favorites list</p>
            <a 
              href="/" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
            >
              Explore Films
            </a>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Favorites;

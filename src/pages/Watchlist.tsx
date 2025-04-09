
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { mockFilms } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, X, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const Watchlist = () => {
  // In a real app, this would come from user data
  const [watchlist, setWatchlist] = useState(mockFilms.slice(0, 5));
  const [favorites, setFavorites] = useState(mockFilms.slice(5, 8));

  const removeFromWatchlist = (id: string) => {
    setWatchlist(watchlist.filter(film => film.id !== id));
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter(film => film.id !== id));
  };

  const renderFilmList = (films: typeof mockFilms, removeFunction: (id: string) => void) => {
    if (films.length === 0) {
      return (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold mb-3">Your list is empty</h2>
          <p className="text-muted-foreground mb-6">Find your next favorite film by exploring our recommendations</p>
          <Button asChild>
            <a href="/">Explore Films</a>
          </Button>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {films.map((film) => (
          <Card key={film.id} className="overflow-hidden hover:shadow-card transition-shadow">
            <CardContent className="p-0">
              <div className="flex">
                <a href={`/film/${film.id}`} className="shrink-0 w-24 md:w-40">
                  <img 
                    src={film.posterUrl} 
                    alt={film.title} 
                    className="w-full h-full object-cover aspect-[2/3]" 
                  />
                </a>
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <a href={`/film/${film.id}`}>
                        <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                          {film.title}
                        </h3>
                      </a>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span>{film.rating}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{film.year}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{film.runtime} min</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {film.genres.slice(0, 3).map((genre) => (
                          <Badge key={genre} variant="outline" className="text-xs">
                            {genre}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => removeFunction(film.id)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                  <p className="text-muted-foreground mt-3 text-sm line-clamp-2 md:line-clamp-3">
                    {film.overview}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Lists</h1>
        
        <Tabs defaultValue="watchlist" className="w-full">
          <TabsList className={cn("w-full max-w-md mb-8", favorites.length === 0 && watchlist.length === 0 ? "hidden" : "")}>
            <TabsTrigger value="watchlist" className="flex-1">
              Watchlist ({watchlist.length})
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex-1">
              Favorites ({favorites.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="watchlist">
            {renderFilmList(watchlist, removeFromWatchlist)}
          </TabsContent>
          
          <TabsContent value="favorites">
            {renderFilmList(favorites, removeFromFavorites)}
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Watchlist;


import { useParams } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getFilmById, getRecommendedFilms } from "@/lib/mock-data";
import { FilmSection } from "@/components/film-section";
import { Heart, ListChecks, PlayCircle, Star, Clock, Calendar, Film } from "lucide-react";

const FilmDetail = () => {
  const { id } = useParams<{ id: string }>();
  const film = getFilmById(id || "");
  const similarFilms = getRecommendedFilms(); // In a real app, we'd get similar films

  if (!film) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Film not found</h1>
          <p className="text-muted-foreground mb-6">The film you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/">Go back home</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Film backdrop and info */}
        <div className="relative">
          <div className="h-[50vh] md:h-[70vh] w-full overflow-hidden">
            <img 
              src={film.backdropUrl || film.posterUrl} 
              alt={film.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative -mt-40 md:-mt-60 z-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Film poster */}
              <div className="shrink-0 w-48 md:w-64 mx-auto md:mx-0">
                <img 
                  src={film.posterUrl} 
                  alt={film.title} 
                  className="w-full aspect-[2/3] rounded-lg shadow-card object-cover"
                />
              </div>
              
              {/* Film info */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{film.title}</h1>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-semibold">{film.rating}</span>
                    <span className="text-muted-foreground">/10</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{film.runtime} min</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{film.year}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {film.genres.map((genre) => (
                    <Badge key={genre} variant="secondary">
                      {genre}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 line-clamp-4 md:line-clamp-none">
                  {film.overview}
                </p>
                
                {film.director && (
                  <div className="mb-4">
                    <span className="font-medium">Director: </span>
                    <span className="text-muted-foreground">{film.director}</span>
                  </div>
                )}
                
                {film.cast && film.cast.length > 0 && (
                  <div className="mb-6">
                    <span className="font-medium">Cast: </span>
                    <span className="text-muted-foreground">{film.cast.join(", ")}</span>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-3 mt-2">
                  <Button className="gap-2">
                    <PlayCircle className="h-5 w-5" />
                    Watch Trailer
                  </Button>
                  
                  <Button variant="outline" className="gap-2">
                    <ListChecks className="h-5 w-5" />
                    Add to Watchlist
                  </Button>
                  
                  <Button variant="outline" className="gap-2">
                    <Heart className="h-5 w-5" />
                    Add to Favorites
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs section */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="about">
            <TabsList className="mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="similar">Similar Films</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Synopsis</h2>
                <p className="text-muted-foreground">{film.overview}</p>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Director</h3>
                    <p className="text-muted-foreground">{film.director || "Unknown"}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Release Year</h3>
                    <p className="text-muted-foreground">{film.year}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Runtime</h3>
                    <p className="text-muted-foreground">{film.runtime} minutes</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Rating</h3>
                    <p className="text-muted-foreground">{film.rating}/10</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Cast</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {film.cast && film.cast.map((actor) => (
                    <div key={actor} className="text-center">
                      <div className="w-full aspect-square bg-muted rounded-full mb-2 flex items-center justify-center">
                        <Film className="h-8 w-8 text-muted-foreground/50" />
                      </div>
                      <p className="font-medium text-sm">{actor}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="text-center py-16">
                <h2 className="text-xl font-semibold mb-3">No reviews yet</h2>
                <p className="text-muted-foreground mb-6">Be the first to review this film</p>
                <Button>Write a Review</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="similar">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {similarFilms.map((film) => (
                  <div key={film.id} className="film-card">
                    <a href={`/film/${film.id}`}>
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
                    </a>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <FilmSection 
          title="You May Also Like" 
          films={similarFilms} 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default FilmDetail;

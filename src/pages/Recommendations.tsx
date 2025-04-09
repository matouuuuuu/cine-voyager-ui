
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FilmSection } from "@/components/film-section";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
import { Film, Genre } from "@/lib/types";
import { getRecommendedFilms, mockGenres } from "@/lib/mock-data";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Filter, RefreshCw } from "lucide-react";

const Recommendations = () => {
  const [recommendedFilms, setRecommendedFilms] = useState<Film[]>(getRecommendedFilms().slice(0, 6));
  const [isOpen, setIsOpen] = useState(false);
  const [runtimeRange, setRuntimeRange] = useState<[number, number]>([60, 180]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["English"]);
  
  const languages = ["English", "French", "Spanish", "German", "Japanese", "Korean"];

  const handleGenreChange = (genreId: string, checked: boolean) => {
    if (checked) {
      setSelectedGenres([...selectedGenres, genreId]);
    } else {
      setSelectedGenres(selectedGenres.filter(id => id !== genreId));
    }
  };

  const handleLanguageChange = (language: string, checked: boolean) => {
    if (checked) {
      setSelectedLanguages([...selectedLanguages, language]);
    } else {
      setSelectedLanguages(selectedLanguages.filter(lang => lang !== language));
    }
  };

  const handleGetRecommendations = () => {
    // In a real app, we would make an API call with the filters
    // For now, just get some random films from our mock data
    const newRecommendations = getRecommendedFilms().filter(film => {
      // Filter by runtime
      if (film.runtime < runtimeRange[0] || film.runtime > runtimeRange[1]) {
        return false;
      }
      
      // Filter by genre if any genres are selected
      if (selectedGenres.length > 0) {
        const hasSelectedGenre = film.genres.some(genre => 
          selectedGenres.includes(genre)
        );
        if (!hasSelectedGenre) return false;
      }
      
      // In a real app, we would also filter by language
      // For now, let's assume all films match the language filter
      
      return true;
    });
    
    setRecommendedFilms(newRecommendations.length > 0 
      ? newRecommendations.slice(0, 12) 
      : getRecommendedFilms().slice(0, 6));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pb-10">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Film Recommendations</h1>
          
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="mb-8 border rounded-lg p-4 bg-background/80 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-xl font-semibold">Filters</h2>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="mt-4 space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Runtime (minutes)</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[60, 180]}
                    max={240}
                    min={30}
                    step={5}
                    value={runtimeRange}
                    onValueChange={(value) => setRuntimeRange(value as [number, number])}
                    className="my-6"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{runtimeRange[0]} min</span>
                    <span>{runtimeRange[1]} min</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Genres</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {mockGenres.map((genre: Genre) => (
                    <div key={genre.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`genre-${genre.id}`} 
                        checked={selectedGenres.includes(genre.id)}
                        onCheckedChange={(checked) => 
                          handleGenreChange(genre.id, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={`genre-${genre.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {genre.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Languages</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {languages.map((language) => (
                    <div key={language} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`lang-${language}`} 
                        checked={selectedLanguages.includes(language)}
                        onCheckedChange={(checked) => 
                          handleLanguageChange(language, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={`lang-${language}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {language}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="flex justify-center mb-8">
            <Button onClick={handleGetRecommendations} className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Get Recommendations
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="all">All Recommendations</TabsTrigger>
              <TabsTrigger value="personalized">Personalized</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {recommendedFilms.map((film) => (
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
            </TabsContent>
            
            <TabsContent value="personalized" className="mt-0">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Login to see personalized recommendations</p>
              </div>
            </TabsContent>
            
            <TabsContent value="trending" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {getRecommendedFilms().slice(6, 18).map((film) => (
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
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Recommendations;

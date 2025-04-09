
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { mockFilms } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Star, Calendar, Clock, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock diary entries
const mockDiaryEntries = [
  { id: "1", filmId: "1", date: new Date(2024, 3, 5), notes: "Amazing visuals and story" },
  { id: "2", filmId: "3", date: new Date(2024, 3, 1), notes: "Brilliant social commentary" },
  { id: "3", filmId: "6", date: new Date(2024, 2, 25), notes: "Mind-bending plot" },
  { id: "4", filmId: "9", date: new Date(2024, 2, 15), notes: "Incredible performances" },
  { id: "5", filmId: "11", date: new Date(2024, 2, 10), notes: "Intense and captivating" },
];

const Diary = () => {
  const [diaryEntries, setDiaryEntries] = useState(mockDiaryEntries);
  
  // Get film data for each diary entry
  const diaryWithFilmData = diaryEntries.map(entry => {
    const film = mockFilms.find(film => film.id === entry.filmId);
    return { ...entry, film };
  });

  const removeFromDiary = (id: string) => {
    setDiaryEntries(diaryEntries.filter(entry => entry.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Film Diary</h1>
        
        {diaryWithFilmData.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold mb-3">Your diary is empty</h2>
            <p className="text-muted-foreground mb-6">Start logging the films you've watched</p>
            <Button asChild>
              <a href="/">Explore Films</a>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {diaryWithFilmData.map((entry) => (
              <Card key={entry.id} className="overflow-hidden hover:shadow-card transition-shadow">
                <CardContent className="p-0">
                  <div className="flex">
                    <a href={`/film/${entry.film?.id}`} className="shrink-0 w-24 md:w-40">
                      <img 
                        src={entry.film?.posterUrl} 
                        alt={entry.film?.title} 
                        className="w-full h-full object-cover aspect-[2/3]" 
                      />
                    </a>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <a href={`/film/${entry.film?.id}`}>
                            <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                              {entry.film?.title}
                            </h3>
                          </a>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-sm">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                              <span>{entry.film?.rating}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{entry.film?.year}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{entry.film?.runtime} min</span>
                            </div>
                          </div>
                          <div className="flex items-center mt-2 text-sm font-medium text-primary">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Watched on {format(entry.date, 'MMM d, yyyy')}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {entry.film?.genres.slice(0, 3).map((genre) => (
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
                          onClick={() => removeFromDiary(entry.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                      {entry.notes && (
                        <div className="mt-3 p-3 bg-muted rounded-md">
                          <p className="text-sm italic">{entry.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Diary;

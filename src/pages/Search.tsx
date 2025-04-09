
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchInput } from "@/components/ui/search-input";
import { Film } from "@/lib/types";
import { searchFilms, mockGenres } from "@/lib/mock-data";
import { FilmCard } from "@/components/film-card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [searchResults, setSearchResults] = useState<Film[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [yearRange, setYearRange] = useState<number[]>([1970, 2025]);
  const [ratingFilter, setRatingFilter] = useState<number[]>([0, 10]);
  const [sortBy, setSortBy] = useState("relevance");
  
  // This would be much more complex in a real app
  useEffect(() => {
    const results = searchFilms(searchQuery);
    
    // Apply filters (very simple implementation for demo purposes)
    let filteredResults = results;
    
    if (selectedGenre) {
      filteredResults = filteredResults.filter(film => 
        film.genres.some(genre => genre.toLowerCase() === selectedGenre.toLowerCase())
      );
    }
    
    filteredResults = filteredResults.filter(film => 
      film.year >= yearRange[0] && film.year <= yearRange[1] &&
      film.rating >= ratingFilter[0] && film.rating <= ratingFilter[1]
    );
    
    // Apply sorting
    switch (sortBy) {
      case "year-desc":
        filteredResults.sort((a, b) => b.year - a.year);
        break;
      case "year-asc":
        filteredResults.sort((a, b) => a.year - b.year);
        break;
      case "rating-desc":
        filteredResults.sort((a, b) => b.rating - a.rating);
        break;
      case "rating-asc":
        filteredResults.sort((a, b) => a.rating - b.rating);
        break;
      // For relevance, we'd use the default ordering (or implement a relevance algorithm)
    }
    
    setSearchResults(filteredResults);
  }, [searchQuery, selectedGenre, yearRange, ratingFilter, sortBy]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
  };
  
  const clearFilters = () => {
    setSelectedGenre("");
    setYearRange([1970, 2025]);
    setRatingFilter([0, 10]);
    setSortBy("relevance");
  };
  
  const hasActiveFilters = selectedGenre || yearRange[0] !== 1970 || yearRange[1] !== 2025 || 
                          ratingFilter[0] !== 0 || ratingFilter[1] !== 10 || sortBy !== "relevance";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl font-bold mb-6">Search Films</h1>
          
          <form onSubmit={handleSearch} className="mb-8">
            <SearchInput
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for films, directors, actors, or genres..."
              className="w-full"
            />
          </form>
          
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
            {/* Filters sidebar */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Filters</h2>
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                )}
              </div>
              
              <div className="space-y-3">
                <Label>Genre</Label>
                <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Genres" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Genres</SelectItem>
                    {mockGenres.map((genre) => (
                      <SelectItem key={genre.id} value={genre.name}>
                        {genre.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Year Range</Label>
                  <span className="text-sm text-muted-foreground">
                    {yearRange[0]} - {yearRange[1]}
                  </span>
                </div>
                <Slider
                  value={yearRange}
                  min={1920}
                  max={2025}
                  step={1}
                  onValueChange={setYearRange}
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Rating</Label>
                  <span className="text-sm text-muted-foreground">
                    {ratingFilter[0]} - {ratingFilter[1]}
                  </span>
                </div>
                <Slider
                  value={ratingFilter}
                  min={0}
                  max={10}
                  step={0.1}
                  onValueChange={setRatingFilter}
                />
              </div>
              
              <div className="space-y-3">
                <Label>Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Relevance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="year-desc">Year (Newest)</SelectItem>
                    <SelectItem value="year-asc">Year (Oldest)</SelectItem>
                    <SelectItem value="rating-desc">Rating (Highest)</SelectItem>
                    <SelectItem value="rating-asc">Rating (Lowest)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Search results */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold">
                  {searchResults.length} results
                  {searchQuery && ` for "${searchQuery}"`}
                </h2>
                
                {/* Active filters display */}
                {hasActiveFilters && (
                  <div className="flex flex-wrap gap-2">
                    {selectedGenre && (
                      <Badge variant="secondary" className="gap-1 px-2 py-1">
                        {selectedGenre}
                        <button onClick={() => setSelectedGenre("")}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                    
                    {(yearRange[0] !== 1970 || yearRange[1] !== 2025) && (
                      <Badge variant="secondary" className="gap-1 px-2 py-1">
                        {yearRange[0]}-{yearRange[1]}
                        <button onClick={() => setYearRange([1970, 2025])}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                    
                    {(ratingFilter[0] !== 0 || ratingFilter[1] !== 10) && (
                      <Badge variant="secondary" className="gap-1 px-2 py-1">
                        {ratingFilter[0]}-{ratingFilter[1]} rating
                        <button onClick={() => setRatingFilter([0, 10])}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                    
                    {sortBy !== "relevance" && (
                      <Badge variant="secondary" className="gap-1 px-2 py-1">
                        Sorted by: {sortBy.replace('-', ' ')}
                        <button onClick={() => setSortBy("relevance")}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                  </div>
                )}
              </div>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {searchResults.map((film) => (
                    <FilmCard key={film.id} film={film} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filters to find what you're looking for
                  </p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;

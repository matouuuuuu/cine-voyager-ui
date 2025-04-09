
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Genre {
  id: string;
  name: string;
}

interface GenreCarouselProps {
  genres: Genre[];
  selectedGenreId: string | null;
  onSelectGenre: (genreId: string | null) => void;
}

export function GenreCarousel({
  genres,
  selectedGenreId,
  onSelectGenre,
}: GenreCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200;
    const currentScroll = container.scrollLeft;
    
    container.scrollTo({
      left: direction === "left" 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  return (
    <div className="relative my-4">
      {/* Left scroll button */}
      {showLeftArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      )}

      {/* Genres container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-none pb-1 px-4 gap-2"
        onScroll={handleScroll}
      >
        <Button
          variant={selectedGenreId === null ? "default" : "outline"}
          className="rounded-full whitespace-nowrap"
          onClick={() => onSelectGenre(null)}
        >
          All Genres
        </Button>
        
        {genres.map((genre) => (
          <Button
            key={genre.id}
            variant={selectedGenreId === genre.id ? "default" : "outline"}
            className={cn(
              "rounded-full whitespace-nowrap",
              selectedGenreId === genre.id 
                ? "" 
                : "hover:bg-muted"
            )}
            onClick={() => onSelectGenre(genre.id)}
          >
            {genre.name}
          </Button>
        ))}
      </div>
      
      {/* Right scroll button */}
      {showRightArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

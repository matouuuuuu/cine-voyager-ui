
import { Link } from "react-router-dom";
import { Film } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Star, Heart } from "lucide-react";
import { Button } from "./ui/button";

interface FilmCardProps {
  film: Film;
  className?: string;
}

export function FilmCard({ film, className }: FilmCardProps) {
  return (
    <div className={cn("film-card group", className)}>
      <Link to={`/film/${film.id}`} className="block">
        <div className="overflow-hidden">
          <img
            src={film.posterUrl}
            alt={film.title}
            className="film-card-image"
          />
        </div>
        <div className="p-3">
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-sm line-clamp-2">{film.title}</h3>
            <div className="flex items-center ml-2">
              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
              <span className="text-xs ml-1 font-medium">{film.rating}</span>
            </div>
          </div>
          <div className="mt-1 flex items-center space-x-1">
            <Badge variant="outline" className="px-1.5 py-0 text-[10px]">
              {film.year}
            </Badge>
            {film.genres.slice(0, 1).map((genre) => (
              <Badge
                key={genre}
                variant="secondary"
                className="px-1.5 py-0 text-[10px]"
              >
                {genre}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="icon"
          variant="secondary"
          className="h-8 w-8 bg-background/50 backdrop-blur-sm hover:bg-background/80"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Add to favorites logic would go here
          }}
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

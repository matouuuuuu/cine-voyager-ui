
import { Film } from "@/lib/types";
import { Button } from "./ui/button";
import { Info, PlayCircle, Plus } from "lucide-react";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

interface FeaturedFilmProps {
  film: Film;
}

export function FeaturedFilm({ film }: FeaturedFilmProps) {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={film.backdropUrl || film.posterUrl}
          alt={film.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{film.title}</h1>
          <div className="flex items-center space-x-3 mb-4">
            <Badge variant="outline">{film.year}</Badge>
            <div className="flex items-center">
              <span className="text-yellow-500 font-medium">{film.rating}</span>
              <span className="mx-1">/</span>
              <span>10</span>
            </div>
            <span className="text-muted-foreground">{film.runtime} min</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {film.genres.map((genre) => (
              <Badge key={genre} variant="secondary">
                {genre}
              </Badge>
            ))}
          </div>
          <p className="text-lg text-muted-foreground mb-6 line-clamp-3 md:line-clamp-4">
            {film.overview}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gap-2">
              <PlayCircle className="h-5 w-5" />
              Watch Trailer
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Plus className="h-5 w-5" />
              Add to Watchlist
            </Button>
            <Button size="lg" variant="secondary" asChild className="gap-2">
              <Link to={`/film/${film.id}`}>
                <Info className="h-5 w-5" />
                Details
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

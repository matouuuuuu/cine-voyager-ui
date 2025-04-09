
import { Film } from "@/lib/types";
import { FilmCard } from "./film-card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FilmSectionProps {
  title: string;
  films: Film[];
  seeAllLink?: string;
}

export function FilmSection({ title, films, seeAllLink }: FilmSectionProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {seeAllLink && (
            <Button variant="link" asChild className="gap-1">
              <Link to={seeAllLink}>
                See All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {films.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </div>
    </section>
  );
}

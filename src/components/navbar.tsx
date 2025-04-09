
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchInput } from "./ui/search-input";
import { Button } from "./ui/button";
import { Heart, Home, ListChecks, LogIn, Menu, Search, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setSearchExpanded(!searchExpanded);

  const isActiveRoute = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Watchlist", path: "/watchlist", icon: ListChecks },
    { name: "Favorites", path: "/favorites", icon: Heart },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-film-purple">CineVoyager</span>
          </Link>
        </div>

        {!isMobile && (
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "nav-link flex items-center space-x-1",
                  isActiveRoute(item.path) ? "active" : ""
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center space-x-2">
          {!isMobile ? (
            <>
              <SearchInput className="w-64" />
              <Button asChild variant="outline">
                <Link to="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
            </>
          ) : (
            <>
              {searchExpanded ? (
                <SearchInput className="w-full animate-fade-in" />
              ) : (
                <>
                  <Button variant="ghost" size="icon" onClick={toggleSearch}>
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={toggleMenu}>
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="absolute top-16 inset-x-0 bg-background shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "flex items-center p-3 rounded-md",
                    isActiveRoute(item.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="flex items-center p-3 rounded-md text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="mr-3 h-5 w-5" />
                Login
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}


import { Link } from "react-router-dom";
import { Github, Heart, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">CineVoyager</h3>
            <p className="text-muted-foreground">
              Discover your next favorite film with personalized recommendations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">Explore</Link></li>
              <li><Link to="/watchlist" className="text-muted-foreground hover:text-foreground transition-colors">Watchlist</Link></li>
              <li><Link to="/favorites" className="text-muted-foreground hover:text-foreground transition-colors">Favorites</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors">Login</Link></li>
              <li><Link to="/signup" className="text-muted-foreground hover:text-foreground transition-colors">Sign up</Link></li>
              <li><Link to="/profile" className="text-muted-foreground hover:text-foreground transition-colors">Profile</Link></li>
              <li><Link to="/settings" className="text-muted-foreground hover:text-foreground transition-colors">Settings</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 CineVoyager. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <span className="text-sm">Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

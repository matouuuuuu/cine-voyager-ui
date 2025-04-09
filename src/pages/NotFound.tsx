
import { Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md text-center px-4 py-16">
          <div className="mb-6 flex justify-center">
            <div className="bg-muted rounded-full p-6">
              <Film className="h-16 w-16 text-muted-foreground" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The film you're looking for doesn't exist or has been moved to another platform.
          </p>
          
          <Button asChild size="lg" className="mx-auto">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;

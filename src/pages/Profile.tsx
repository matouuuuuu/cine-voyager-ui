
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Film, Heart, ListChecks, LogOut, Mail, Settings, User } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">John Doe</h1>
              <p className="text-muted-foreground mb-4">Film enthusiast. Joined April 2023</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div>
                  <span className="font-bold">265</span>
                  <span className="text-muted-foreground ml-1">Films Watched</span>
                </div>
                <div>
                  <span className="font-bold">87</span>
                  <span className="text-muted-foreground ml-1">Reviews</span>
                </div>
                <div>
                  <span className="font-bold">42</span>
                  <span className="text-muted-foreground ml-1">Watchlist</span>
                </div>
              </div>
            </div>
            
            <div className="shrink-0">
              <Button variant="outline">Edit Profile</Button>
            </div>
          </div>
          
          <Tabs defaultValue="activity">
            <TabsList className="mb-8 grid grid-cols-2 md:grid-cols-4 lg:flex">
              <TabsTrigger value="activity" className="flex gap-2 items-center">
                <Film className="h-4 w-4" />
                <span>Activity</span>
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex gap-2 items-center">
                <Heart className="h-4 w-4" />
                <span>Favorites</span>
              </TabsTrigger>
              <TabsTrigger value="watchlist" className="flex gap-2 items-center">
                <ListChecks className="h-4 w-4" />
                <span>Watchlist</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex gap-2 items-center">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="activity">
              <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">You liked <span className="text-primary">Interstellar</span></p>
                        <p className="text-sm text-muted-foreground">4 hours ago</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                        <ListChecks className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">You added <span className="text-primary">Pulp Fiction</span> to your watchlist</p>
                        <p className="text-sm text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                        <Film className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">You watched <span className="text-primary">The Dark Knight</span></p>
                        <p className="text-sm text-muted-foreground">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="favorites">
              <h2 className="text-2xl font-semibold mb-6">Your Favorite Films</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="film-card">
                    <img 
                      src={`https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg`} 
                      alt="Film poster" 
                      className="film-card-image" 
                    />
                    <div className="p-2">
                      <h3 className="font-medium text-sm">The Shawshank Redemption</h3>
                      <div className="flex items-center text-xs mt-1">
                        <span className="text-yellow-500 font-medium">9.3</span>
                        <span className="mx-1.5 text-muted-foreground">•</span>
                        <span className="text-muted-foreground">1994</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="watchlist">
              <h2 className="text-2xl font-semibold mb-6">Your Watchlist</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="film-card">
                    <img 
                      src={`https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg`} 
                      alt="Film poster" 
                      className="film-card-image" 
                    />
                    <div className="p-2">
                      <h3 className="font-medium text-sm">Pulp Fiction</h3>
                      <div className="flex items-center text-xs mt-1">
                        <span className="text-yellow-500 font-medium">8.9</span>
                        <span className="mx-1.5 text-muted-foreground">•</span>
                        <span className="text-muted-foreground">1994</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="settings">
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>Update your account information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <input 
                              id="username" 
                              type="text" 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Username"
                              defaultValue="johndoe"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <input 
                              id="email" 
                              type="email" 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Email"
                              defaultValue="john.doe@example.com"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <Button>Save Changes</Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Preferences</h2>
                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>Manage how you receive notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="notifications-email">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications about activity via email
                          </p>
                        </div>
                        <Switch id="notifications-email" defaultChecked />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="notifications-push">Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications about activity via browser
                          </p>
                        </div>
                        <Switch id="notifications-push" defaultChecked />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="notifications-marketing">Marketing Emails</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive emails about new features and special offers
                          </p>
                        </div>
                        <Switch id="notifications-marketing" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Privacy & Security</h2>
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <Button variant="outline" className="w-full flex justify-center items-center gap-2">
                        <Bell className="h-4 w-4" />
                        Change Password
                      </Button>
                      
                      <Button variant="outline" className="w-full flex justify-center items-center gap-2">
                        Export My Data
                      </Button>
                      
                      <Button variant="destructive" className="w-full flex justify-center items-center gap-2">
                        <LogOut className="h-4 w-4" />
                        Logout
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;

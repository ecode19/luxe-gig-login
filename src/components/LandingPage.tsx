import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MapPin, 
  Star, 
  Users, 
  TrendingUp, 
  Search, 
  PlusCircle, 
  Shield, 
  Clock, 
  Award,
  ChevronRight,
  Play,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const LandingPage = () => {
  const [userType, setUserType] = useState<'seeker' | 'poster' | null>(null);

  const stats = [
    { label: "Active Gigs", value: "12,000+", icon: Briefcase },
    { label: "Freelancers", value: "8,500+", icon: Users },
    { label: "Success Rate", value: "94%", icon: TrendingUp },
    { label: "Cities", value: "25+", icon: MapPin }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Protected transactions with escrow system for peace of mind"
    },
    {
      icon: Clock,
      title: "Quick Matching",
      description: "AI-powered matching connects you with perfect opportunities in minutes"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Verified profiles and rating system ensure high-quality work"
    }
  ];

  const tanzanianCities = [
    "Dar es Salaam", "Arusha", "Mwanza", "Dodoma", "Mbeya", "Zanzibar"
  ];

  const popularGigs = [
    { title: "Web Development", count: "1,200+ gigs", growth: "+15%" },
    { title: "Graphic Design", count: "850+ gigs", growth: "+22%" },
    { title: "Digital Marketing", count: "650+ gigs", growth: "+18%" },
    { title: "Content Writing", count: "750+ gigs", growth: "+12%" },
    { title: "Mobile Apps", count: "420+ gigs", growth: "+28%" },
    { title: "Translation", count: "380+ gigs", growth: "+20%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Premium background elements */}
      <div className="fixed inset-0 pattern-dots pattern-grid"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1s" }}></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="glass-effect border-b border-border/20 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-xl">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-bold text-foreground">GigsTZ</h1>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
                <Button variant="outline" className="glass-effect border-border/50">
                  Sign In
                </Button>
                <Button className="bg-gradient-primary hover:opacity-90 shadow-premium">
                  Get Started
                </Button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <MapPin className="w-4 h-4 mr-2" />
                Tanzania's Premier Gig Platform
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Connect, Create, and 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Collaborate</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Join Tanzania's fastest-growing freelance marketplace. Whether you're seeking talent or offering services, 
                find your perfect match with verified professionals across all major Tanzanian cities.
              </p>

              {/* User Type Selection */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-2xl mx-auto">
                <Card 
                  className={`cursor-pointer transition-all duration-300 glass-effect border-border/50 hover:border-primary/50 hover:shadow-premium ${
                    userType === 'seeker' ? 'border-primary shadow-premium' : ''
                  }`}
                  onClick={() => setUserType('seeker')}
                >
                  <CardHeader className="text-center">
                    <Search className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>I'm looking for gigs</CardTitle>
                    <CardDescription>Find projects that match your skills</CardDescription>
                  </CardHeader>
                </Card>

                <Card 
                  className={`cursor-pointer transition-all duration-300 glass-effect border-border/50 hover:border-primary/50 hover:shadow-premium ${
                    userType === 'poster' ? 'border-primary shadow-premium' : ''
                  }`}
                  onClick={() => setUserType('poster')}
                >
                  <CardHeader className="text-center">
                    <PlusCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>I need to hire talent</CardTitle>
                    <CardDescription>Post projects and find experts</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 shadow-premium text-lg px-8 py-6 h-auto"
                disabled={!userType}
              >
                {userType === 'seeker' ? 'Start Finding Gigs' : userType === 'poster' ? 'Post Your First Gig' : 'Choose Your Path'} 
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-border/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Gigs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Trending Gigs in Tanzania
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the most in-demand skills and opportunities across major Tanzanian cities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {popularGigs.map((gig, index) => (
                <Card key={index} className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-premium">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-foreground">{gig.title}</h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {gig.growth}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{gig.count}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Explore Gigs <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cities */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-6">Available in Major Cities</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {tanzanianCities.map((city, index) => (
                  <Badge key={index} variant="outline" className="glass-effect border-border/50 text-base py-2 px-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {city}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose GigsTZ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built for Tanzanian professionals with world-class features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="glass-effect border-border/50 hover:shadow-premium transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 mx-auto">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Get started in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Create Profile", desc: "Sign up and showcase your skills or project needs" },
                { step: "02", title: "Connect & Match", desc: "Use our smart matching system to find perfect opportunities" },
                { step: "03", title: "Work & Earn", desc: "Collaborate securely and grow your freelance career" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-background/10"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Gig Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of Tanzanian professionals already growing their careers on GigsTZ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                Start as Freelancer
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto">
                Hire Talent
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border/20 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-xl">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">GigsTZ</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Empowering Tanzanian talent, one gig at a time.
              </p>
              <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Support</a>
                <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
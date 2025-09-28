import { ArrowLeft, MapPin, Star, Clock, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Import Ella images
import ellaHero from '@/assets/ella-destination.jpg';
import ellaNineArch from '@/assets/ella-nine-arch-bridge.jpg';
import ellaDestination1 from '@/assets/ella-destination1.jpg';

const Ella = () => {
  const images = [
    { src: ellaHero, alt: "Ella panoramic view", title: "Panoramic Mountain Views" },
    { src: ellaNineArch, alt: "Nine Arch Bridge with train", title: "Historic Nine Arch Bridge" },
    { src: ellaDestination1, alt: "Ella tea plantations", title: "Lush Tea Plantations" }
  ];

  const activities = [
    { name: "Nine Arch Bridge", duration: "2-3 hours", difficulty: "Easy" },
    { name: "Little Adam's Peak Hike", duration: "3-4 hours", difficulty: "Moderate" },
    { name: "Tea Plantation Tours", duration: "Half day", difficulty: "Easy" },
    { name: "Ella Rock Hike", duration: "4-5 hours", difficulty: "Challenging" },
    { name: "Ravana Falls Visit", duration: "1-2 hours", difficulty: "Easy" },
    { name: "Train Ride Experience", duration: "2-8 hours", difficulty: "Easy" }
  ];

  const highlights = [
    "UNESCO World Heritage railway line",
    "Breathtaking mountain vistas", 
    "Colonial-era tea estates",
    "Rich biodiversity and wildlife",
    "Cool mountain climate year-round",
    "Traditional Sri Lankan culture"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={ellaHero} 
          alt="Ella landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-3xl">
              <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Destinations
              </Link>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-white/90 font-medium">Hill Country, Sri Lanka</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4">
                Ella
              </h1>
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                Famous for the Nine Arch Bridge and stunning tea plantations with breathtaking mountain views. 
                A paradise for hikers and nature lovers.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 text-secondary fill-secondary" />
                  <span className="text-white font-semibold">4.8</span>
                </div>
                <Badge variant="secondary" className="bg-primary/20 text-white border-primary/30">
                  Adventure Destination
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Explore Ella's Beauty
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the stunning landscapes and iconic landmarks that make Ella unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="group overflow-hidden shadow-card hover:shadow-tropical transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-display font-semibold">{image.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Activities */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">
                Things to Do in Ella
              </h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-display font-semibold text-foreground mb-2">
                            {activity.name}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {activity.duration}
                            </div>
                            <Badge 
                              variant={activity.difficulty === 'Easy' ? 'secondary' : 
                                     activity.difficulty === 'Moderate' ? 'default' : 'destructive'}
                            >
                              {activity.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">
                Why Visit Ella?
              </h3>
              <div className="space-y-6">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 gap-4">
                      {highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-display font-semibold text-foreground mb-3">
                      Best Time to Visit
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      December to March offers the best weather with clear skies and minimal rainfall. 
                      The cool mountain climate makes it pleasant year-round.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Perfect for couples, families, and solo travelers</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-ocean">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Ready to Explore Ella?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let Serranid Journeys create your perfect Ella adventure with expert guides and curated experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Book Ella Tour
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ella;
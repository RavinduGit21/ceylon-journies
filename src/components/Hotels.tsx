import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Wifi, Car, Coffee, Waves } from 'lucide-react';

// Import hotel images
import luxuryHotelImage from '@/assets/luxury-hotel.jpg';
import beachHotelImage from '@/assets/beach-hotel.jpg';

const hotels = [
  {
    id: 1,
    name: 'Serranid Grand Resort',
    location: 'Colombo',
    description: 'Luxury 5-star resort with world-class amenities and stunning ocean views.',
    image: luxuryHotelImage,
    rating: 4.9,
    price: '$280',
    amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'],
    category: 'Luxury'
  },
  {
    id: 2,
    name: 'Tropical Beach Villa',
    location: 'Mirissa',
    description: 'Boutique beachfront hotel perfect for romantic getaways and surfing.',
    image: beachHotelImage,
    rating: 4.7,
    price: '$150',
    amenities: ['WiFi', 'Beach Access', 'Restaurant', 'Parking'],
    category: 'Beach Resort'
  },
  {
    id: 3,
    name: 'Heritage Kandy Hotel',
    location: 'Kandy',
    description: 'Historic hotel near Temple of Tooth with traditional Sri Lankan hospitality.',
    image: luxuryHotelImage,
    rating: 4.6,
    price: '$120',
    amenities: ['WiFi', 'Cultural Tours', 'Restaurant', 'Garden'],
    category: 'Heritage'
  },
  {
    id: 4,
    name: 'Mountain View Lodge',
    location: 'Ella',
    description: 'Cozy mountain lodge with panoramic views of tea plantations and valleys.',
    image: beachHotelImage,
    rating: 4.8,
    price: '$95',
    amenities: ['WiFi', 'Mountain Views', 'Tea Tours', 'Hiking'],
    category: 'Mountain Lodge'
  },
  {
    id: 5,
    name: 'Safari Camp Yala',
    location: 'Yala',
    description: 'Unique safari camp experience with luxury tents and wildlife encounters.',
    image: luxuryHotelImage,
    rating: 4.5,
    price: '$200',
    amenities: ['Safari Tours', 'Restaurant', 'Wildlife Viewing', 'Campfire'],
    category: 'Safari Lodge'
  },
  {
    id: 6,
    name: 'Colonial Charm Galle',
    location: 'Galle',
    description: 'Beautifully restored colonial mansion within the historic Galle Fort.',
    image: beachHotelImage,
    rating: 4.7,
    price: '$180',
    amenities: ['WiFi', 'Historic Tours', 'Restaurant', 'Art Gallery'],
    category: 'Boutique'
  }
];

const getAmenityIcon = (amenity: string) => {
  switch (amenity.toLowerCase()) {
    case 'wifi':
      return <Wifi className="h-4 w-4" />;
    case 'parking':
      return <Car className="h-4 w-4" />;
    case 'restaurant':
      return <Coffee className="h-4 w-4" />;
    case 'beach access':
      return <Waves className="h-4 w-4" />;
    default:
      return <Star className="h-4 w-4" />;
  }
};

const Hotels = () => {
  return (
    <section id="hotels" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Premium{' '}
            <span className="gradient-sunset bg-clip-text text-transparent">
              Hotels & Resorts
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Experience Sri Lankan hospitality at its finest with our carefully selected 
            collection of luxury hotels and unique accommodations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div 
              key={hotel.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="group overflow-hidden shadow-card hover:shadow-tropical transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-secondary-foreground">
                      {hotel.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="h-4 w-4 text-secondary fill-secondary" />
                    <span className="text-sm font-semibold">{hotel.rating}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl font-display">
                    <span>{hotel.name}</span>
                    <span className="text-lg font-bold text-primary">{hotel.price}/night</span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {hotel.location}
                  </CardDescription>
                  <CardDescription className="text-muted-foreground">
                    {hotel.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center gap-1 text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-hero hover:opacity-90 transition-opacity"
                    >
                      Book Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
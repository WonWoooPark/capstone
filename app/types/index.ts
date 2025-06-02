export interface Accommodation {
  id: number;
  title: string;
  description: string;
  location: string;
  price: number;
  rating: number;
  aiScore?: number;
  images: string[];
  reviews: Review[];
  amenities: string[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  aiScore?: number;
  content: string;
  date: string;
  categories: {
    cleanliness: number;
    location: number;
    checkIn: number;
    value: number;
    communication: number;
  };
} 
export interface CategoryRating {
  rating: number
  aiRating: number
}

export interface CategoryRatings {
  cleanliness: CategoryRating
  accuracy: CategoryRating
  checkin: CategoryRating
  communication: CategoryRating
  location: CategoryRating
  value: CategoryRating
}

export interface Accommodation {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  aiScore: number;
  isSuperhost: boolean;
  amenities: string[];
  description: string;
  categoryRatings: CategoryRatings;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  aiRating: number;
  comment: string;
  date: string;
  isVerified: boolean;
  categoryRatings: {
    cleanliness: number;
    accuracy: number;
    checkin: number;
    communication: number;
    location: number;
    value: number;
  };
} 
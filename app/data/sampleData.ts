import { Accommodation } from '../types';

export const sampleAccommodations: Accommodation[] = [
  {
    id: 1,
    title: "강남의 럭셔리 아파트",
    description: "강남 중심가에 위치한 고급 아파트입니다. 넓은 공간과 최신 시설을 갖추고 있습니다.",
    location: "서울시 강남구",
    price: 150000,
    rating: 4.8,
    aiScore: 92,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9"
    ],
    amenities: ["와이파이", "주방", "세탁기", "에어컨", "TV"],
    reviews: [
      {
        id: 1,
        author: "김철수",
        rating: 5.0,
        aiScore: 94,
        content: "정말 깨끗하고 편안한 공간이었습니다. 위치도 좋아서 이동하기 편했어요.",
        date: "2024-03-15",
        categories: {
          cleanliness: 5.0,
          location: 5.0,
          checkIn: 4.5,
          value: 4.5,
          communication: 5.0
        }
      }
    ]
  },
  {
    id: 2,
    title: "홍대 근처 스튜디오",
    description: "홍대입구역 도보 5분 거리의 아늑한 스튜디오입니다.",
    location: "서울시 마포구",
    price: 120000,
    rating: 4.5,
    aiScore: 88,
    images: [
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9"
    ],
    amenities: ["와이파이", "주방", "세탁기", "에어컨"],
    reviews: [
      {
        id: 2,
        author: "이영희",
        rating: 4.5,
        aiScore: 87,
        content: "가격 대비 만족스러운 공간이었습니다. 홍대 근처라 교통도 편리했어요.",
        date: "2024-03-10",
        categories: {
          cleanliness: 4.5,
          location: 5.0,
          checkIn: 4.0,
          value: 4.5,
          communication: 4.5
        }
      }
    ]
  }
]; 
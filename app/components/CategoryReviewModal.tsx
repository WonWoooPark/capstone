import React from 'react';

interface Review {
  id: string;
  userName: string;
  comment: string;
  date: string;
  isVerified: boolean;
  categoryRatings: Record<string, number>;
  aiRating?: number;
}

interface Props {
  reviews: Review[];
  category: string;
  keywords: string[];
  onClose: () => void;
}

const highlightText = (text: string, keywords: string[]) => {
  let highlightedText = text;
  keywords.forEach(keyword => {
    const regex = new RegExp(keyword, 'gi');
    highlightedText = highlightedText.replace(regex, match => `<span class='bg-yellow-200'>${match}</span>`);
  });
  return highlightedText;
};

const categoryNames: Record<string, string> = {
  cleanliness: '청결도',
  accuracy: '정확도',
  checkin: '체크인',
  communication: '의사소통',
  location: '위치',
  value: '가격 대비 만족도'
};

const CategoryReviewModal: React.FC<Props> = ({ reviews, category, keywords, onClose }) => {
  const filtered = reviews.filter(r => r.categoryRatings[category] && r.categoryRatings[category] > 0);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl p-8 relative max-h-[80vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold mb-4">{categoryNames[category]} 관련 리뷰</h2>
        {filtered.length === 0 ? (
          <p className="text-gray-500">관련 리뷰가 없습니다.</p>
        ) : (
          <div className="space-y-6">
            {filtered.map(review => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex items-center mb-1">
                  <span className="font-semibold mr-2">{review.userName}</span>
                  <span className="ml-1 text-sm text-gray-800">{review.categoryRatings[category]}</span>
                  <span
                    className="ml-1 px-2 py-0.5 rounded-lg bg-blue-500 text-white flex items-center"
                    style={{ display: 'inline-flex' }}
                  >
                    {categoryNames[category]} AI {review.aiRating?.toFixed(1)}
                  </span>
                  {review.isVerified && <span className="text-blue-600 text-xs ml-2">✓ 인증</span>}
                  <span className="ml-2 text-gray-400 text-xs">{review.date}</span>
                </div>
                <div className="text-gray-700 mb-1" dangerouslySetInnerHTML={{ __html: highlightText(review.comment, keywords) }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryReviewModal; 
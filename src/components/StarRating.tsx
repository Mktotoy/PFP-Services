import { Star } from 'lucide-react';

interface StarRatingProps {
    rating: number;
    size?: number;
}

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
    return (
        <span style={{ display: 'inline-flex', gap: '2px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={size}
                    fill={i < rating ? '#fbbf24' : '#e0e0e0'}
                    color={i < rating ? '#fbbf24' : '#e0e0e0'}
                />
            ))}
        </span>
    );
}

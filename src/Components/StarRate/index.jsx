import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export const StarRate = ({ rating }) => {
    const [selectedRating, setSelectedRating] = useState(null);

    useEffect(() => {
        // Set the selected rating when the component mounts or when the rating prop changes
        setSelectedRating(rating);
    }, [rating]);

    return (
        <>
            {[...Array(5)].map((_, index) => {
                const currentRate = index + 1;
                return (
                    <label key={index}>
                        <FaStar
                            size={30}
                            color={currentRate <= selectedRating ? "orange" : "gray"}
                        />
                    </label>
                );
            })}
        </>
    );
};



import React from "react";
import starFilled from "../../../assets/img/star-filed.png";
import starEmpty from "../../../assets/img/star-empty.png";

interface LogementRatingProps {
    rating: string
}

const LogementRating: React.FC<LogementRatingProps> = ({ rating }) => (
    <div className={"logTemplate__right__note"}>
        {[...Array(5)].map((_, i) => (
            <img
                key={i}
                src={i < Number(rating) ? starFilled : starEmpty}
                alt={i < Number(rating) ? "Étoile remplie" : "Étoile vide"}
                className="logTemplate__right__star"
            />
        ))}
    </div>
)

export default LogementRating
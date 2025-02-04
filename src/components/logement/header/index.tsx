import React from "react";

interface LogementHeaderProps {
    title: string
    location: string
    tags: string[]
}

const LogementHeader: React.FC<LogementHeaderProps> = ({ title, location, tags }) => (
    <div className="mb-3">
        <h1>{title}</h1>
        <p className={"logTemplate__left__location"}>{location}</p>

        <div className="logTemplate__left__tags">
            {tags.map((tag, index) => (
                <span key={index} className="logTemplate__left__tags__badge me-2">{tag}</span>
            ))}
        </div>
    </div>
)

export default LogementHeader
import React, {useState} from "react"
import arrow from "../../assets/img/arrow.png"

interface AccordionPropos {
    title: string
    content: string | string[]
}

const Accordion: React.FC<AccordionPropos> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="accordion">
            <button className={`accordion__header ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img className={`accordion__header__arrow ${isOpen ? "open" : ""}`} src={arrow} alt="Flèche" />
            </button>
            <div className={`accordion__content ${isOpen ? "open" : ""}`}>
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    )
}

export default Accordion
import { useState } from "react"
import arrowCarousel from "../../assets/img/arrowCarousel.png"
import Loading from "../../pages/data-containers/loading"

const Carousel = ({ logement }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    if (!logement || !logement.pictures || logement.pictures.length === 0) {
        return <Loading />
    }

    const hasMultipleImages = logement.pictures.length > 1

    const prevSlide = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? logement.pictures.length - 1 : prev - 1
        )

    const nextSlide = () =>
        setCurrentIndex((next) =>
            next === logement.pictures.length - 1 ? 0 : next + 1
        )

    return (
        <>
            <div className="col">
                <div className="carousel mb-4">
                    <img
                        src={logement.pictures[currentIndex]}
                        className="logTemplate__cover img-fluid rounded"
                        alt="carousel"
                    />

                    {hasMultipleImages && (
                        <>
                            <div className={"carousel__index"}>
                                <span>{currentIndex + 1}/{logement.pictures.length}</span>
                            </div>

                            <button onClick={prevSlide} className="carousel__buttonsPrev">
                                <img src={arrowCarousel} alt="Previous" />
                            </button>

                            <button onClick={nextSlide} className="carousel__buttonsNext">
                                <img src={arrowCarousel} alt="Next" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Carousel

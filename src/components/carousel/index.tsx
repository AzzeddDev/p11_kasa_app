import {useState} from "react"
import arrowCarousel from "../../assets/img/arrowCarousel.png"
import Loading from "../../pages/data-containers/loading";


const Carousel = ({ logement }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // console.log("logement dans Carousel:", logement)
    // console.log("pictures dans Carousel:", logement.pictures)


    if (!logement || !logement.pictures || logement.pictures.length === 0) {
        return <Loading/>
    }

    const prevSlide = () =>
        setCurrentIndex((prev) =>
            (prev === 0 ? logement.pictures.length - 1 : prev - 1)
        )

    const nextSlide = () =>
        setCurrentIndex((prev) =>
            (prev === logement.pictures.length - 1 ? 0 : prev + 1)
        )

    return (
        <div className={"col"}>
            <div className={"carousel mb-4"}>
                <img
                    src={logement.pictures[currentIndex]}
                    className="logTemplate__cover img-fluid rounded"
                    alt="carousel"
                />

                <button onClick={prevSlide} className="carousel__buttonsPrev">
                    <img src={arrowCarousel} alt=""/>
                </button>

                <button onClick={nextSlide} className="carousel__buttonsNext">
                    <img src={arrowCarousel} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default Carousel
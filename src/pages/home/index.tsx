import React from "react"
import useFetchLogements from "../../data/hooks/useFetchLogements"
import Card from "../../components/card"
import {routes} from "../../router/routes"
import Loading from "../data-containers/loading"
import HomeImgHero from "../../assets/img/image-source-header-home.png"
import Header from "../../containers/header"

const Home = () => {
    {/* Hook personnalisé */}
    const { logements, loading, error } = useFetchLogements()

    return (
        <>
            <div className={"container mt-md-5"}>
                {loading && <Loading />}
                {error && <p className={"text-danger"}>{error}</p>}

                {/* Header */}
                <Header
                    bgImage={HomeImgHero}
                    title={"Chez vous, partout et ailleurs"}
                />

                {/* Loop products */}
                <div className="productLoop">
                    <div className={"row g-md-5 g-4"}>
                        {logements.map((logement, i) => (
                            <article className={"col-md-4"}>
                                <Card
                                    key={i}
                                    title={logement.title}
                                    to={routes.logement(logement.id)}
                                    backgroundUrl={logement.cover}
                                />
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
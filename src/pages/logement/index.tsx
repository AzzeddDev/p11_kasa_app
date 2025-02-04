import React from "react"
import {useParams} from "react-router-dom"
import NotFound from "../data-containers/notFound"
import useFetchSingleLogement from "../../data/hooks/useFetchSingleLogement"
import Loading from "../data-containers/loading"
import Carousel from "../../components/carousel"
import LogementHeader from "../../components/logement/header"
import LogementHostInfos from "../../components/logement/hostInfo"
import LogementRating from "../../components/logement/rating"
import LogementDetails from "../../components/logement/details"

export default function Logement () {
    const { id } = useParams<{ id: string }>()
    {/* Hook personnalisé */}
    const { logement, loading, error } = useFetchSingleLogement(id)

    if (!logement) return <NotFound/>

    return (
        <>
            <section>
                {loading && <Loading />}
                {error && <p className={"text-danger"}>{error}</p>}

                <div className={"container logTemplate"}>

                    {/*<img className="logTemplate__cover img-fluid rounded" src={logement.cover} alt={logement.title} />*/}
                    {/*{console.log("logement dans Logement:", logement)}*/}

                    <Carousel logement={logement} />

                    {/*{console.log("logement:", logement.pictures)}*/}
                    {/*{console.log("test log",logement?.pictures)}*/}


                    <div className={"row logTemplate__left"}>
                        <div className={"col-md-8"}>
                            {/* header */}
                            <LogementHeader title={logement.title} location={logement.location} tags={logement.tags}/>
                        </div>

                        <div className={"col-md-4 logTemplate__right"}>
                            {/* host info */}
                            <LogementHostInfos host={logement.host}/>

                            {/* rating */}
                            <LogementRating rating={logement.rating}/>
                        </div>

                        {/* details */}
                        <LogementDetails description={logement.description} equipements={logement.equipments} />

                    </div>
                </div>
            </section>
        </>
    )
}
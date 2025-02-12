import {useParams} from "react-router-dom"
import NotFound from "../data-containers/notFound"
import useFetchSingleLogement from "../../data/hooks/useFetchSingleLogement"
import Loading from "../data-containers/loading"
import Carousel from "../../components/carousel"
import LogementHeader from "../../components/logement/header"
import LogementHostInfos from "../../components/logement/hostInfo"
import LogementRating from "../../components/logement/rating"
import LogementDetails from "../../components/logement/details"

const Logement = () => {
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

                    <Carousel logement={logement} />

                    <div className={"row"}>
                        <div className={"col-md-8 logTemplate__left"}>
                            <LogementHeader title={logement.title} location={logement.location} tags={logement.tags}/>
                        </div>

                        <div className={"col-md-4 logTemplate__right"}>
                            <LogementHostInfos host={logement.host}/>
                            <LogementRating rating={logement.rating}/>
                        </div>

                        <LogementDetails description={logement.description} equipements={logement.equipments} />

                    </div>
                </div>
            </section>
        </>
    )
}

export default Logement
import {useParams} from "react-router-dom"
import NotFound from "../data-containers/notFound"
import useFetchSingleLogement from "../../data/hooks/useFetchSingleLogement"

export default function Logement () {
    const { id } = useParams<{ id: string }>()
    const { logement, loading, error } = useFetchSingleLogement(id)

    if (loading) return <p>Chargement...</p>
    if (error) return <p className={"text-danger"}>{error}</p>
    if (!logement) return <NotFound/>

    return (
        <>
            {/* TODO: créer un composent accordion */}
            <h1>{logement.title}</h1>
            <img src={logement.cover} alt={logement.title} className="img-fluid rounded" />
            <div>Template page de Logement</div>
        </>
    )
}
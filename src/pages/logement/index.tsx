import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import {fetchLogements} from "../../data/fetchLogements"
import NotFound from "../error/notFound";

interface LogementType {
    id: string
    title: string
    cover: string
    location: string
    description: string
    pictures: string[]
}

export default function Logement () {
    const { id } = useParams<{ id: string }>()
    const [ logement, setLogement ] = useState<LogementType | null>(null)

    useEffect(() => {
        const loadLogement = async () => {
            const logements = await fetchLogements()
            const foundLogement = logements.find((l: LogementType) => l.id === id)
            setLogement( foundLogement || null )
        }

        loadLogement()
    }, [id])

    if (!logement) {
        return (<NotFound/>)
    }

    return (
        <>
            {/* TODO: créer un composent accordion */}
            <h1>{logement.title}</h1>
            <img src={logement.cover} alt={logement.title} className="img-fluid rounded" />
            <div>Template page de Logement</div>
        </>
    )
}
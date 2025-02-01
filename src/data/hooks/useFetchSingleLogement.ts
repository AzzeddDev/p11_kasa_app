import { useState, useEffect } from "react"
import {fetchData} from "../fetchData"

interface LogementType {
    id: string
    title: string
    cover: string
    pictures: string[]
    description: string
    host: {
        name: string
        picture: string
    }
    rating: string
    location: string
    equipments: string[]
    tags: string[]
}

const useFetchSingleLogement = (id: string | undefined) => {
    const [logement, setLogement] = useState<LogementType | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!id) return

        const loadLogement = async () => {
            try {
                setLoading(true)
                setError(null)
                const logements = await fetchData()
                const foundLogement = logements.find((l: LogementType) => l.id === id)
                setLogement(foundLogement || null)
            } catch (err) {
                setError("Un erreur est survenu lors du fetch data")
            } finally {
                setLoading(false)
            }
        }

        loadLogement()
    }, [id])

    return { logement, loading, error }
}

export default useFetchSingleLogement

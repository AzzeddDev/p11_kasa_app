import { useState, useEffect } from "react"
import {fetchData} from "../fetchData"

interface LogementType {
    id: string
    title: string
    cover: string
    location: string
    description: string
    pictures: string[]
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
                setError("An data-containers occurred while fetching the logement.")
            } finally {
                setLoading(false)
            }
        }

        loadLogement()
    }, [id])

    return { logement, loading, error }
}

export default useFetchSingleLogement

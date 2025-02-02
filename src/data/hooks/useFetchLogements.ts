import { useState, useEffect } from "react"
import {fetchData} from "../fetchData"

const useFetchLogements = () => {
    const [logements, setLogements] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadLogements = async () => {
            try {
                setLoading(true)
                setError(null)
                
                const data = await fetchData()
                setLogements(data)
                setLoading(false)
            } catch (err) {
                setError("Erreur lors du fetch data")
            } finally {
                setLoading(false)
            }
        }

        loadLogements()
    }, [])

    return { logements, loading, error }
}

export default useFetchLogements

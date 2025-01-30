export const fetchData = async () => {
    try {
        const response = await fetch("/data/logements.json")
        if (!response.ok) {
            throw new Error("Erreur lors du chargement des logements")
        }
        return await response.json()
    } catch (err) {
        console.error("Erreur de chargement :", err)
        return []
    }
}
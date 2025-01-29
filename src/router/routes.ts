export const routes = {
    home: "/",
    notFound: "*",
    logement: (logement = ":logement") => `/logements/${logement}`
}
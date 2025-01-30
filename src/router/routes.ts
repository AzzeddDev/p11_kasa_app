export const routes = {
    home: "/",
    logement: (id: string = ":id") => `/logements/${id}`,
    about: "/a-propos",
    notFound: "*",
}
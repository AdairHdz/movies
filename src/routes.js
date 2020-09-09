import Home from "./views/Home"
import MovieInfo from "./views/MovieInfo"

export const routes = [
    {path: "/", component: Home},
    {path: "/movies/:id/info", component: MovieInfo}
  ]
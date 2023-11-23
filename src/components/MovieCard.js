import { IMG_CDN_URL } from "./utils/constants";

const MovieCard = ({poster_path}) => {
  return (
    <div className="w-36 md:w-48 pr-4">
        <img className="h-[200px] w-[200px]" src={IMG_CDN_URL+poster_path} alt="poster" />
    </div>
  )
}

export default MovieCard
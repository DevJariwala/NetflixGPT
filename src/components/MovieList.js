import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
            {
                movies!==null && movies.map((movie,index)=>(
                    <MovieCard key={index} poster_path={movie.poster_path}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default MovieList
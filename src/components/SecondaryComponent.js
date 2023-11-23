import {useSelector} from 'react-redux'
import MovieList from "./MovieList"

const SecondaryComponent = () => {

  const movies = useSelector((store)=>store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
    // <div>
    //   {/* {
    //     nowPlayingMovies!==null && <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
    //   } */}
      
    // </div>
  )
}

export default SecondaryComponent
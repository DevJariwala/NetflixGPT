import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/constants";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

export const useNowPlayingMovies = async () =>{
    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await  fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, [])
}
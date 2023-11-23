import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/constants";
import { addTopRatedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

export const useTopRatedMovies = async () =>{
    const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await  fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() => {
    getTopRatedMovies();
  }, [])
}
import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/constants";
import { addUpcomingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

export const useUpcomingMovies = async () =>{
    const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await  fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
    getUpcomingMovies();
  }, [])
}
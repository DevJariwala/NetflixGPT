import { useSelector } from "react-redux"
import VidoeBackground from "./VidoeBackground";
import VideoTitle from "./VideoTitle";

const MainComponent = () => {
  const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
  if(!movies) return;

  const mainMovie = movies[0];
  const {original_title,overview,id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VidoeBackground movieId={id} />
    </div>
  ) 
}

export default MainComponent
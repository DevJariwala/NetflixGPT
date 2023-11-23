const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-64 px-12 absolute ">
         <h4 className="font-mono text-3xl text-white">{title}</h4>
         <p className="w-1/2 font-serif text-white">{overview}</p>
         <div className="flex">
            <p className="bg-gray-400 w-24 p-2 h-8 mt-2 mr-2 flex justify-center items-center font-semibold rounded-[3px] cursor-pointer" > Play</p>
            <p className="bg-gray-400 w-28 p-2 h-8 mt-2 flex justify-center items-center font-semibold rounded-[3px] text-white font-thin cursor-pointer">More Info</p>
         </div>
    </div>
  )
}

export default VideoTitle
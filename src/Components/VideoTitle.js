import React from "react";

const VideoTitle = ({ info }) => {
  const { original_title, overview } = info;
  return (
    <div className="md:pt-72 md:px-12 md:w-screen absolute text-white bg-gradient-to-r from-black aspect-video opacity-80 sm:pt-32 sm:pl-10 sm:bg-opacity-60 xs:pt-[55%] xs:px-5 xs:opacity-60 ">
      <h1 className="md:text-4xl md:font-bold xs:font-bold  xs:text-lg">{original_title}</h1>
      <p className="md:py-6 md:text-l md:w-4/12 sm:w-5/12 sm:text-xs xs:text-sm xs:pt-2">{overview}</p>
      <div className="sm:pt-4 xs:pt-4">
        <button className="bg-white md:px-8 text-black font-bold md:py-2 rounded-lg hover:bg-opacity-80 sm:px-6 sm:py-1 xs:px-4 xs:py-1">
          Play
        </button>
        <button className="bg-gray-500 text-white md:px-8 md:text-l md:py-2 rounded-lg md:mx-2 hover:bg-opacity-80 sm:px-6 sm:py-1 sm:ml-2  xs:px-4 xs:py-1 xs:ml-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

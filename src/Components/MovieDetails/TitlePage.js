import React from "react";
import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";

const TitlePage = () => {
  const movieDetails = useSelector((store) => store.details.movieD);
  if (!movieDetails) return null;
  console.log(movieDetails);
  const {
    original_title,
    overview,
    release_date,
    runtime,
    tagline,
    adult,
    belongs_to_collection,
    genres,
    budget,
    popularity,
    status,
  } = movieDetails;

  const cost = budget.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="text-white w-[70%] mt-[3%] bg-neutral-900 h-screen flex xs:w-screen xs:px-3 xs:flex-col">
      <div className="w-[70%] my-2 xs:w-screen xs:px-2">
        <div>
          <button className="flex text-black bg-white rounded-md py-2 px-2 ">
            <FaPlay /> <span className="ml-2 -mt-[0.20rem]"> Play</span>
          </button>
        </div>
        <h1 className="text-3xl font-bold my-2">{original_title}</h1>
        <p className=" my-2">{release_date}</p>
        <p className=" my-2">{runtime} Min</p>
        {/* <p className=" my-2">{adult ? " 18+" : "U/A 13+"}</p> */}
        <p>{overview}</p>
      </div>
      <div className="w-[30%] mt-12 ml-5 xs:w-screen xs:px-2">
        Genres : {genres[0]?.name}, {genres[1]?.name}, {genres[2]?.name},{" "}
        <h2>Tagline : {tagline}</h2>
        <p>{cost ? "Budget : " + cost : ""}</p>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default TitlePage;

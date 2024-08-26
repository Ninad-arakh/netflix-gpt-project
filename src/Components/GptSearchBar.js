import React, { useRef } from "react";
import { client } from "../Utils/Open_Ai";

const GptSearchBar = () => {
  const searchText = useRef();

  const handleSearch = async () => {
    const searchQuery =
      "Act as a movie reccomendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". And only give me names of 5-10 Movies, comma saperated like the example given ahead. Example result: 3idiots, Golmaal, Don, Stree, Dream Girl, Hera Feri ";

    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(gptResults);
  };
  return (
    <div className="pt-[10%] flex justify-center  ">
      <form
        className=" bg-black h-20 w-6/12 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="Search"
          className="px-4 py-1 m-4 rounded-md col-span-9"
        />
        <button
          type="submit"
          className=" bg-red-500 rounded-lg px-2 py-1 col-span-3 m-4 text-white hover:bg-red-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

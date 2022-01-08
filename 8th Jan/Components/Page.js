import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Search from "./Search";

const Page = () => {
    const [movies, setMovies] = useState([]);


    const search = searchValue => {
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                } else {
                    console.log("error")
                }
            });
    };


    return (
        <div >
            <Search value={search} />
            {movies.map((movie, index) => (
                <Movie key={index} movie={movie} />
            ))}
        </div>
    );
};


export default Page;
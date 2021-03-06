import React, { useState, useEffect } from "react";
import axios from './axios'

const base_url = "https://image.tmdb.org/t/p/original";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  console.log(title);
  console.log(fetchUrl);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return(
      <div className="Row">
        <h2>{title}</h2>
        {movies.map( (movie, index) => (
          <>
            <p>{movie.name}</p>
            <img key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} width={100} />
          </>
         ))}
      </div> 
  );
};
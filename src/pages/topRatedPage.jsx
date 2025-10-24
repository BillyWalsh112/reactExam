import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";


const TopRatedPage = (props) => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const  movies = data.results;



  localStorage.setItem("top rated", JSON.stringify(getTopRatedMovies));


  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
    />
  );
};

export default TopRatedPage;
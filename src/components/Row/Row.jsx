import React from 'react';
import { useState,useEffect } from 'react';
import instance from '../../Helpers/axios';

import './Row.css';
export const Row = ({title,fetchurl,islarge=false}) => {
  
  const [movies, setmovies] = useState([]);
  const baseUrl="https://image.tmdb.org/t/p/original/";
  useEffect(()=>{
    const fetchData=async()=>{
    const request=await instance.get(fetchurl);
    setmovies(request.data.results)
    return request;
    };
    fetchData();
  },[fetchurl])
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>  
      <div className="row__posters">
        {
          movies.map((movie)=>
         ( (islarge && movie.poster_path)||(!islarge && movie.backdrop_path)) &&(
            <img 
            src={`${baseUrl}${islarge ? movie.poster_path : movie.backdrop_path}`} 
            // src={`${baseUrl}${ movie.poster_path}`} 

            alt=""  className={`row__poster ${islarge && 'row__posterlarge'}`}
            key={movie.id}/>
          )
          )
        }
      </div>

    </div>
  )
}

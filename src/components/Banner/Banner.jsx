import React from 'react'
import { useEffect,useState } from 'react';

import instance from '../../Helpers/axios';
import requests from '../../Helpers/request';

import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
    const fetchdata=async()=>{
        const request=await instance.get(requests.fetchNetFlixOriginal);
        setMovie(request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
        ]);
        return request;
    };
    fetchdata();    
    console.log(movie);
    }, []);

    function truncate(string,n){
        return string?.length>n ? string.substr(0,n-1)+'...':string;
    }
  return (
    <header className='banner'
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
    backgroundSize:'cover',
     backgroundPosition:'center center',
    }}>
            <div className="banner__contents">
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__des">
            {truncate(movie?.overview,150)}
                </h1>
            {/* <div className="banner--fade"/> */}
            </div>
    </header>
  )
}

export default Banner
import React from 'react'
import Banner from '../../components/Banner/Banner'
import { Nav } from '../../components/Nav/Nav'
import { Row } from '../../components/Row/Row'
import request from '../../Helpers/request'

export const Home = () => {
  return (
    <div className='home'>
        <Nav />
        <Banner/>
    <Row title='NetflixOriginals' fetchurl={request.fetchNetFlixOriginal} islarge/>
    <Row title='Trending Now' fetchurl={request.fetchTrending}/>
    <Row title='TopRated' fetchurl={request.fetchTopRated}/>
    <Row title='Action Movies' fetchurl={request.fetchActionMovies}/>
    <Row title='Comedy Movies' fetchurl={request.fetchComedyMovies}/>
    <Row title='Horror Movies' fetchurl={request.fetchHorrorMovies}/>
    <Row title='Romance Movies' fetchurl={request.fetchRomanceMovies}/>
    <Row title='Documentaries' fetchurl={request.fetchDocumentries}/>
    
   

    </div>
  )
}

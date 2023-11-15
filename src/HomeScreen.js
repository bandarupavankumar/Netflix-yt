import React, { useEffect, useState } from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import requests from './Requests'
import Row from './Row'
import FlipMove from 'react-flip-move';
import Footer from './Footer'
function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav onclick = 'click'/>
        {/* Banner */}
        <Banner/>
        <FlipMove>
        <Row
            title= 'NETFLIX ORIGINAL'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
        />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchUrl={requests.fetchHorroMovies}/>
        <Row title='Romance Movies ' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
        </FlipMove>
        <Footer/>
       

    </div>
  )
}

export default HomeScreen
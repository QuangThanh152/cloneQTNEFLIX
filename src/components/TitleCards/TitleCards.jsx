import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
// import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]); 
  const cardsRef = useRef();
//  Get API key
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmVjN2EyZWFkMmJhYThlN2U0NzliZWVlZmM5ZjA5YiIsIm5iZiI6MTcyNDkwMjY3Mi4yNDA3MTQsInN1YiI6IjY2YTdiMmFlNWI3ZTZlMWQ2ODExZmUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWltP6bb2WvpCtKMU2_-Aa1_gscWp4xyNcswgxt1Nhc'
    }
  };
  

  const handleWheel = (event) => {
    event.preventDefault;
    cardsRef.current.scroollLeft += event.deltaY;
  }
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category :"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[]);

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Web"}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=""/>
            <p>{card.original_title}</p>
          </Link> 

        })}
      </div>
    </div>
  )
}

export default TitleCards
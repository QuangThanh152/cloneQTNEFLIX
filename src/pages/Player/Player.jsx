import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Player.css";
import back_arrow_icon from '../../assets/back_arrow_icon.png';

const Player = () => {  

  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmVjN2EyZWFkMmJhYThlN2U0NzliZWVlZmM5ZjA5YiIsIm5iZiI6MTcyNDkwMjY3Mi4yNDA3MTQsInN1YiI6IjY2YTdiMmFlNWI3ZTZlMWQ2ODExZmUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWltP6bb2WvpCtKMU2_-Aa1_gscWp4xyNcswgxt1Nhc'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, [id]);  // Thêm 'id' vào mảng dependencies của useEffect

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='' onClick={() => navigate(-2)} />
      <iframe
        width='80%'
        height='80%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className='player-info'>
        <p>{new Date(apiData.published_at).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.')}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;  

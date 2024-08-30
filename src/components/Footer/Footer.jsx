import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={facebook_icon} alt='' />
        <img src={youtube_icon} alt='' />
        <img src={twitter_icon} alt='' />
        <img src={instagram_icon} alt='' />
      </div>
      <ul>
        <li>Phim Mới</li>
        <li>Phim Chiếu Rạp</li>
        <li>Phim Hot</li>
        <li>Phim Đang Hot</li>
        <li>Phim Sắp Tới</li>
        <li>Phổ Biến</li>
        <li>Liên Hệ</li>
      </ul>
      <p className='copyright-text'>© 2003-2024 QtFlix, INC.</p>
    </div>
  )
}

export default Footer
import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from '../../assets/lologo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef = useRef();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('nav-dark');
            }else {
                navRef.current.classList.remove('nav-dark');
            }
        })
    }, [])
  return (
    <div ref={navRef} className='navbar'>
        <div className='navbar-left'>
            <img src={logo} alt="" />
            <ul>
                <li>TRANG CHỦ</li>
                <li className='dropdownList'>
                    THỂ LOẠI
                    <ul className='dropdownList-menu'>
                        <li>Hành Động</li>
                        <li>Tài Liệu</li>
                        <li>Kinh Dị</li>
                        <li>Phiêu Lưu</li>
                        <li>Chiến Tranh</li>
                    </ul>
                </li>
                <li>PHIM BỘ</li>
                <li>PHIM MỚI</li>
                <li>PHIM LẺ</li>
                <li className='dropdownList'>
                    NĂM SẢN SUẤT
                    <ul className='dropdownList-menu'>
                        <li>2010</li>
                        <li>2011</li>
                        <li>2012</li>
                        <li>2013</li>
                        <li>2014</li>
                        <li>2015</li>
                        <li>2016</li>
                        <li>2017</li>
                        <li>2018</li>
                        <li>2019</li>
                        <li>2020</li>
                        <li>2021</li>
                        <li>2022</li>
                        <li>2023</li>
                        <li>2024</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className='navbar-right'>
            <img src={search_icon} alt="" className='icons' />
            <p>You</p>
            <img src={bell_icon} alt="" className='icons' />
            <div className='navbar-profile'>
                <img src={profile_img} alt="" className='profile' />
                <img src={caret_icon} alt="" />
                <div className='dropdown'>
                    <p onClick={() => { logout() }}>Thoát Khỏi QtFlix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
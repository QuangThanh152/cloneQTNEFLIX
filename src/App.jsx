import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [hasShownToast, setHasShownToast] = useState(false); // Trạng thái để theo dõi toast đã được hiển thị chưa
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!hasShownToast) {
          // toast.success("Đăng Nhập Thành Công");
          setHasShownToast(true); // Đánh dấu rằng toast đã được hiển thị
        }
        navigate('/');
      } else {
        if (!hasShownToast) {
          // toast.error("Bạn đã thoát khỏi trang chủ");
          setHasShownToast(true); // Đánh dấu rằng toast đã được hiển thị
        }
        navigate('/login');
      }
    });
  }, [navigate, hasShownToast]);

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;

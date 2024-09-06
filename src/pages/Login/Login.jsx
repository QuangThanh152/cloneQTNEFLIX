import React, { useState } from 'react';
import './Login.css'
import logo from '../../assets/lologo.png';
import { useNavigate } from 'react-router-dom'; 
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const navigate = useNavigate(); 

  const [signState, setSignState] = useState("Sign In");
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState==="Sign In") {
      await login(email, password);
    }
    else {
      const success =  await signup(name, email, password);
      if (success) {
        navigate('/login');
      }
    }
    setLoading(false);
  }
  return (
    loading ? <div className='login-spinner'> <img src={netflix_spinner} alt='' /> </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt='' />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up" ? 
          <input value={name} onChange={(e) => {(setName(e.target.value))}} type='text' placeholder='Nhap Ten' />:<></>}
          <input value={email} onChange={(e) => {(setEmail(e.target.value))}} type='email' placeholder='Email' />
          <input value={password} onChange={(e) => {(setPassword(e.target.value))}} type='password' placeholder='Password' />

          <button onClick={user_auth} type='submit'>{signState}</button>

          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' />
              <label htmlFor=''>Remember Me</label>
            </div>
            <a className='remember_a' href='' >Need Help?</a>
          </div>
        </form>
        <div className='form-switch'>
          {signState==="Sign In" ?  <p> Chưa có tài khoản ? <span onClick={() => {setSignState("Sign Up")}}>Đăng Ký Ngay</span> </p> :  <p> Bạn đã có tài khoản? <span onClick={() => {setSignState("Sign In")}}>Đăng Nhập</span> </p>}
         
        </div>
      </div>
    </div>
  )
}

export default Login
import './LoginScreen.scss';
import userStore from '../../../stores/loginStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const { user } = userStore();

  return (
    <div className='login-page wrap'>
      <p className='login-page__headline'>Skip the email hassle, join Webdock's swift forum!</p>
      <p className='login-page__subline'>Where communication meets simplicity in the cloud</p>

      {/* <div className='login-page__container'>
                <button onClick={loginAsUser} className='login-page__container__button'>Login as User</button>
                <button onClick={loginAsAdmin} className='login-page__container__button'>Login as Admin</button>
                <button onClick={loginAsSuperAdmin} className='login-page__container__button'>Login as SuperAdmin</button>
            </div> */}
    </div>
  );
}

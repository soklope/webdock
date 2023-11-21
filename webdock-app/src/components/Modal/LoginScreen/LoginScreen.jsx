import './LoginScreen.scss';
import userStore from '../../../stores/loginStore';

export default function LoginScreen() {

  const { loginAsUser } = userStore()

  const handleLoginClick = () => {
    loginAsUser();

    const loggedInUser = localStorage.getItem('user');

    if (loggedInUser) {
      window.location.href = "/"
    }
  };

  return (
    <div className='login-page wrap'>
      <div className='login-page__container'>
        <span className='login-page__logo'></span>
        <input className='login-page__input' type="text" placeholder='example@gmail.com'/>
        <input className='login-page__input' type="password" placeholder='password'/>
        <div className='login-page__checkbox'>
          <input type="checkbox" />
          <p>Stay signed in for two weeks</p>
        </div>
        <button onClick={handleLoginClick} className='login-page__login-button'>LOG IN</button>
        <hr />
        <button className='login-page__google-button'>Sign in with Google</button>
        <button className='login-page__github-button'>Sign in with Github</button>
        <p className='login-page__link-text'>Forgot your password?</p>
        <p>Don't have an account yet?</p>
        <p className='login-page__link-text'>sign up here!</p>
      </div>

      <div className='login-page__splash-art'>
        <div className='login-page__splash-art__blur'/>
        <p className='login-page__splash-art__headline'>Skip the email hassle <br></br> join Webdock's swift forum!</p>
        <p className='login-page__splash-art__subline'>Where communication meets simplicity in the cloud</p>
        {/* <span className='login-page__logo'></span> */}
      </div>
      {/* <div className='login-page__container'>
          <button onClick={loginAsUser} className='login-page__container__button'>Login as User</button>
          <button onClick={loginAsAdmin} className='login-page__container__button'>Login as Admin</button>
          <button onClick={loginAsSuperAdmin} className='login-page__container__button'>Login as SuperAdmin</button>
      </div> */}
    </div>
  );
}

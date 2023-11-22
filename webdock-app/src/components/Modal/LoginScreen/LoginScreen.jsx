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
        <button onClick={handleLoginClick} className='login-page__login-button'>LOG IN</button>
        <button className='login-page__google-button'>Sign in with Google</button>
        <button className='login-page__github-button'>Sign in with Github</button>
        <p>Don't have an account yet?</p>
        <p className='login-page__link-text'>sign up here!</p>
      </div>

      <div className='login-page__splash-art'>
        <div className='login-page__splash-art__blur'/>
        <p className='login-page__splash-art__headline'>Skip the email hassle <br></br> join Webdock's swift forum!</p>
        <p className='login-page__splash-art__subline'>Where communication meets simplicity in the cloud</p>
      </div>
    </div>
  );
}

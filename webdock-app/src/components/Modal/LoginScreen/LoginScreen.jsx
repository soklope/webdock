import './LoginScreen.scss';
// import userStore from '../../../stores/loginStore';
import { redirectToWebdock } from '../../../services/ssoService';

export default function LoginScreen() {

  // const { loginAsUser, loginAsAdmin, loginWithSso } = userStore()
  const alvi = {
    'avatarURL': "",
    'email': "ahmo38299@edu.ucl.dk",
    'id': 22654,
    'name': "Alvi Møller"
  }

  const handleLogin = async () => {
    console.log(alvi);
    const response = await fetch('http://localhost:8080/api/v1/handlelogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(alvi)
    })
    console.log(response);

    const result = response.json();
    console.log(result)
  }

  return (
    <div className='login-page wrap'>
      <div className='login-page__container'>
        <span className='login-page__logo'></span>
        <button onClick={redirectToWebdock} className='login-page__google-button'>Sign in with Webdock</button>
        <p>Don't have an account yet?</p>
        <p className='login-page__link-text'>sign up here!</p>
        <button onClick={handleLogin}> Hej </button>
      </div>

      <div className='login-page__splash-art'>
        <div className='login-page__splash-art__blur' />
        <p className='login-page__splash-art__headline'>Skip the email hassle <br></br> join Webdock's swift forum!</p>
        <p className='login-page__splash-art__subline'>Where communication meets simplicity in the cloud</p>


      </div>
    </div>
  );
}


// const handleLoginClickUser = () => {
//   loginAsUser();

//   const loggedInUser = localStorage.getItem('user');

//   if (loggedInUser) {
//     window.location.href = "/"
//   }
// };

// const handleLoginClickAdmin = () => {
//   loginAsAdmin();

//   const loggedInUser = localStorage.getItem('user');

//   if (loggedInUser) {
//     window.location.href = "/"
//   }
// };


{/* <button onClick={handleLoginClickUser} className='login-page__login-button'>LOG IN - User</button>
        <button onClick={handleLoginClickAdmin} className='login-page__login-button'>LOG IN - Admin</button> */}
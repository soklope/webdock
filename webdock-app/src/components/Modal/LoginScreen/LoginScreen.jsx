import './LoginScreen.scss'
import userStore from '../../../stores/loginStore'

export default function LoginScreen() {

    const {loginAsUser, loginAsAdmin, loginAsSuperAdmin} = userStore()

    return (
        <div className='login-page'>
            <div className='login-page__container'>
                <button onClick={loginAsUser} className='login-page__container__button'>Login as User</button>
                <button onClick={loginAsAdmin} className='login-page__container__button'>Login as Admin</button>
                <button onClick={loginAsSuperAdmin} className='login-page__container__button'>Login as SuperAdmin</button>
            </div>
        </div>
    )
}
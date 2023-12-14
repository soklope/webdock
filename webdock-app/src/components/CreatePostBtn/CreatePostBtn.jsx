import './CreatePostBtn.scss'
import useModalStore from '../../stores/modalStore';

export default function CreatePostBtn() {
  const user = localStorage.getItem('user');
  const { toggleModal } = useModalStore();
  const userIsNotLoggedIn = () => {
    alert('Log in to create a post')
  }

  return (
    <button className="create-post-btn" onClick={user ? toggleModal : userIsNotLoggedIn}>
      <span className='create-post-btn__icon' />
      <p>CREATE POST</p>
    </button>
  );
}

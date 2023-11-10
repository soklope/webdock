import './CreatePostBtn.scss'
import useModalStore from '../../stores/modalStore';

export default function CreatePostBtn() {

  const { toggleModal } = useModalStore();

  return (
    <button className="create-post-btn" onClick={toggleModal}>
      <span className='create-post-btn__icon'>
        {/* You can add an icon here */}
      </span>
      <p>CREATE POST</p>
    </button>
  );
}

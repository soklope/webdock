import ModalBackground from "../ModalBackground";
import SelectCategory from "../SelectCategory/SelectCategory";
import './CreatePostModal.scss'

export default function CreatePostModal() {
    return(
        <>
            <ModalBackground />
        <div className="container">
            <div className="create-post-modal-container">
                <div className="category">
                    <p className="titles">Category</p>
                     <SelectCategory />
                </div>
                <div className="titel-input">
                    <p className="titles">Title</p>
                    <input name="Titel" placeholder="Short, discriptive title" />
                </div>
            </div>
        </div>
        </>
    )
}
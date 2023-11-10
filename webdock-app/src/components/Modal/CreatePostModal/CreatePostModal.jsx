import ModalBackground from "../ModalBackground";
import SelectCategory from "../SelectCategory/SelectCategory";
import './CreatePostModal.scss'
import '../../CreatePostBtn/CreatePostBtn'
import CreatePostBtn from "../../CreatePostBtn/CreatePostBtn";

export default function CreatePostModal() {
    return(
        <>
            <ModalBackground />
        <div className="container">
            <div className="create-post-modal-container">
                {/* <div className="category">
                    <p className="titles">Category</p>
                        <SelectCategory />
                </div> */}

                <form>
                    <label>Category</label>
                    <div className="category">
                    <SelectCategory />
                    </div>
                    <label>Titel</label><br />
                    <input 
                    type="text" 
                    placeholder="Short, discriptive title"
                    />
                    <label>Details</label><br />
                    <textarea
                        placeholder="Any additional detail...."
                    ></textarea> 
                    <button><img src="../../../content/gfx/Icons/files.svg" alt="Clip icon" /></button>
                    < CreatePostBtn />
                </form>
                
            </div>
        </div>
        </>
    )
}
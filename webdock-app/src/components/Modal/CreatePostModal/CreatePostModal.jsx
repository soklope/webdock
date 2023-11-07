import CategoryFilter from "../../SortFunctionAndFilterContainer/CategoryFilter/CategoryFilter";
import ModalBackground from "../ModalBackground";
import SelectCategory from "../SelectCategory/SelectCategory";
import './CreatePostModal.scss'

export default function CreatePostModal() {
    return(
        <>
            <ModalBackground />
        <div className="container">
            <div className="create-post-modal-container">
            <p className="titles">Category</p>
            <SelectCategory />
            </div>
        </div>
        </>
    )
}
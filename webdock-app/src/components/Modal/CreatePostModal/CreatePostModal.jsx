import ModalBackground from "../ModalBackground";
import SelectCategory from "../SelectCategory/SelectCategory";
import './CreatePostModal.scss'
import '../../CreatePostBtn/CreatePostBtn'
import CreatePostBtn from "../../CreatePostBtn/CreatePostBtn";
import useModalStore from "../../../stores/modalStore";

export default function CreatePostModal() {

    const { modalIsOpen, toggleModal } = useModalStore();

    
    return  (
        modalIsOpen ? 
        
        <>
            <div className="container">
                <div className="create-post-modal-container">
                    <div className="create-post-modal-container__close" onClick={toggleModal}>
                        <span className="create-post-modal-container__close__icon"></span>
                    </div>

                    <div className="create-post-modal-container__flex-parent">
                        <label className="create-post-modal-container__title">Category</label>
                        <div className="category">
                            <SelectCategory />
                        </div>

                        <label className="create-post-modal-container__title">Titel</label>
                        <input
                            className="create-post-modal-container__title__input" 
                            type="text" 
                            placeholder="Short, discriptive title"
                            />
                        
                        <label className="create-post-modal-container__title">Details</label>
                        <textarea
                            className="create-post-modal-container__desc"
                            placeholder="Any additional detail...."
                            ></textarea>

                        <div className="create-post-modal-container__flex">
                            <div className="create-post-modal-container__upload-flex">
                                 <label className="create-post-modal-container__title">Upload</label>
                                 <button className="create-post-modal-container__upload-btn">
                                     <span className="create-post-modal-container__upload-icon"></span>
                                 </button>
                            </div>
                            <CreatePostBtn />
                        </div>
                    </div>
                </div>
            </div>
            <div className="create-post-modal-container__modal-background">
            <ModalBackground />
            </div>
        </>

        :

        <></>
    )
}

// add claseName on every element (also label, input ect.)
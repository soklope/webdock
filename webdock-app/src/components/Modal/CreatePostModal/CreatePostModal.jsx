import ModalBackground from "../ModalBackground";
import SelectCategory from "../SelectCategory/SelectCategory";
import './CreatePostModal.scss'
import '../../CreatePostBtn/CreatePostBtn'
import CreatePostBtn from "../../CreatePostBtn/CreatePostBtn";
import useModalStore from "../../../stores/modalStore";

import CloseIcon from '../../../content/gfx/Icons/close-icon.svg'

import React, { useState, useRef } from 'react';

export default function CreatePostModal() {

    const { modalIsOpen, toggleModal } = useModalStore();

    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileUploadRef = useRef();
    
    const handleFileSelect = (event) => {
    // Create a Set from existing file names for duplicate checking
    const existingFileNames = new Set(selectedFiles.map(file => file.name));
    // Filter out the files that are already selected
    const newFiles = Array.from(event.target.files).filter(
     file => !existingFileNames.has(file.name));
    // Append the new files to the current files
    setSelectedFiles([...selectedFiles, ...newFiles]);
    };

    const removeFile = (fileName) => {
    setSelectedFiles(selectedFiles.filter(file => file.name !== fileName));
    };

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
                            <input
                                type="file"
                                ref={fileUploadRef}
                                id="fileUpload"
                                style={{ display: 'none' }}
                                onChange={handleFileSelect}
                                multiple
                            />
                                 <label className="create-post-modal-container__title">Upload</label>
                                 <button
                                    className="create-post-modal-container__upload-btn"
                                    onClick={() => fileUploadRef.current.click()}
                                    >
                                    <span className="create-post-modal-container__upload-icon"></span>
                                </button>

                                    {selectedFiles.map(file => (
                                        <div key={file.name} className="file-display">
                                        {file.name}
                                        <img src={CloseIcon} alt="close-icon" onClick={() => removeFile(file.name)} />
                                    </div>
                                    ))}

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
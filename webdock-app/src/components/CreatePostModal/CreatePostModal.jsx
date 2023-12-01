import { React, useRef, useState } from "react";
import useModalStore from "../../stores/modalStore";

import SelectCategory from "../Modal/SelectCategory/SelectCategory";

import "./CreatePostModal.scss";

import CloseIcon from "../../content/gfx/Icons/close-icon.svg";

export default function CreatePostModal() {
    const categoryArray = [
      {
        id: 1,
        category: "Dashboard Features",
      },
      {
        id: 2,
        category: "Documentation",
      },
      {
        id: 3,
        category: "Billing features",
      },
      {
        id: 4,
        category: "Networking",
      },
      {
        id: 5,
        category: "Hardware and Products",
      },
      {
        id: 6,
        category: "Perfect Server Stacks",
      },
      {
        id: 7,
        category: "Mobile App",
      },
      {
        id: 8,
        category: "Webdock API",
      },
      {
        id: 9,
        category: "Competition",
      },
      {
        id: 10,
        category: "Other",
      },
    ];
    
    const { modalIsOpen, toggleModal } = useModalStore();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileUploadRef = useRef();

  const [postData, setPostData] = useState({
    category: "kat1",
    title: "title1",
    details: "detail",
    attachments: [],
  });

  const handleCloseModal = () => {
    setSelectedFiles([]);
    setPostData((prevData) => ({
        ...prevData,
        attachments: [],
      }));
    toggleModal();
  };
  
  const handleFileSelect = (event) => {
    const existingFileNames = new Set(
      postData.attachments.map((file) => file.name)
    );
    const newFiles = Array.from(event.target.files).filter(
      (file) => !existingFileNames.has(file.name)
    );

    setPostData((prevData) => ({
      ...prevData,
      attachments: [...prevData.attachments, ...newFiles],
    }));
  };

  const removeFile = (fileName) => {
    setSelectedFiles(selectedFiles.filter((file) => file.name !== fileName));
  };

  return (
    <>
      {modalIsOpen ? (
        <div className="modal">
          <section className="modal__bg">
            <div className="modal__container">
              <div className="modal__close">
                <span
                  className="modal__close-icon"
                  onClick={handleCloseModal}
                ></span>
              </div>

              <div>
                <h4 className="modal__title">Category</h4>
                <SelectCategory
                  categoryArray={categoryArray}
                  onCategoryChange={(category) =>
                    setPostData((prevData) => ({
                      ...prevData,
                      category: category,
                    }))
                  }
                />
              </div>

              <div>
                <h4 className="modal__title">Title</h4>
                <input
                  className="modal__input"
                  type="text"
                  placeholder="Short, descriptive title"
                  onKeyUp={(event) =>
                    setPostData((prevData) => ({
                      ...prevData,
                      title: event.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <h4 className="modal__title">Details</h4>
                <textarea
                  className="modal__desc"
                  type="text"
                  placeholder="Short, descriptive title"
                  onKeyUp={(event) =>
                    setPostData((prevData) => ({
                      ...prevData,
                      details: event.target.value,
                    }))
                  }
                />
              </div>

              <div className="modal__upload-flex">
                <input
                  type="file"
                  ref={fileUploadRef}
                  id="fileUpload"
                  onChange={handleFileSelect}
                  multiple
                />
                <h4 className="modal__title">Upload</h4>
                <button
                  className="modal__upload-btn"
                  onClick={() => fileUploadRef.current.click()}
                >
                  <span className="modal__upload-icon"></span>
                </button>

                {postData.attachments.map((file) => (
                  <div key={file.name} className="file-display">
                    {file.name}
                    <img
                      src={CloseIcon}
                      alt="close-icon"
                      onClick={() => removeFile(file.name)}
                    />
                  </div>
                ))}
              </div>

              <div>
                {/* {postData.category}
                <br />
                {postData.title}
                <br />
                {postData.details}
                <br />
                {postData.attachments.map((file) => (
                  <div key={file.name}>{file.name}</div>
                ))} */}

                <button onClick={() => console.log(postData)}>
                    submit
                </button>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
}

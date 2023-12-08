import { React, useRef, useState } from "react";
import useModalStore from "../../stores/modalStore";

import SelectCategory from "../Modal/SelectCategory/SelectCategory";

import CloseIcon from "../../content/gfx/Icons/close-icon.svg";

import "./CreatePostModal.scss";

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
    // category_id: 1, is now handled in backend (postController)
    title: "title1",
    content: "detail",
    image: [],
    user_id: null, 
  });

  const handleCloseModal = () => {
    setSelectedFiles([]);
    setPostData((prevData) => ({
        ...prevData,
        image: [],
      }));
    toggleModal();
  };
  
  // const handleFileSelect = (event) => {
  //   const existingFileNames = new Set(
  //     postData.image.map((file) => file.name)
  //   );
  //   const newFiles = Array.from(event.target.files).filter(
  //     (file) => !existingFileNames.has(file.name)
  //   );

  //   setPostData((prevData) => ({
  //     ...prevData,
  //     image: [...prevData.image, ...newFiles],
  //   }));
  // };

  const handleFileSelect = (event) => {
    const files = event.target.files;

    setPostData((prevData) => ({
      ...prevData,
      image: [...prevData.image, ...files],
    }));
  };

  const removeFile = (fileName) => {
    setSelectedFiles(selectedFiles.filter((file) => file.name !== fileName));
  };

  const handleSubmit = async () => {
    try {

    //   // get userid from localstorage
      const dataFromLS = localStorage.getItem('user');

    if (dataFromLS) {
      const user = JSON.parse(dataFromLS);

      // Update the user_id in the state
      setPostData((prevData) => ({
        ...prevData,
        user_id: user.id,
      }))
    };

      // get inputed data from modal
      const formData = new FormData();
      
      // handling files broke the old structure, this way we can add files correctly with no errors
      formData.append('category_id', postData.category_id);
      formData.append('title', postData.title);
      formData.append('content', postData.content);
      formData.append('user_id', postData.user_id);
  
      // Append each file to the FormData
      postData.image.forEach((file, index) => {
        formData.append('file', file);
      });
  
      const response = await fetch('http://localhost:8080/api/v1/createpost', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Response:', result);
        alert('success', result);

        const newPostId = result.data.id;
        // redirect til ny post
        window.location.href = `/posts/${newPostId}`;
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

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
                      category: category.id,
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
                <h4 className="modal__title">content</h4>
                <textarea
                  className="modal__desc"
                  type="text"
                  placeholder="Short, descriptive title"
                  onKeyUp={(event) =>
                    setPostData((prevData) => ({
                      ...prevData,
                      content: event.target.value,
                    }))
                  }
                />
              </div>

              <div className="modal__upload-flex">
                <input
                  type="file"
                  name="file"
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

                {postData.image.map((file, index) => (
                  <div key={index} className="file-display">
                    {file.name}
                    <img
                      src={CloseIcon}
                      alt="close-icon"
                      onClick={() => removeFile(index)}
                    />
                  </div>
                ))}
              </div>
              <div>
                <button onClick={handleSubmit}>
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
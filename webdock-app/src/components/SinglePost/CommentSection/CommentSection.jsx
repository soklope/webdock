import { useState, useEffect } from "react";
import "./CommentSection.scss";
import SingleComment from "./Comment/SingleComment.jsx";

export default function CommentSection({ comments }) {
const [commentData, setCommentData] = useState({
    content: "detail",
    user_id: 0,
  });


  useEffect(() => {
    const dataFromLS = localStorage.getItem("user");

    if (dataFromLS) {
      const user = JSON.parse(dataFromLS);
      setCommentData((prevData) => ({
        ...prevData,
        user_id: parseInt(user.id, 10),
      }));
    }
  }, []);


const handleSubmit = async () => {
    try {
	const response = await fetch("http://localhost:8080/api/v1/createcomment", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			content: commentData.content,
			user_id: commentData.user_id,
		}),
	});

      if (response.ok) {
        const result = await response.json();
        console.log("Response:", result);

			//needs to post the new comment somehow
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


	return (
		<div className="comment-section-container">
			<div className="comment-post-container">
				
				<textarea 
					className="comment-post"
					type="text"
					placeholder="Leave a comment"
					onKeyUp={(event) =>
                    setCommentData((prevData) => ({
                      ...prevData,
                      content: event.target.value,
                    }))
                  }
				></textarea>

				<button 
				className="submit-comment"
				onClick={handleSubmit}>
					SUBMIT
				</button>
			</div>


				{/* <div className="log-in-to-comment">
					<p>Log in to leave a comment</p>
				</div> */}


			{comments.map((comment) => (
				<SingleComment key={comment.id} {...comment} />
			))}
		</div>
	);
}

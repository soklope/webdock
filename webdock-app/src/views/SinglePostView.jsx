import { React, useEffect, useState } from "react";

import './view-styles/SinglePostView.scss'

import SinglePostHeading from '../components/SinglePost/SinglePostHeading/SinglePostHeading'
import SinglePostContent from "../components/SinglePost/SinglePostContent/SinglePostContent";

export default function SinglePostView () {

    const [post, setPost] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const fetchDummyData = async () => {
			fetch("https://jsonplaceholder.org/posts/1") //id need to be dynamic
				.then((response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.json();
				})
				.then((post) => {
					setPost(post);
          console.log(post); // remove in prod
				})
				.catch((error) => {
					console.error(
						"There was a problem with the fetch operation:",
						error
					);
				});
		};

		fetchDummyData();
	}, []);

  return (
    <>
    <div>
        <SinglePostHeading
            postData={post}
        />
    </div>

    <div>
		<SinglePostContent 
			postData={post}
		/>
    </div>

	<div className="comment-missing-login">
		{!loggedIn &&
		 <p> Login to leave a comment 
			 <a href="#"> login</a>
			 </p>
		}
	</div>

    <div >
        Comment field and sorting here (kun på desktop)
    </div>

    <div>
        comments and replies here
    </div>

    </>
  )
}

import { React, useEffect, useState } from "react";

import SinglePostHeading from '../components/SinglePost/SinglePostHeading/SinglePostHeading'

export default function SinglePostView () {

    const [post, setPost] = useState({});

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
        main content here
    </div>

    <div>
        Comment field and sorting here
    </div>

    <div>
        comments and replies here
    </div>

    </>
  )
}

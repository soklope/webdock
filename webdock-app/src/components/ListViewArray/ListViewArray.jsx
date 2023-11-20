import { useState, useEffect } from "react";
import { postArrayDb } from "../../dummyDb";
import ListViewPostItem from "../ListViewPostItem/ListViewPostItem"
import usePostArrayStore from "../../stores/postArrayStore";

export default function ListViewArray() {

    const { allPosts } = usePostArrayStore()

    function getColorTagFromStatus(status) {
        switch (status) {
            case 'My Post':
                return 'tag-my-post-color';
            case 'Review':
                return 'tag-review-color';
            case 'Planned':
                return 'tag-planned-color';
            case 'In Progress':
                return 'tag-in-progress-color';
            case 'Complete':
                return 'tag-complete-color';
            default:
                return '';
        }
    }

    const [postsWithFilter, setPostsWithFilter] = useState([]);

    useEffect(() => {
        setPostsWithFilter(postArrayDb);
    }, [allPosts]);
    
    return (
        <>
            {allPosts.map((post, index) => (
                <div key={index}>
                    <ListViewPostItem
                        title={post.title}
                        category={post.category}
                        status={post.status !== "My Post" ? post.status : false}
                        numberOfComments={post.numberOfComments}
                        totalUpvotes={post.numberOfUpvotes}
                        statusColor={getColorTagFromStatus(post.status)}
                        indicatorColor={getColorTagFromStatus(post.status)}
                        myOwnStatus={post.isYourPost ? true : false}
                        />
                </div>
            ))}
        </>
    )
}
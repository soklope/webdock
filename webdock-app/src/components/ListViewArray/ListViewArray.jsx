import { useState, useEffect } from "react";
import fetchAllPostData from "../../services/fetchAllPostsService";
import ListViewPostItem from "../ListViewPostItem/ListViewPostItem"
import usePostArrayStore from "../../stores/postArrayStore";
import formatCustomDate from "../../helper/formatDate";

export default function ListViewArray() {

    const { allPosts, setAllPosts } = usePostArrayStore()

    function getColorTagFromStatus(status) {
        switch (status) {
            case 'My Post':
                return 'tag-my-post-color';
            case 'Review':
                return 'tag-review-color';
            case 'Planned':
                return 'tag-planned-color';
            case 'In_Progress':
                return 'tag-in-progress-color';
            case 'Complete':
                return 'tag-complete-color';
            default:
                return '';
        }
    }

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const fetchedData = await fetchAllPostData();
                setAllPosts(fetchedData)
                console.log(fetchedData);
            } catch (error) {
                console.error('Error setting state:', error);
            }
        };

        fetchDataAndSetState();
    }, []);
    
    return (
        <>
            {allPosts.map((post, index) => (
                <div key={index}>
                    <ListViewPostItem
                        title={post.title}
                        category={post.Category && post.Category.category}
                        // status={post.Status && post.Status.status !== "My Post" ? post.Status.status : false}
                        status={post.Status && post.Status.status !== "My Post" ? post.Status.status : false}
                        numberOfComments={post.Comments && post.Comments.length}
                        totalUpvotes={post.upvotes}
                        statusColor={post.Status && getColorTagFromStatus(post.Status.status)}
                        indicatorColor={post.Status && getColorTagFromStatus(post.Status.status)}
                        // myOwnStatus={post.isYourPost ? true : false}
                        content={post.content}
                        date={formatCustomDate(new Date(post.createdAt))}
                        />
                </div>
            ))}
        </>
    )
}
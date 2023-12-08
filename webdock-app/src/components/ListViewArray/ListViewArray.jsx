import { useEffect } from "react";
import fetchAllPostData from "../../services/fetchAllPostsService";
import ListViewPostItem from "../ListViewPostItem/ListViewPostItem"
import usePostArrayStore from "../../stores/postArrayStore";
import formatCustomDate from "../../helper/formatDate";
import { getColorTagFromStatus } from "../../helper/colorFromStatus";

export default function ListViewArray() {

    const { allPosts, setAllPosts, setSustainAllPosts } = usePostArrayStore()

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const fetchedData = await fetchAllPostData();
                setAllPosts(fetchedData)
                setSustainAllPosts(fetchedData)
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
                        status={post.Status && post.Status.status !== "My Post" ? post.Status.status : false}
                        numberOfComments={post.Comments && post.Comments.length}
                        totalUpvotes={post.upvotes}
                        statusColor={post.Status && getColorTagFromStatus(post.Status.status)}
                        indicatorColor={post.Status && getColorTagFromStatus(post.Status.status)}
                        content={post.content}
                        date={formatCustomDate(new Date(post.createdAt))}
                        // status={post.Status && post.Status.status !== "My Post" ? post.Status.status : false}
                        // myOwnStatus={post.isYourPost ? true : false}
                        />
                </div>
            ))}
        </>
    )
}
import { useState, useEffect } from 'react';
import PostContent from '../../PostContent';
import SortFunction from '../SortFunction/SortFunction';

export default function ParentSortFunction() {
  const [posts, setPosts] = useState([]);
  const [sortedPosts, setSortedPosts] = useState([]);
  const [sortOption, setSortOption] = useState('New');

  useEffect(() => {
    // Fetch posts data from an API (e.g., 'https://jsonplaceholder.org/posts')
    fetch('https://jsonplaceholder.org/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setSortedPosts(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const handleSortChange = (sortOption) => {
    setSortOption(sortOption);
    sortPosts(sortOption);
  };

  const sortPosts = (option) => {
    let sorted = [...posts];

    if (option === 'Trending') {
      // Sort by the most recent 'updatedAt'
      sorted.sort((a, b) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        return dateB - dateA;
      });
    } else if (option === 'New') {
      // Sort by the most recent 'publishedAt'
      sorted.sort((a, b) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);
        return dateB - dateA;
      });
    } else if (option === 'Top') {
      // Sort by ascending 'userId'
      sorted.sort((a, b) => a.userId - b.userId);
    }

    setSortedPosts(sorted);
  };

  return (
    <div className="parent-sort-function">
      <SortFunction onSortChange={handleSortChange} />
      <PostContent posts={sortedPosts} />
    </div>
  );
}

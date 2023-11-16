// Import the 'Statusfilter' component and the associated SCSS file.
import Statusfilter from '../Statusfilters/Statusfilters';
import './StatusfiltersContainer.scss';
import { postArrayDb } from "../../dummyDb";
import ListViewPostItem from '../ListViewPostItem/ListViewPostItem';
import React, { useState, useEffect } from 'react';

// Define a function to get color tags based on the status.
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

// Define the 'StatusfiltersContainer' component, which serves as a container for status filter buttons.
function StatusfiltersContainer() {

  // State hooks for selected filters, all posts, and filtered posts.
  const [selectedFilters] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsWithFilter, setPostsWithFilter] = useState([]);

  // Fetch posts and add the values to both 'posts' and 'postsWithFilter'
  // Because the type is not set on the first load.
  useEffect(() => {
    setPosts(postArrayDb);
    setPostsWithFilter(postArrayDb);
  }, []);

  // Function to handle filter selection and filter posts based on the selected status.
  const handleFilterSelect = (filterStatus) => {
    // Check for valid input
    if (selectedFilters !== null && filterStatus !== null && filterStatus !== "") {
      // Find the index of the newly selected filter
      const filterIndex = selectedFilters.findIndex(x => x === filterStatus);

      // If the filter does not exist in the array, the index will be -1
      if(filterIndex !== -1) {
        // Remove the existing filter from the array
        selectedFilters.splice(filterIndex, 1);
      } else {
        // Add the new filter to the array
        selectedFilters.push(filterStatus);
      }
    }

    // Filter the posts based on the category, assuming that 'posts.category' is a list of strings
    // Replace the code underneath with this when we have an API:
    // setPostsWithFilter(posts.filter(x => x.category.includes(filterIndicationColor) || x.category.some(y => selectedFilters.includes(y))));
    setPostsWithFilter(posts.filter(x => selectedFilters.length === 0 || selectedFilters.includes(x.status)));
  };

  return (
    // Create a container div with the 'flex-container' class.
    <>
      <div className="flex-container">
        <Statusfilter
          indicationColor={"MyPost"}
          borderColor={"MyPost-border-color"}
          backgroundColor={"MyPost-background-color"}
          title="My Post"
          isSelected={selectedFilters.includes("My Post")}
          onSelect={handleFilterSelect}
        />
        <Statusfilter
          indicationColor={"Review"}
          borderColor={"Review-border-color"}
          backgroundColor={"Review-background-color"}
          title='Review'
          isSelected={selectedFilters.includes("Review")}
          onSelect={handleFilterSelect}
        />
        <Statusfilter
          indicationColor={"Planned"}
          borderColor={"Planned-border-color"}
          backgroundColor={"Planned-background-color"}
          title="Planned"
          isSelected={selectedFilters.includes("Planned")}
          onSelect={handleFilterSelect}
        />
        <Statusfilter
          indicationColor={"InProgress"}
          borderColor={"InProgress-border-color"}
          backgroundColor={"InProgress-background-color"}
          title="In Progress"
          isSelected={selectedFilters.includes("In Progress")}
          onSelect={handleFilterSelect}
        />
        <Statusfilter
          indicationColor={"Complete"}
          borderColor={"Complete-border-color"}
          backgroundColor={"Complete-background-color"}
          title="Complete"
          isSelected={selectedFilters.includes("Complete")}
          onSelect={handleFilterSelect}
        />
      </div>

      {postsWithFilter.map((post, index) => (
        <div key={index}>
          <ListViewPostItem
            title={post.title}
            category={post.category}
            status={post.status}
            numberOfComments={post.numberOfComments}
            totalUpvotes={post.numberOfUpvotes}
            statusColor={getColorTagFromStatus(post.status)}
            indicatorColor={getColorTagFromStatus(post.status)}
          />
        </div>
      ))}
    </>
  );
}

// Export the 'StatusfiltersContainer' component for use in other parts of the application.
export default StatusfiltersContainer;

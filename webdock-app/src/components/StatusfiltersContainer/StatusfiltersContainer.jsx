// Import the 'StatueFilters' component and the associated SCSS file.
import Statusfilter from '../Statusfilters/Statusfilters';
import './StatusfiltersContainer.scss';
import { postArrayDb } from "../../dummyDb";
import RoadmapChildren from "../RoadmapChildren/RoadmapChildren";
import React, { useState, useEffect } from 'react';

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

// Define the 'StatueFiltersContainer' component, which serves as a container for status filter buttons.
function StatusfiltersContainer() {

  const [selectedFilters] = useState([]);

  const [posts, setPosts] = useState([]);
  const [postsWithFilter, setPostsWithFilter] = useState([]);

  //Fetch Get posts and adds the value to both posts and postsWithFilter
  //because type is not set on first load
  useEffect(() => {
    // // Define the API URL you want to request
    // const apiUrl = 'https://jsonplaceholder.org/posts';

    // // Make a GET request when the component mounts
    // fetch(apiUrl)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json(); // Parse the response as JSON
    //   })
    //   .then((responseData) => {
    //     setPosts(responseData); // Set the data in your component's state
    //     setPostsWithFilter(responseData);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    
    setPosts(postArrayDb);
    setPostsWithFilter(postArrayDb);
    
  }, []);

  const handleFilterSelect = (filterStatus) => {
    //Checks for valid imput
    if (selectedFilters !== null && filterStatus !== null && filterStatus !== "") {
      //Findes index of the new selected filter
      const filterIndex = selectedFilters.findIndex(x => x === filterStatus);

      //If the filter does not exists in array, index wil be -1
      if(filterIndex !== -1) {
        //Remove the existing filter from the array
        selectedFilters.splice(filterIndex, 1);
      } else {
        //Add the new filter to the array
        selectedFilters.push(filterStatus);
      }
    }

    //Filters the posts on category asuming that postes.category is a list of strings
    
    //Replace code underneath with this when we have api //setPostsWithFilter(posts.filter(x => x.category.includes(filterIndicationColor) || x.category.some(y => selectedFilters.includes(y))));
    setPostsWithFilter(posts.filter(x => selectedFilters.length === 0 || selectedFilters.includes(x.status)));
  };

  return (
    // Create a container div with the 'flex-container' class.
    <div>
      <div className="flex-container">
        {/* Render 'StatueFilters' components for different categories */}
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
      <div className='post-container'> 
      {postsWithFilter.map((post, index) => (
          <div key={index} className="roadmap-child-container">
            <RoadmapChildren
              title={post.title}
              category={post.category}
              status={post.status}
              numberOfComments={post.numberOfComments}
              totalUpvotes={post.numberOfUpvotes}
              statusColor={getColorTagFromStatus(post.status)}
              
            />
          </div>
        ))}
      </div>
    </div>
    
  );
}

// Export the 'StatusfiltersBtnContainer' component for use in other parts of the application.
export default StatusfiltersContainer;

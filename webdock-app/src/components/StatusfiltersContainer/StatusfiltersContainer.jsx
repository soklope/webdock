// Import the 'StatueFilters' component and the associated SCSS file.
import Statusfilter from '../Statusfilters/Statusfilters';
import './StatusfiltersContainer.scss';

// Define the 'StatueFiltersContainer' component, which serves as a container for category buttons.
function StatusfiltersContainer() {
  return (
    // Create a container div with the 'flex-container' class.
    <div className="flex-container">
      {/* Render 'StatueFilters' components for different categories */}
      <Statusfilter
        indicationColor={"MyPost"}
        borderColor={"MyPost-border-color"}
        backgroundColor={"MyPost-background-color"}
        title="My Post"
      />
      <Statusfilter
        indicationColor={"Review"}
        borderColor={"Review-border-color"}
        backgroundColor={"Review-background-color"}
        title='Review'
      />
      <Statusfilter
        indicationColor={"Planned"}
        borderColor={"Planned-border-color"}
        backgroundColor={"Planned-background-color"}
        title="Planned"
      />
      <Statusfilter
        indicationColor={"InProgress"}
        borderColor={"InProgress-border-color"}
        backgroundColor={"InProgress-background-color"}
        title="In Progress"
      />
      <Statusfilter
        indicationColor={"Complete"}
        borderColor={"Complete-border-color"}
        backgroundColor={"Complete-background-color"}
        title="Complete"
      />
    </div>
  );
}

// Export the 'StatusfiltersBtnContainer' component for use in other parts of the application.
export default StatusfiltersContainer;

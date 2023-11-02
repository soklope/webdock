import '../DropdownMenu/DropdownMenu.scss';

export default function DropdownMenu({ onSortChange }) {
    const handleSortClick = (sortOption) => {
      // Call the provided callback function to handle sorting based on the selected option
      onSortChange(sortOption);
    };
  
    return (
      <div className="dropdown-menu">
        <ul>
          <li onClick={() => handleSortClick('trending')}>Trending</li>
          <li onClick={() => handleSortClick('top')}>Top</li>
          <li onClick={() => handleSortClick('new')}>New</li>
        </ul>
      </div>
    );
  }
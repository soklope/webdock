import '../../../SortFunctionAndFilterContainer/SortFunction/DropdownMenu/DropdownMenu.scss';

export default function DropdownMenu({ onSortChange }) {
    const handleSortClick = (sortOption) => {
      // Call the provided callback function to handle sorting based on the selected option
      onSortChange(sortOption);
    };
  
    return (
      <div className="dropdown-menu">
        <ul>
          <li onClick={() => handleSortClick('Trending')}>Trending</li>
          <li onClick={() => handleSortClick('Top')}>Top</li>
          <li onClick={() => handleSortClick('New')}>New</li>
        </ul>
      </div>
    );
  }
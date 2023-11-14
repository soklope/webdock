import React, { useState, useRef, useEffect } from "react";
import '../SelectCategory/SelectCategory.scss'

export default function SelectCategory() {
const [selectedCategory, setSelectedCategory] = useState(null);
const [showOptions, setShowOptions] = useState(false);
const dropdownRef = useRef(null);
const [hasChanged, setHasChanged] = useState(false)

const categoryOptions = [
    'Dashboard Features',
    'Documentation',
    'Billing Features',
    'Networking',
    'Hardware and Products',
    'Perfect Server Stacks',
    'Mobile App',
    'Webdock API',
    'Competition',
];

const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowOptions(false);
    setHasChanged(true);
};

const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
    }
};

useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
}, []);

return (
    <div className="category-selector" ref={dropdownRef}>
        <div className="category-selector-dropdown">
            <button className={`category-selector-btn ${hasChanged ? 'hasChanged' : ''}`} onClick={() => setShowOptions(!showOptions)}>
                {selectedCategory || 'Select Category'}
                <span className="category-selector-btn-icon"></span>
            </button>
        {showOptions && (
        <div className="category-options">
            {categoryOptions.map((category) => (
            <div
                key={category}
                className="category-option"
                onClick={() => handleCategoryChange(category)}
            >
                {category}
            </div>
            ))}
        </div>
        )}
    </div>
    </div>
);
}


// export default function SelectCategory( { onSelectCategory }) {
//     const [SelectCategory, SetSelectCategory] = useState(null);
//     const [showOptions, setShowOptions] = useState(false);
//     //The options should later be taking from an API to our backend
//     const categoryOptions = [
//         'Dashboard Features',
//         'Documentation',
//         'Billing Features',
//         'Networking',
//         'Hardware and Products',
//         'Perfect Server Stacks',
//         'Mobile App',
//         'Webdock API',
//         'Competition',
//     ];

//     const handleCategoryChange = (category) => {
//         SetSelectCategory(category);
//         onSelectCategory(category);
//     };

//     return(
//         <div className="category-selector">
//             <div className="category-selector-dropdowm">
//                 <button className="category-selector-btn" onClick={() => setShowOptions(!showOptions)}>
//                     {SelectCategory || 'Select Category'}
//                     <span className="category-selector-btn-icon"> 
//                     </span>
//                 </button>
//                 <div className="category-options">
//                     {categoryOptions.map((category) => (
//                         <div
//                         key={category}
//                         className="category-option"
//                         onClick={() => {
//                             handleCategoryChange(category);
//                             setShowOptions(false);
//                         }}
//                         >
//                             {category}
//                         </div>
                            
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
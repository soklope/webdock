import React, { useState } from "react";

export default function AdminToolBar( {itemId} ) {

  const [showDropdown, setShowDropdown] = useState(false)

  const handleDelete = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/items/${itemId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          console.log('Item deleted successfully');
        } else {
          console.error('Failed to delete item');
        }
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    };

  const handleChangeStatus = async (newStatus) => {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/changePostStatus/${itemId}/status/${newStatus}`, {
        method: 'PATCH', // You may need to change this to 'PUT' or 'PATCH' depending on your server implementation
        headers: {
            'Content-Type': 'application/json',
        },
        });

        if (response.ok) {
        const data = await response.json();
        console.log('Post status updated successfully', data);
        } else {
        console.error('Failed to update post status');
        }
    } catch (error) {
        console.error('Error updating post status:', error);
    }
  };
  const handleMerge = async (postId, newParent) => {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/createmerge/${postId}/newparent/${newParent}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        });

        if (response.ok) {
        const data = await response.json();
        console.log('Post merged successfully', data);
        } else {
        console.error('Failed to merge posts');
        }
    } catch (error) {
        console.error('Error updating post status:', error);
    }
  };

  return (
      <div className="admin-toolbar-container">
          <div className="admin-toolbar-container__tool" onClick={() => setShowDropdown(!showDropdown)}>
              <p>Change Status</p>
              <span className="admin-toolbar-container__tool__move" />

              { showDropdown &&
                <ul className="admin-toolbar-container__dropdown">
                  <li onClick={() => handleChangeStatus(1)}>Review</li>
                  <li onClick={() => handleChangeStatus(2)}>Planned</li>
                  <li onClick={() => handleChangeStatus(3)}>In Progress</li>
                  <li onClick={() => handleChangeStatus(4)}>Complete</li>
                  <li onClick={() => handleChangeStatus(5)}>Deprecated</li>
                </ul>
              }
          </div>

          <div className="admin-toolbar-container__tool" onClick={() => handleMerge(10, 1)}>
              <p>Merge</p>
              <span className="admin-toolbar-container__tool__merge" />
          </div>

          <div className="admin-toolbar-container__tool" onClick={handleDelete}>
              <p>Delete</p>
              <span className="admin-toolbar-container__tool__delete" />
          </div>
      </div>
  )
}
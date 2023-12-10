import React from "react";

export default function AdminToolBar( {itemId} ) {

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

    const handleChangeStatus = async () => {
    const newStatus = 2;

    try {
        const response = await fetch(`http://localhost:8080/api/v1/changePostStatus/${itemId}/status/${newStatus}`, {
        method: 'GET', // You may need to change this to 'PUT' or 'PATCH' depending on your server implementation
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

    return (
        <div className="admin-toolbar-container">
            <div className="admin-toolbar-container__tool" onClick={handleChangeStatus}>
                <p>Change Status</p>
                <span className="admin-toolbar-container__tool__move" />
            </div>

            <div className="admin-toolbar-container__tool">
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
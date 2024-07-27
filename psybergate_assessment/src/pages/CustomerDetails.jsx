// CustomerDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
    const { id } = useParams();

    // Fetch or display customer details based on the id
    // For demonstration purposes, let's just display the id
    return (
        <div>
            <h1>Customer Details for ID: {id}</h1>
            {/* Add more details here */}
        </div>
    );
}

export default CustomerDetails;
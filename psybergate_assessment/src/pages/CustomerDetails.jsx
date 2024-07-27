// CustomerDetails.jsx
import React from 'react';
import Layout from '../components/Layout';
import { useLocation } from 'react-router-dom';

const CustomerDetails = () => {
    const location = useLocation();
    const customer = location.state?.customer;

    if (!customer) {
        return (
            <Layout>
                <div>                 
                    <p>No Customer Information</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div>
                <h1>Customer Details</h1>
                <p><strong>Name:</strong> {customer.Name}</p>
                <p><strong>Surname:</strong> {customer.Surname}</p>
                <p><strong>Cell Number:</strong> {customer.CellNumber}</p>
            </div>
         </Layout>
    );
}

export default CustomerDetails;

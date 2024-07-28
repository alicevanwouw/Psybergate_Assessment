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
            <div className="p-3 pt-4">
                <h1>Customer Details</h1>
                <div className="p-3 pt-4">
                    {Object.entries(customer).map(([key, value]) => (
                        <p key={key}>
                            <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}
                        </p>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default CustomerDetails;

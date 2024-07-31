// CustomerDetails.jsx
import React from 'react';
import Layout from '../components/Layout';
import { useLocation } from 'react-router-dom';
import useNavigation from '../hooks/useNavigation';
import LinkButton from '../components/LinkButton';
import FormHeading from '../components/FormHeading';

const CustomerDetails = () => {
    const location = useLocation();
    const customer = location.state?.customer;
    const { navigateToPage } = useNavigation();

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
                <FormHeading text="Customer Details"/>
                <div className="p-3 pt-4">
                    {Object.entries(customer).map(([key, value]) => (
                        <p key={key}>
                            <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}
                        </p>
                    ))}
                </div>
                <div className="pt-3 items-end">
                    <LinkButton text="Back" onClick={() => navigateToPage("/customers")} />
                </div>
            </div>
        </Layout>
    );
}

export default CustomerDetails;

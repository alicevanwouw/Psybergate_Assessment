// NewCustomerAddress.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FormHeading from '../components/FormHeading';
import CustomerAddressForm from '../components/CustomerAddressForm';
import LinkButton from '../components/LinkButton';

const NewCustomerAddress = () => {
    const navigate = useNavigate();

    const navigateToPage = (link) => {
        navigate(link);
    };

    return (
        <Layout>
            <div className="p-3 pt-4">
                <FormHeading text="Add Customer - Address" />
                <CustomerAddressForm />
                <div className="pt-3 items-space-between">
                    <LinkButton text="Back" onClick={() => navigateToPage("/customers/new/details")} />
                    <LinkButton text="Next" onClick={() => navigateToPage("/customers/new/comments")} />
                </div>
            </div>
        </Layout>
    );
}

export default NewCustomerAddress;

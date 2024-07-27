// CustomerList.jsx
import React from 'react';
import Layout from '../components/Layout';
import Table from '../components/Table';
import LinkButton from '../components/LinkButton';

const CustomerList = () => {
    return (
        <Layout>
            <div className="p-3 pt-4">
                <div className="items-space-between pb-3">
                    <h1>All Customers</h1>
                    <LinkButton text="Add Customer" href="./customers/new/details" />
                </div>          
                <Table />
            </div>
        </Layout>
    );
}

export default CustomerList;

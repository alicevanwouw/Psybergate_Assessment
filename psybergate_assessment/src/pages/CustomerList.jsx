// CustomerList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Table from '../components/Table';
import LinkButton from '../components/LinkButton';

const CustomerList = () => {
    const navigate = useNavigate();

    const ActionButton = ({ id, action }) => {
        return <button className="btn-base btn" onClick={() => action(id)}>Read More</button>;
    };

    const loadDetails = (id) => {
        navigate(`/customers/${id}`);
    };

    const columns = [
        { key: 'Name', displayName: 'Name', type: "text" },
        { key: 'Surname', displayName: 'Surname', type: "text" },
        { key: 'CellNumber', displayName: 'Cell Number', type: "number" },
        { key: 'Action', displayName: 'Action', type: "button", action: "loadDetails" }
    ];
    const data = [
        { Id: 1, Name: 'Bob', Surname: 'Bobson', CellNumber: '0831234567', Action: (id) => <ActionButton id={id} action={loadDetails} /> },
        { Id: 2, Name: 'Bob', Surname: 'Bobson', CellNumber: '0831234567', Action: (id) => <button className="btn-base btn" onClick={() => loadDetails(id)}>Read More</button> },
        { Id: 3, Name: 'Bob', Surname: 'Bobson', CellNumber: '0831234567', Action: (id) => <button className="btn-base btn" onClick={() => loadDetails(id)}>Read More</button> }
    ];

    const heading = `All Customers (${data.length})`;

    return (
        <Layout>
            <div className="p-3 pt-4">
                <div className="items-space-between pb-3">
                    <h1>{heading}</h1>
                    <LinkButton text="Add Customer" href="./customers/new/details" />
                </div>          
                <Table columns={columns} data={data} />
            </div>
        </Layout>
    );
}

export default CustomerList;

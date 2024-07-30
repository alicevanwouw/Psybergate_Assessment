import React from 'react';
import useNavigation from '../hooks/useNavigation';
import Layout from '../components/Layout';
import Table from '../components/Table';
import LinkButton from '../components/LinkButton';
import addIcon from '../assets/icons/add_icon.svg';
import Fetch from '../components/Fetch'

const CustomerList = () => {
    const { navigateToPage } = useNavigation();

    const ActionButton = ({ row }) => {
        return <button className="btn-base btn table-btn" onClick={() => loadDetails(row)}>Read More</button>;
    };

    const loadDetails = (row) => {
        console.log('Loading details for row:', row); // Debugging log
        navigateToPage(`/customers/${row.Id}`, { customer: row });
    };

    const columns = [
        { key: 'Name', displayName: 'Name', type: "text" },
        { key: 'Surname', displayName: 'Surname', type: "text" },
        { key: 'CellNumber', displayName: 'Cell Number', type: "number" },
        { key: 'Action', displayName: 'Action', type: "button" }
    ];

    let data = [
        { Id: 1, Name: 'Bob', Surname: 'Bobson', CellNumber: '0831234567' },
        { Id: 2, Name: 'Bob', Surname: 'Bobson', CellNumber: '0831234567' },
        { Id: 3, Name: 'Bob', Surname: 'Bobson', CellNumber: '0831234567' }
    ];

    const heading = `All Customers (${data.length})`;

    return (
        <Layout>
            <div className="p-3 pt-4">
                <div className="items-space-between pb-3">
                    <h1>{heading}</h1>
                    <LinkButton text="Add Customer" onClick={() => navigateToPage("/customers/new/details")} icon={addIcon} />
                </div>
                {
                    !data || data.length === 0 ? (
                        <p>No Customer Information available.</p>
                    ) : (
                        <Table columns={columns} data={data.map(row => ({ ...row, Action: (id) => <ActionButton row={row} /> }))} />
                    )
                }
            </div>
            
        </Layout>
    );
}

export default CustomerList;

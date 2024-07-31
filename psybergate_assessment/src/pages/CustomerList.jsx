import React from 'react';
import useNavigation from '../hooks/useNavigation';
import Layout from '../components/Layout';
import Table from '../components/Table';
import LinkButton from '../components/LinkButton';
import addIcon from '../assets/icons/add_icon.svg';

const CustomerList = () => {
    const { navigateToPage } = useNavigation();

    const ActionButton = ({ row }) => {
        return <button className="btn-base btn table-btn" onClick={() => loadDetails(row)}>Read More</button>;
    };

    const loadDetails = (row) => {
        console.log('Loading details for row:', row); // Debugging log
        navigateToPage(`/customers/${row.Id}`, { customer: row });
    };

    //const [customer, setCustomers] = useState([]);
    //useEffect(() => {
    //    fetch('https://localhost:7199/api/Customer')
    //        .then((res) => {
    //            return res.json();
    //        })
    //        .then((data) => {
    //            console.log(data);
    //            setCustomers(data);
    //        });
    //}, []);

    const columns = [
        { key: 'Name', displayName: 'Name', type: "text" },
        { key: 'Surname', displayName: 'Surname', type: "text" },
        { key: 'CellNumber', displayName: 'Cell Number', type: "number" },
        { key: 'Action', displayName: 'Action', type: "button" }
    ];

    let data = [
        {
            Id: 1, Name: 'Bob', Surname: 'Bobson', CellNumber: '0831234567', Comment: "Customer 1.",
            PhysicalAddress: '1 Street Street, Cittyville', PostalAddress: '1 Street Street, Cittyville'
        },
        {
            Id: 2, Name: 'Fred', Surname: 'Fredson', CellNumber: '0831234567', Comment: "This Cusomer is named Fred.",
            PhysicalAddress: '5 Road Road, Cittyville', PostalAddress: '5 Road Road, Cittyville'
        },
        {
            Id: 3, Name: 'Betty', Surname: 'Bettison', CellNumber: '0831234567', Comment: "Betty is a new Customer.",
            PhysicalAddress: '14 Ave Avenue, Cittyville', PostalAddress: '5 Road Road, Cittyville'
        }
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

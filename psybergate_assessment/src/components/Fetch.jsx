import { useState, useEffect } from 'react';
const Fetch = () => {
    const [customer, setCustomers] = useState([]);
    useEffect(() => {
        fetch('https://localhost:7199/api/Customer')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setCustomers(data);
            });
    }, []);
    return (
        <div>

            {customers.map((customer) => (
                <p/>
            ))}
        </div>
    );
};
export default Fetch;
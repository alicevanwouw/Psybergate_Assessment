// AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomerList from './pages/CustomerList';
import CustomerDetails from './pages/CustomerDetails';
import NewCustomerDetails from './pages/NewCustomerDetails';
import NewCustomerComments from './pages/NewCustomerComments';
import NewCustomerAddress from './pages/NewCustomerAddress';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/customers" replace />} />
                <Route path="/customers/:id" element={<CustomerDetails />} />
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/new/details" element={<NewCustomerDetails />} />
                <Route path="/customers/new/address" element={<NewCustomerAddress />} />
                <Route path="/customers/new/comments" element={<NewCustomerComments />} />
            </Routes>
        </Router>
    );
};

import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import CustomerList from './pages/CustomerList';
import CustomerDetails from './pages/CustomerDetails';
import NewCustomerDetails from './pages/NewCustomerDetails';
import NewCustomerComments from './pages/NewCustomerComments';
import NewCustomerAddress from './pages/NewCustomerAddress';
import { FormProvider } from './components/FormContext';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/customers" replace />} />
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/:id" element={<CustomerDetails />} />
                <Route path="/customers/new" element={<FormProviderWrapper />}>
                    <Route path="details" element={<NewCustomerDetails />} />
                    <Route path="address" element={<NewCustomerAddress />} />
                    <Route path="comments" element={<NewCustomerComments />} />
                </Route>
            </Routes>
        </Router>
    );
};

const FormProviderWrapper = () => {
    return (
        <FormProvider>
            <Outlet />
        </FormProvider>
    );
};

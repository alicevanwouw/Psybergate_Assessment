import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import CustomerDetailForm from '../components/CustomerDetailForm';
import FormHeading from '../components/FormHeading';
import LinkButton from '../components/LinkButton';

const NewCustomerDetails = () => {
    const navigate = useNavigate();

    const navigateToPage = (link) => {
        navigate(link);
    };

    return (
        <Layout>
            <div className="p-3 pt-4 form-container">
                <FormHeading text="Add Customer - Details" />
                <CustomerDetailForm />
                <div className="pt-3 d-flex flex-row-reverse">
                    <LinkButton text="Next" onClick={() => navigateToPage("/customers/new/address")} />
                </div>
            </div>
        </Layout>
    );
}

export default NewCustomerDetails;

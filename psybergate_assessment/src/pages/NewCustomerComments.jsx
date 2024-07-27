import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CustomerCommentForm from '../components/CustomerCommentForm';
import FormHeading from '../components/FormHeading';
import LinkButton from '../components/LinkButton';

const NewCustomerComments = () => {
    const navigate = useNavigate();

    const navigateToPage = (link) => {
        navigate(link);
    };

    return (
        <>
            <Layout>
                <div className="p-3 pt-4">
                    <FormHeading text="Add Customer - Comments" />
                    <CustomerCommentForm />
                    <div className="pt-3 items-space-between">
                        <LinkButton text="Back" onClick={() => navigateToPage("/customers/new/address")} />
                        <LinkButton text="Submit" />
                    </div>
                </div>
            </Layout>   
        </>
    );
}


export default NewCustomerComments;

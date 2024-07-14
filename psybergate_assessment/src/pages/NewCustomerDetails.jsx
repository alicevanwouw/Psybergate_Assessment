import Layout from '../components/Layout';
import CustomerDetailForm from '../components/CustomerDetailForm';
import FormHeading from '../components/FormHeading';
import LinkButton from '../components/LinkButton';

const NewCustomerDetails = () => {
    return (
        <>
            <Layout>
                <div className="p-3 pt-4">
                    <FormHeading text="Add Customer - Details" />
                    <CustomerDetailForm />
                    <div className="pt-3 d-flex flex-row-reverse">
                        <LinkButton text="Next" href="../new/address"/>
                    </div>
                    
                </div>             
            </Layout>           
        </>
    );
}

export default NewCustomerDetails;
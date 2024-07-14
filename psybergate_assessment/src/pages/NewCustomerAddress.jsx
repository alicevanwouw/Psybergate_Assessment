import Layout from '../components/Layout';
import FormHeading from '../components/FormHeading';
import CustomerAddressForm from '../components/CustomerAddressForm';
import LinkButton from '../components/LinkButton';


const NewCustomerAddress = () => {
    return (
        <>
            <Layout>
                <div className="p-3 pt-4">
                    <FormHeading text="Add Customer - Address" />
                    <CustomerAddressForm />
                    <div className="pt-3 items-space-between">
                        <LinkButton text="Back" href="../new/details" />
                        <LinkButton text="Next" href="../new/comments" />
                    </div>
                </div>
            </Layout>
        </>
    );
}


export default NewCustomerAddress;

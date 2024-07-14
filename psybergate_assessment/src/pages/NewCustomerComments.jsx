import Layout from '../components/Layout';
import CustomerCommentForm from '../components/CustomerCommentForm';
import FormHeading from '../components/FormHeading';
import LinkButton from '../components/LinkButton';


const NewCustomerComments = () => {
    return (
        <>
            <Layout>
                <div className="p-3 pt-4">
                    <FormHeading text="Add Customer - Comments" />
                    <CustomerCommentForm />
                    <div className="pt-3 items-space-between">
                        <LinkButton text="Back" href="../new/address" />
                        <LinkButton text="Submit" href="" />
                    </div>
                </div>
            </Layout>   
        </>
    );
}


export default NewCustomerComments;

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

    const handleSubmit = async (data) => {
        try {
            const response = await fetch('https://localhost:7199/api/Customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Error while creating new customer');
            }
           
            //reset the form data
            setFormData({
                firstName: '',
                lastName: '',
                cellPhone: '',
                physicalAddressl1: '',
                physicalAddressl2: '',
                physicalAddressl3: '',
                physicalAddressl4: '',
                postalAddressl1: '',
                postalAddressl2: '',
                postalAddressl3: '',
                postalAddressl4: '',
                comments: ''
            });

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <Layout>
                <div className="p-3 pt-4  form-container">
                    <FormHeading text="Add Customer - Comments" />
                    <CustomerCommentForm />
                    <div className="pt-3 items-space-between">
                        <LinkButton text="Back" onClick={() => navigateToPage("/customers/new/address")} />
                        <LinkButton text="Submit" onClick={() => handleSubmit(formData)} />
                    </div>
                </div>
            </Layout>   
        </>
    );
}


export default NewCustomerComments;

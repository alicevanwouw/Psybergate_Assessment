import { useFormContext } from './FormContext';


function CustomerAddressForm() {
    const { formData, setFormData } = useFormContext();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    let inputsPhysicalAddress = [
        {
            id: physicalAddressl1,
            placeholder: "Address Line 1",
            value: formData.physicalAddressl1,
            type:"text"
        },
        {
            id: physicalAddressl2,
            placeholder: "Address Line 2",
            value: formData.physicalAddressl2,
            type: "text"
        },
        {
            id: physicalAddressl3,
            placeholder: "Address Line 3",
            value: formData.physicalAddressl3,
            type: "text"
        },
        {
            id: physicalAddressl4,
            placeholder: "Address Line 4",
            value: formData.physicalAddressl4,
            type: "text"
        }
    ]

    let inputsPostalAddress = [
        {
            id: postalAddressl1,
            placeholder: "Address Line 1",
            value: formData.postalAddressl1,
            type: "text"
        },
        {
            id: postalAddressl2,
            placeholder: "Address Line 2",
            value: formData.postalAddressl2,
            type: "text"
        },
        {
            id: postalAddressl3,
            placeholder: "Address Line 3",
            value: formData.postalAddressl3,
            type: "text"
        },
        {
            id: postalAddressl4,
            placeholder: "Address Line 4",
            value: formData.postalAddressl4,
            type: "text"
        }
    ]

    return (
        <>
            <form>

            </form>
        </>
    )
}

export default CustomerAddressForm;
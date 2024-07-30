import { useFormContext } from './FormContext';

function CustomerDetailForm() {
    const { formData, setFormData } = useFormContext();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    return (
        <>
            <form>
                <div className="form-group mb-3 mt-4">
                    <label for="firstName" className="ps-1 pb-1">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />                
                </div>
                <div className="form-group mb-3">
                    <label for="lastName" className="ps-1 pb-1">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />   
                </div>
                <div className="form-group mb-3">
                    <label for="cellphone" className="ps-1 pb-1">Cell phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cellPhone"
                        placeholder="Cell phone"
                        value={formData.cellPhone}
                        onChange={handleChange}
                    />   
                </div>
            </form>
        </>
    )
}

export default CustomerDetailForm;
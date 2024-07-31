import { useFormContext } from './FormContext';

function CustomerAddressForm() {
    const { formData, setFormData } = useFormContext();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    return (
        <>
            <form>
                <div className="form-group mt-4">
                    <label className="ps-1">Physical Address</label>
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="physicalAddressl1"
                        placeholder="Address Line 1"
                        onChange={handleChange}
                        value={formData.physicalAddressl1}
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="physicalAddressl2"
                        placeholder="Address Line 2"
                        onChange={handleChange}
                        value={formData.physicalAddressl2}
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="physicalAddressl3"
                        placeholder="Address Line 3"
                        onChange={handleChange}
                        value={formData.physicalAddressl3}
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="physicalAddressl4"
                        placeholder="Address Line 4"
                        onChange={handleChange}
                        value={formData.physicalAddressl4}
                    />
                </div>
                <div className="form-group mt-4">
                    <label className="ps-1">Postal Address</label>
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="postalAddressl1"
                        placeholder="Address Line 1"
                        onChange={handleChange}
                        value={formData.postalAddressl1}
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="postalAddressl2"
                        placeholder="Address Line 2"
                        onChange={handleChange}
                        value={formData.postalAddressl2}
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="postalAddressl3"
                        placeholder="Address Line 3"
                        onChange={handleChange}
                        value={formData.postalAddressl3}
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="postalAddressl4"
                        placeholder="Address Line 4"
                        onChange={handleChange}
                        value={formData.postalAddressl4}
                    />
                </div>
            </form>
        </>
    )
}

export default CustomerAddressForm;
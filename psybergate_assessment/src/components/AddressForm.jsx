import { useFormContext } from './FormContext';
import React from 'react';

function AddressForm({ title, inputs}) {
    const { formData, setFormData } = useFormContext();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    return (    
        <div className="form-group mt-4">
            <label className="ps-1">{title}</label>
            {inputs.map(i => 
                <input
                    type={i.type}
                    className="form-control mt-2"
                    id={i.id}
                    placeholder={i.placeholder}
                    onChange={handleChange}
                    value={formData.physicalAddressl1}
                />
            )}           
        </div>
    );
}

export default AddressForm;

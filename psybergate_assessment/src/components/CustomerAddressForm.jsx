import React, { useState, useRef, useEffect } from 'react';
import { useFormContext } from './FormContext';
import AddressForm from './AddressForm';

function CustomerAddressForm() {
    const { formData, setFormData } = useFormContext();
    const [usePhysicalAsPostal, setUsePhysicalAsPostal] = useState(false);
    const [postalAddressHeight, setPostalAddressHeight] = useState('auto');
    const postalAddressRef = useRef(null);

    const inputsPhysicalAddress = [
        {
            id: "physicalAddressl1",
            placeholder: "Address Line 1",
            type: "text"
        },
        {
            id: "physicalAddressl2",
            placeholder: "Address Line 2",
            type: "text"
        },
        {
            id: "physicalAddressl3",
            placeholder: "Address Line 3",
            type: "text"
        },
        {
            id: "physicalAddressl4",
            placeholder: "Address Line 4",
            type: "text"
        }
    ];

    const inputsPostalAddress = [
        {
            id: "postalAddressl1",
            placeholder: "Address Line 1",
            type: "text"
        },
        {
            id: "postalAddressl2",
            placeholder: "Address Line 2",
            type: "text"
        },
        {
            id: "postalAddressl3",
            placeholder: "Address Line 3",
            type: "text"
        },
        {
            id: "postalAddressl4",
            placeholder: "Address Line 4",
            type: "text"
        }
    ];

    const togglePostalAddress = (e) => {
        let checked = e.target.checked;
        formData.usePhysicalAsPostal = checked;
        setUsePhysicalAsPostal(checked);
    };

    useEffect(() => {
        if (postalAddressRef.current) {
            setPostalAddressHeight(usePhysicalAsPostal ? '0' : `${postalAddressRef.current.scrollHeight}px`);
        }
    }, [usePhysicalAsPostal]);

    return (
        <>
            <form>
                <AddressForm title="Physical Address" inputs={inputsPhysicalAddress} />
                <div
                    ref={postalAddressRef}
                    className={usePhysicalAsPostal ? "hidden" : "visible"}
                    style={{ height: postalAddressHeight }}
                >
                    <AddressForm title="Postal Address" inputs={inputsPostalAddress} />
                </div>
                {/*{!usePhysicalAsPostal && <AddressForm title="Postal Address" inputs={inputsPostalAddress} />}*/}
                <div className="form-check mt-3">
                    <input
                        className="form-check-input form-check-input-green"
                        type="checkbox"
                        id="flexCheckDefault"
                        checked={usePhysicalAsPostal}
                        onChange={togglePostalAddress}
                    />
                    <label className="form-check-label " htmlFor="flexCheckDefault">
                        Use Physical Address as Postal Address
                    </label>
                </div>
            </form>
        </>
    );
}

export default CustomerAddressForm;

import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
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

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

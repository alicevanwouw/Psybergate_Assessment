import { useFormContext } from './FormContext';
function CustomerCommentForm() {
    const { formData, setFormData } = useFormContext();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    return (
        <>
            <form>
                <div className="form-group mt-4">
                    <label htmlFor="additionalComments" className="ps-1">Additional Comments</label>
                    <textarea
                        className="form-control"
                        id="comments"
                        rows="4"
                        onChange={handleChange}
                        value={formData.comments}
                    >
                    </textarea>
                </div>
            </form>
        </>
    )
}

export default CustomerCommentForm;
function CustomerCommentForm() {
    return (
        <>
            <form>
                <div className="form-group mt-4">
                    <label for="additionalComments" className="ps-1">Additional Comments</label>
                    <textarea class="form-control" id="additionalComments" rows="4"></textarea>
                </div>
            </form>
        </>
    )
}

export default CustomerCommentForm;
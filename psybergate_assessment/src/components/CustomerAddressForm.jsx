function CustomerAddressForm() {
    return (
        <>
            <form>
                <div className="form-group mt-4">
                    <label for="physicalAddress" className="ps-1">Physical Address</label>
                    <input type="text" className="form-control mt-2" id="physicalAddress" placeholder="Address Line 1"/>
                    <input type="text" className="form-control mt-2" id="physicalAddress" placeholder="Address Line 2" />
                    <input type="text" className="form-control mt-2" id="physicalAddress" placeholder="Address Line 3" />
                    <input type="text" className="form-control mt-2" id="physicalAddress" placeholder="Address Line 4" />
                </div>
                <div className="form-group mt-4">
                    <label for="postalAddress" className="ps-1">Postal Address</label>
                    <input type="text" className="form-control mt-2" id="lastName" placeholder="Address Line 1" />
                    <input type="text" className="form-control mt-2" id="lastName" placeholder="Address Line 2" />
                    <input type="text" className="form-control mt-2" id="lastName" placeholder="Address Line 3" />
                    <input type="text" className="form-control mt-2" id="lastName" placeholder="Address Line 4" />
                </div>
            </form>
        </>
    )
}

export default CustomerAddressForm;
import React from 'react'

function TermsAndCondtions() {
    return (
        <div>
            <div className="form-group">
                <label>Terms and Conditions</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label">I accept all Terms and Conditions</label>
            </div>
            <button type="submit" className="btn btn-primary">Next</button>
        </div>

    )
}

export default TermsAndCondtions
const EMAIL_REGX = '/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/'
const MOBILE_NUMBER_LENGTH = 10

const validate = (value)=>{
    var errors ='';
    
    if(!value.firstName){
        errors = "FirstName is Required"
    }else if(!value.lastName){
        errors = "LastName is Required"
    }else if(!value.gender){
        errors = "Gender is Required"
    }else if(!value.mobile){
        errors = "Mobile Number is Required"
    }else if (value.phone.length === MOBILE_NUMBER_LENGTH) {
        errors = 'Please enter valid Mobile NUmber'
    }else if(!value.email){
        errors = "Email is Required"
    }else if (!((EMAIL_REGX).test(value.email))) {
        errors = 'Please enter the valid Email'
    }else if(!value.Pincode){
        errors = "Pincode is Required"
    }else if(!value.collegeName){
        errors = "College Name is Required"
    }else if(!value.degree){
        errors = "Degree is Required"
    }else if(!value.branch){
        errors = "Branch is Required"
    }else if(!value.percent){
        errors = "percent is Required"
    }
    return errors
}
export default validate
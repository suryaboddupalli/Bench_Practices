const EMAIL_REGX = '/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/'
const MOBILE_NUMBER_LENGTH = 10
const PASSWORD_LENGTH =7

const RegisterValidation = (data)=>{
    var errors ='';
    
    if(!data.Name){
        errors = "FirstName is Required"
    }else if(!data.Mobile){
        errors = "Mobile Number is Required"
    }else if (data.Phone.length === MOBILE_NUMBER_LENGTH) {
        errors = 'Please enter valid Mobile NUmber'
    }else if(!data.Email){
        errors = "Email is Required"
    }else if (!((EMAIL_REGX).test(data.Email))) {
        errors = 'Please enter the valid Email'
    }else if (data.Password > PASSWORD_LENGTH) {
        errors = 'Please enter the 8 Digit Passwors'
    }
    return errors
}
export default RegisterValidation
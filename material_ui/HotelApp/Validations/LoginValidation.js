const EMAIL_REGX = '/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/'

const LoginValidations = (data)=>{
    var errors ='';
    
    if(!data.Name){
        errors = "FirstName is Required"
    }else if(!data.Email){
        errors = "Email is Required"
    }else if (!((EMAIL_REGX).test(data.Email))) {
        errors = 'Please enter the valid Email'
    }
    return errors
}
export default LoginValidations
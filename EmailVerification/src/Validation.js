const userErrors = {}
const emailregex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?])[A-Za-z\d@$!%*?]{8,}$/
const MOBILE_LENGTH = 10
const PASSWORD_LENGTH = 7

const RegisterValidation = (userdata) => {
    if (!userdata.Name) {
        userErrors.Name = 'Please enter the Name'
    } else if (!userdata.Email) {
        userErrors.Email = 'please enter the Email'
    } else if (!(emailregex.test(userdata.Email))) {
        userErrors.Email = 'Please enter the valid Email'
    } else if (userdata.Phone === MOBILE_LENGTH) {
        userErrors.phone = 'Please enter valid Mobile NUmber'
    } else if (userdata.Password > PASSWORD_LENGTH) {
        userErrors.Password = 'Please enter min 8 characters '
    } else if (!(passwordregex.test(userdata.Password))) {
        userErrors.Password = 'Password must contain 1 uppercase, 1 lowercase, 1 Digit, 1 special character'
    } else if (userdata.Password !== userdata.Conform_Password) {
        userErrors.PassCheck = 'Password and Conform Password must be same'
    }
    return userErrors

}
export default RegisterValidation

export const LoginValidation = (userData) => {
    if (!userData.Email) {
        userErrors.Email = 'please enter the Email'
    } else if (!(emailregex.test(userData.Email))) {
        userErrors.Email = 'Please enter the valid Email'
    } else if (userData.Password > PASSWORD_LENGTH) {
        userErrors.Password = 'Please enter min 8 characters '
    }
}


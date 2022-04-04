const PASSWORD_LENGTH = 7
const EmpLoginValidation = (data) => {
    var userErrors = ''
    if (!data.Username) {
        userErrors = 'Please enter the Username'
    } else if (!data.Password) {
        userErrors = 'Please enter the Password'
    } else if (data.Password.length > PASSWORD_LENGTH) {
        userErrors = 'Please enter the min eigth character password'
    }
    return userErrors
}
export default EmpLoginValidation
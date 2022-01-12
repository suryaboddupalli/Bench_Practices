const LoginReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
            }
    }
}

export default LoginReducer
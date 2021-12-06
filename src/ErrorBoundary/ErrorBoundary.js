import React from "react";

class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = { error = false, errorInfo: null };
    }
    static getDerivedStateFromError(erroe) {
        return { error: true }
    }
    componentDidCatch(error, errorInfo) {
        console.log(errorInfo)
        console.log(error)
    }

    render() {
        if (this.state.error) {
            return <h3>Something went wrong</h3>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary
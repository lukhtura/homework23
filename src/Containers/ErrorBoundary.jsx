//Core
import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        };
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    };

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        return hasError
            ? (<div>Oops! Something went wrong...Please, refresh the page</div>)
            : children;
    };
};

export default ErrorBoundary;
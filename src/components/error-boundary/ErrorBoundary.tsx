import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProp {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

// We still need to use class component for error boundary.
// https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
class ErrorBoundary extends Component<ErrorBoundaryProp, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProp) {
        super(props);
        this.state = { hasError: false };
    }
    
    static getDerivedStateFromError() {
        // update state to render fallback UI
        return { hasError: true };
    }
    
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log the error or send it to an error reporting service
        console.error('Error caught by Error Boundary: ', error, errorInfo);
    }
    
    render(): ReactNode {
        if (this.state.hasError) {
            // Fallback UI
            return <h1 className="error">Opps, something went wrong. Please try again later.</h1>
        }
        
        // render children if no error
        return this.props.children;
    }
}

export default ErrorBoundary;
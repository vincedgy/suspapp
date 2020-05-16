import React from 'react'
import * as log from 'loglevel';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      log.error(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h4 style={{color:'red'}}>Something went wrong.</h4>;
      }
  
      return this.props.children; 
    }
  }

   

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo: errorInfo
    });
    
    // Log error to error reporting service in production
    console.error('React Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          color: '#f1f5f9',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#61dafb' }}>
            😢 Something went wrong
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#94a3b8' }}>
            We're sorry for the inconvenience. Please refresh the page or try again later.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              backgroundColor: '#61dafb',
              color: '#0f172a',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Refresh Page
          </button>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ 
              marginTop: '2rem', 
              padding: '1rem', 
              backgroundColor: '#1e293b', 
              borderRadius: '8px',
              whiteSpace: 'pre-wrap',
              textAlign: 'left'
            }}>
              <summary style={{ cursor: 'pointer', marginBottom: '1rem' }}>
                Click for error details (Development Only)
              </summary>
              <p style={{ color: '#ff6b6b' }}>{this.state.error.toString()}</p>
              <pre style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Screen Component
const LoadingScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#0f172a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'opacity 0.5s ease'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        border: '4px solid rgba(97, 218, 251, 0.3)',
        borderTopColor: '#61dafb',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      <p style={{ 
        marginTop: '1.5rem', 
        fontSize: '1.1rem', 
        color: '#94a3b8',
        fontFamily: 'Poppins, sans-serif'
      }}>
        Loading portfolio...
      </p>
    </div>
  );
};

// App Wrapper with Loading State
const AppWrapper = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Add fade out animation
      const loadingScreen = document.querySelector('.loading-screen');
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          if (loadingScreen.parentNode) {
            loadingScreen.parentNode.removeChild(loadingScreen);
          }
        }, 500);
      }
    }, 800);

    // Preload important images
    const imagesToPreload = [
      '/assets/images/pp.jpg',
      '/assets/images/about.jpg'
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <App />
    </>
  );
};

// Create root and render
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <AppWrapper />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found. Make sure index.html has a div with id="root"');
}
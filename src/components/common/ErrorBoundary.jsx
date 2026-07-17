import { Component } from 'react';

// Catches any uncaught error in the React tree.
// Without this, a single JS error unmounts the WHOLE app and the kid is left
// with a dead screen showing nothing but the page background color
// (this matched the reported "stuck orange screen" bug on mobile).
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log for debugging (visible in remote devtools / GA later if needed)
    console.error('App error boundary caught:', error, info);
  }

  handleGoHome = () => {
    // Full reload = guaranteed clean state (contexts, audio, canvas loops)
    window.location.href = '/home';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            background: 'linear-gradient(180deg, #FFE4EC 0%, #FFF 100%)',
            direction: 'rtl',
            textAlign: 'center',
            padding: 24,
            zIndex: 9999,
          }}
        >
          <div style={{ fontSize: 72 }}>🙈</div>
          <h1 style={{ fontSize: 28, color: '#333', margin: 0 }}>אופס! משהו השתבש</h1>
          <p style={{ fontSize: 18, color: '#666', margin: 0 }}>בואו ננסה שוב</p>
          <button
            onClick={this.handleGoHome}
            style={{
              marginTop: 12,
              padding: '16px 44px',
              borderRadius: 30,
              border: 'none',
              background: 'linear-gradient(135deg, #FF6B9D, #FF8E53)',
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)',
            }}
          >
            🏠 חזרה הביתה
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

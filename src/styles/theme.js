// Kids Game Platform - Theme Configuration
// Hebrew RTL Support

export const theme = {
  colors: {
    // Primary colors
    primary: '#FF6B6B',      // Coral red
    secondary: '#4ECDC4',    // Teal
    accent: '#FFE66D',       // Yellow

    // Feedback colors
    success: '#7ED321',      // Green - correct answer
    error: '#FF4757',        // Red - wrong answer

    // Backgrounds
    background: '#FFF9E6',   // Warm cream
    backgroundAlt: '#E8F4FD', // Light blue
    card: '#FFFFFF',

    // Text
    text: '#2D3436',
    textLight: '#636E72',
    textWhite: '#FFFFFF',

    // Category colors
    counting: '#74B9FF',     // Blue
    colors: '#FD79A8',       // Pink
    shapes: '#A29BFE',       // Purple
    animals: '#55EFC4',      // Mint
    logic: '#FDCB6E',        // Orange

    // UI elements
    shadow: 'rgba(0, 0, 0, 0.1)',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },

  fonts: {
    primary: '"Rubik", "Arial", sans-serif',
    size: {
      small: '14px',
      medium: '18px',
      large: '24px',
      xlarge: '32px',
      xxlarge: '48px',
      huge: '64px',
    }
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  borderRadius: {
    small: '12px',
    medium: '20px',
    large: '30px',
    circle: '50%',
  },

  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.15)',
    large: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },

  transitions: {
    fast: '0.15s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },

  // RTL Hebrew support
  direction: 'rtl',
};

export default theme;

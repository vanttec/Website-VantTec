// SMALC Design System
// Color Palette based on design specs

export const colors = {
  // Primary palette
  primary: {
    dark: '#01072E',      // Dark - base background
    principal: '#0165C5', // Principal - accent blue
    intern: '#23447F',    // Intern - secondary dark blue
    light: '#1042A2',     // Light - hover state
  },
  
  // Secondary
  secondary: {
    principal: '#2A6A99',
  },
  
  // Neutral
  neutral: {
    principal: '#CCEAFF', // Light blue text/accents
    secondary: '#E5E8EF', // Light gray text
  },
  
  // Alert
  alert: {
    principal: '#BC4749',
  },
  
  // Warning
  warning: {
    principal: '#F2D646',
  },
  
  // Tertiary
  tertiary: {
    principal: '#3620A4',
  },
  
  // Black & White
  black: '#141414',
  white: '#FEFEFE',
};

// Gradient background for SMALC sections
export const smalcGradient = 'radial-gradient(circle at 50% 50%, #0165C5 0%, #01072E 50%, #01072E 100%)';

// Typography
export const fonts = {
  heading: 'Montserrat, sans-serif',
  body: 'Roboto, sans-serif',
};

export default { colors, smalcGradient, fonts };

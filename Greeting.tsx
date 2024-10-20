import React from 'react';

// Define the props interface for the Greeting component
interface GreetingProps {
  name: string; // 'name' prop of type string
}

// Functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>; // Render the greeting message
};

// Export the component as default
export default Greeting;

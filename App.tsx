import React from 'react';
import './App.css'; // Ensure the CSS file is imported
import Greeting from './Greeting';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="component-container">
        <Greeting name="World" /> {/* Greeting component */}
        <Counter /> {/* Counter component */}
      </div>
    </div>
  );
};

export default App;

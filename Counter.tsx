import React, { Component } from 'react';

// Define the state interface for the Counter component
interface CounterState {
  count: number; // 'count' property of type number
}

// Class component that manages a counter
class Counter extends Component<{}, CounterState> {
  // Initial state
  state: CounterState = {
    count: 0,
  };

  // Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 }); // Update the state
  };

  // Render method
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p> {/* Display the current count */}
        <button onClick={this.increment}>Increment</button> {/* Button to increment */}
      </div>
    );
  }
}

// Export the Counter component as default
export default Counter;

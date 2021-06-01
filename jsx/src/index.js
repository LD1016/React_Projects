// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
if (module.hot) {
  module.hot.accept();
}

const getButtonText = () => {
  return 'Click on me!';
};
// Create React component
const App = () => {
  const buttonText = 'Click on me!';

  // ERROR: Cannot show object in the place that JSX required text
  // only can use object as a variable
  // const background = {backgroundColor: 'blue', color: 'white'}
  //          => style = {backgound}
  // const buttonText = {text: 'Click on me!'};

  return (
    <div>
      <label className='label' htmlFor='name'>
        Enter name:
      </label>
      <input type='text' id='name' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {/* NOTE: represent variable inside of {} */}
        {/* {getButtonText()} */}
        {buttonText}
      </button>
    </div>
  );
};

// Take a React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));

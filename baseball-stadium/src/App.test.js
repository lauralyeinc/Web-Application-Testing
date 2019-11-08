// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import { render } from "@testing-library/react"; 


test('renders without crashing', () => {
  render(<App />); 
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   // ReactDOM.render(<App />, div);
//   // ReactDOM.unmountComponentAtNode(div);
// });

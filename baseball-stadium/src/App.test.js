// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import "@testing-library/jest-dom/extend-expect"; 
import * as rtl from "@testing-library/react"; 
import Dashboard from "./components/Dashboard";
import Display from "./components/Display"; import { exportAllDeclaration } from '@babel/types';


test('renders without crashing', () => {
  const MainApp = rtl.render(<App />); 
  expect(MainApp).toBeVisible
}); 

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   // ReactDOM.render(<App />, div);
//   // ReactDOM.unmountComponentAtNode(div);
// });

test('renders dashboard.js ', () => {
  const div = rtl.render(<Dashboard />)
  const element = div.getByText(/strike/i)
  expect(element).toBeInTheDocument()
  expect(div).toBeVisible
})

test('renders display.js', () => {
  const div= rtl.render(<Display />)
  expect(div).toBeVisible
  expect(div).not.toContain("foul")
})
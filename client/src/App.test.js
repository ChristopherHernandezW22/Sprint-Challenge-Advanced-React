import React from 'react';
// import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/react/cleanup-after-each';
import * as rtl from "@testing-library/react";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// describe('<App />', () => {
//   it('renders without crashing', () => {
//       render(<App />);
//   });
//   it ('TEST', () => {
//     const { getByText } = render(<App />);
//     const players = getByText(/^players$/i);
//   });
// });

describe("<App />", () => {
  it("renders without crashing", () => {
    rtl.render(<App />);
  });})
 
  it('App renders', async() => {
    const app = await rtl.render(<App />)
    const dark = await app.getByText(/dark mode/i);
    rtl.fireEvent.click(dark);
    let body = document.getElementsByTagName('body');
    expect(body[0].classList.contains('dark-mode')).toBe(true);
    rtl.fireEvent.click(dark);
    expect(body[0].classList.contains('dark-mode')).toBe(false);
   })

  // it("Resets strikes after 3 strikes", () => {
  //   const wrapper = rtl.render(<App />);
  //   const strikeButton = wrapper.getByText(/^strike$/i);
  //   wrapper.getByText(/strikes: 0/i);
  //   rtl.fireEvent.click(strikeButton);
  //   wrapper.getByText(/strikes: 1/i);
  //   rtl.fireEvent.click(strikeButton);
  //   wrapper.getByText(/strikes: 2/i);
  //   rtl.fireEvent.click(strikeButton);
  //   wrapper.getByText(/strikes: 0/i);
  // });})
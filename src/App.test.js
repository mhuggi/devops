import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent, getByText } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
const waitForExpect = require("wait-for-expect")


test('Render App', () => {
  const app = render(<App />)
  expect(app).toBeDefined()
})

test('Render hello world', () => {
  const { getByText } = render(<App />);
  const helloWorld = getByText("Hello world");
  expect(helloWorld).toBeDefined();
});
/*
test('Button calls api', async () => {
    const app = render(<App />)
    const button = app.getByText('Get data')
    setTimeout(() => {
      fireEvent.click(button)
    }, 300)
    await waitForExpect(()=> {
      const apiCall = getByText('5')
      expect(apiCall).toBeDefined()  
    })
    await act(
      () =>
        new Promise((resolve) => {
          setImmediate(() => {
            app.update();
            resolve();
          });
        })
    );
    


})
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent, getByText } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('Render App', () => {
  const app = render(<App />)
  expect(app).toBeDefined()
})

test('Render hello world', () => {
  const { getByText } = render(<App />);
  const helloWorld = getByText("asd");
  expect(helloWorld).toBeDefined();
});

test('Button calls api', () => {
  const { getByText } = render(<App />)
  const button = getByText('Get data')
  act(() => {
    button.dispatchEvent(new MouseEvent('click'))
  })

})

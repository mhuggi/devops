import React, { Component } from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Render App', () => {
  const app = render(<App />)
  expect(app).toBeDefined()
})

test('Render hello world', () => {
  const { getByText } = render(<App />);
  const helloWorld = getByText("Hello world");
  expect(helloWorld).toBeDefined();
});

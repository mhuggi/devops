import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent, getByText, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
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

test('Button calls api', async () => {
    const app = render(<App />)
    const button = app.getByText('fail test')
    fireEvent.click(button)
    const data = await waitForElement(() => app.getByText('5 : 5'))

    expect(data).toBeDefined()



})

import React from 'react'
import { render } from '@testing-library/react'
import Title from '../components/Title';


test('renders page about', () => {
  const { getByText } = render(<Title label="abc"/>)
  const linkElement = getByText(
    /abc/
  )
  expect(linkElement).toBeInTheDocument()
});

test('uni test common function', () => {
    const common = require('../utility/common');
    expect(common.sum1(2,3)).toBe(5);
  })

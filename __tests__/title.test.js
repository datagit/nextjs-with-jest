import React from 'react'
import { render } from '@testing-library/react'
import Title from '../components/Title';


test('renders page about', () => {
  const { getByText } = render(<Title label="abc"/>)
  const linkElement = getByText(
    /abc/
  )
  expect(linkElement).toBeInTheDocument()
})

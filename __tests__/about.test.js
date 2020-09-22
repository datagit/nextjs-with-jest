import React from 'react'
import { render } from '@testing-library/react'
// for toMatchSnapshot
import renderer from 'react-test-renderer'
import About from '../pages/about'


test('renders page about', () => {
  const { getByText } = render(<About />)
  const linkElement = getByText(
    /this is about/
  )
  expect(linkElement).toBeInTheDocument()
})


it('renders about unchanged', () => {
    const tree = renderer.create(<About />).toJSON()
    expect(tree).toMatchSnapshot()
  })
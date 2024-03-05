import { Example } from './Example'
import { render } from '@testing-library/react'

it('renders', () => {
  const tree = render(<Example />)
  expect(tree.getByText('Hello!')).toBeInTheDocument()
})

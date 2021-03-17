import { render, screen } from '@testing-library/react'

import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render the heading', () => {
    const { container } = render(<LinkWrapper />)

    expect(screen.getByRole('heading', { name: /LinkWrapper/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})

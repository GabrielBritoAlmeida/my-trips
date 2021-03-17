import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render and children', () => {
    renderWithTheme(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByText(/anything/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})

import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map/>', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    )
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'São José',
      slug: 'sao-jose',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Rio de Janeiro',
      slug: 'rio-de-janeiro',
      location: {
        latitude: 30,
        longitude: 55
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/são josé/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Rio de Janeiro/i)).toBeInTheDocument()
  })
})

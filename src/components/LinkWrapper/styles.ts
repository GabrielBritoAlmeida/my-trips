import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  position: fixed;
  z-index: 1100;
  top: ${theme.spacings.medium};
  right: ${theme.spacings.medium};
  color: ${theme.colors.white};
  cursor: pointer;

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: ${theme.colors.highlight};
    }
  }
`

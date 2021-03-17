import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: ${theme.grid.container};
  margin: auto;
`

export const Heading = styled.h1`
  font-size: ${theme.font.sizes.large};
  margin-bottom: ${theme.font.sizes.large};
`

export const Body = styled.div``

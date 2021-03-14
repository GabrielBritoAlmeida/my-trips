import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    p {
      font-size: 2rem;
      line-height: ${theme.font.sizes.medium};
    }

    a {
      color: ${theme.colors.highlight};
    }

    body {
      font-family: ${theme.font.family};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.white};
      `}
    }
  `}
`

export default GlobalStyles

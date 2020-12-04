import Head from 'next/head';
import { createGlobalStyle, ThemeProvider, css } from 'styled-components';

import { Header, Container } from 'styles/app.styles';

const theme = {
  purple: '#8d92ff',
  pink: '#ff98c7',
  blue: '#86cfff',
  orange: '#ffc78a',
  backgroundDark: '#F5F6FB',
  backgroundLight: '#F2F3F8',
  backgroundWhite: '#FFFFFF',
  color: '#8B95AA',
};

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
    outline: none;
  }

  body {
    margin: 0;
    padding: 0 20px;
    min-height: 100vh;
    width: 100%;
    background: ${theme.backgroundDark};
    background: linear-gradient(
      15deg,
      ${theme.backgroundDark} 0%,
      ${theme.backgroundLight} 100%
    );
    color: ${theme.color};
    font-size: 1.2rem;
  }
`}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Emoji Game</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Header>Emoji Game</Header>

        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

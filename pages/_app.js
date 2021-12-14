import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: Arial, Helvetica, sans-serif;
            src: url();
          }
          *,
          ::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            background-color: #e5eaee;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

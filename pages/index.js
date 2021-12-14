import { css } from '@emotion/react';
import Header from '../Components/Header';
import Main from '../Components/Landing';

const wrapperMain = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1400px;
`;

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

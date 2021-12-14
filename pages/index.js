import { css } from '@emotion/react';
import Image from 'next/image';
import MiddleBox from '../Components/BoxMiddle';
import Header from '../Components/Header';
import Main from '../Components/Landing';
import News from '../Components/News-Dates';
import Text from '../Components/Text';

const masterWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1400px;
`;

const trioWrapper = css`
  display: flex;
  max-width: 1400px;
  justify-content: space-between;
  position: relative;
  top: -140px;
  z-index: -2;
`;

const trioStyle = css`
  display: inline-flex;
  .TrioLeft {
    width: 350px;
    height: 360px;
    position: relative;
  }
  .TrioLeft2 {
    width: 350px;
    height: 360px;
    background: black;
  }
`;

const trioStyle2 = css`
  display: inline-flex;
  width: 700px;
  height: 360px;
  position: relative;
`;

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Main />

        <div css={trioWrapper}>
          <div css={trioStyle}>
            <div className="TrioLeft"></div>
            <div className="TrioLeft2"></div>
          </div>

          <div css={trioStyle2}>
            <div className="TrioRight">
              <Image src="/Adria.png" alt="Map of the Adriatic" layout="fill" />
            </div>
          </div>
        </div>
        <MiddleBox />
        <News />
        <Text />
      </div>
    </div>
  );
}

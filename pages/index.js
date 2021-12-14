import { css } from '@emotion/react';
import Image from 'next/image';
import MiddleBox from '../Components/BoxMiddle';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Main from '../Components/Landing';
import News from '../Components/News-Dates';
import Team from '../Components/Team';
import Text from '../Components/Text';

const masterWrapper = css`
  max-width: 1400px;
  z-index: -10;
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

const path = css`
  max-width: 1400px;
  height: 354px;
  position: relative;
  top: -390px;
`;

const blackBreak = css`
  background-image: url('/Rectangle_1.png');
  max-width: 1400px;
  height: 160px;
  background-color: #ffffff;
  position: relative;
  z-index: -1;
  top: -550px;
`;

export default function Home() {
  return (
    <div css={masterWrapper}>
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
              <Image
                src="/Adria1.png"
                alt="Map of the Adriatic"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <MiddleBox />
        <News />
        <Text />
        <div css={path}>
          <Image src="/path.png" alt="Path Illustration" layout="fill" />
        </div>
        <div css={blackBreak} />
        <Team />
        <Footer />
      </div>
    </div>
  );
}

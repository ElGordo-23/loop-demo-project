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
  .TextLeft {
    position: relative;
    top: 195px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
  .TrioLeft2 {
    width: 350px;
    height: 360px;
    background: black;
  }
  .TrioLeft h3 {
    color: #c4132f;
    text-transform: uppercase;
  }

  .TextLeft .DateWrapper {
    display: flex;
    gap: 15px;
    align-items: baseline;
  }
  .TrioLeft .CalendarImage {
    position: relative;
    height: 28px;
    width: 28px;
  }

  .TrioLeft .Date {
    width: 88px;
    height: 12px;
    font-family: Arial;
    color: #717171;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
  }

  .TrioLeft2 .WhiteText {
    color: white;
  }

  .TrioLeft2 .CalendarImage {
    position: relative;
    height: 28px;
    width: 28px;
  }

  .TrioLeft2 .Date {
    width: 88px;
    height: 12px;
    font-family: Arial;
    color: #717171;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
  }

  .TrioLeft2 h3 {
    color: #c4132f;
    text-transform: uppercase;
  }

  .TextLeft .DateWrapper {
    display: flex;
    gap: 15px;
    align-items: baseline;
  }
  .TrioLeft2 .CalendarImage {
    position: relative;
    height: 28px;
    width: 28px;
  }

  .TrioLeft2 .Date {
    width: 88px;
    height: 12px;
    font-family: Arial;
    color: #717171;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
  }
`;

const trioStyle2 = css`
  display: inline-flex;
  width: 700px;
  height: 360px;
  position: relative;
  .TrioRight {
    height: inherit;
    width: inherit;
  }

  .TrioRight .TextRight {
    position: relative;
    top: 170px;
    margin-left: 40px;
    margin-bottom: 40px;
    h2 {
      text-transform: uppercase;
      color: #000000;
      font-size: 40px;
      font-weight: 700;
      line-height: 13.706px;
      margin: 0;
    }
    h3 {
      text-transform: uppercase;
      color: #c4132f;
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 24px;
    }

    h4 {
      margin: 0;
      text-transform: uppercase;
    }
  }
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
            <div className="TrioLeft">
              <div className="TextLeft">
                <div className="DateWrapper">
                  <div className="CalendarImage">
                    <Image src="/Calendar.png" alt="Calendar" layout="fill" />
                  </div>
                  <p className="Date">23.Mai.2021</p>
                </div>
                <h3>News Headline</h3>
                <p>
                  Lorem Ipsum. Proin gravida nibh velit auctor aliquet. Aenean
                  sollicitudin.
                </p>
              </div>
            </div>
            <div className="TrioLeft2">
              <div className="TextLeft">
                <div className="DateWrapper">
                  <div className="CalendarImage">
                    <Image src="/Calendar.png" alt="Calendar" layout="fill" />
                  </div>
                  <p className="Date">23.Mai.2021</p>
                </div>
                <h3>News Headline</h3>
                <p className="WhiteText">
                  Lorem Ipsum. Proin gravida nibh velit auctor aliquet. Aenean
                  sollicitudin.
                </p>
              </div>
            </div>
          </div>

          <div css={trioStyle2}>
            <div className="TrioRight">
              <Image
                src="/Adria1.png"
                alt="Map of the Adriatic"
                layout="fill"
              />
              <div className="TextRight">
                <h2>17 Mai</h2>
                <h3>Headline Beitrag 2021</h3>
                <h4>Subtitle</h4>
                <p>
                  Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor.
                </p>
              </div>
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

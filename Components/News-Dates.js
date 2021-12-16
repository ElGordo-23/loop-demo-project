import { css } from '@emotion/react';
import Image from 'next/image';

const newsWrapper = css`
  display: flex;
  max-width: 1400px;
  height: 280px;
  position: relative;
  top: -140px;
`;

const wrapperBlocks = css`
  height: 280px;
  width: 700px;
  position: relative;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  .ContentWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    color: white;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    .IconWrapper {
      position: relative;
      height: 40px;
      width: 40px;
      margin-bottom: 10px;
    }

    p {
      margin: 0;
    }
  }
`;

export default function News() {
  return (
    <div css={newsWrapper}>
      <div css={wrapperBlocks}>
        <Image src="/Sails-half.png" alt="Sailingboats" layout="fill" />
        <div className="ContentWrapper">
          <div className="IconWrapper">
            <Image src="/Newspaper.png" alt="Newspaper Icon" layout="fill" />
          </div>
          <p>
            News+
            <br />
            Bilder
          </p>
        </div>
      </div>
      <div css={wrapperBlocks}>
        <div className="ContentWrapper">
          <div className="IconWrapper">
            <Image src="/CalendarWhite.png" alt="Calendar Icon" layout="fill" />
          </div>
          <p>Segelteam</p>
          <p>Terine 2021 </p>
        </div>
      </div>
    </div>
  );
}

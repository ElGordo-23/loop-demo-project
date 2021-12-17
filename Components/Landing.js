import { css } from '@emotion/react';
import Image from 'next/image';

const mainWrapper = css`
  width: 100%;
  max-width: 1400px;
  height: 780px;
  position: relative;
  background-image: url('/Boat.png');
  top: -58px;
  z-index: -1;
  text-align: center;
  h1 {
    text-transform: uppercase;
    font-family: Arial;
    color: #c4132f;
    top: 180px;
    left: 370px;
    margin: 0;
    font-weight: 700;
    position: relative;
    top: 180px;
    font-size: 66px;
  }
  h2 {
    width: 530px;
    margin: 0;
    position: relative;
    left: 800px;
    top: 190px;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1px;
  }
  .Compass {
    width: 252px;
    height: 423px;
    position: relative;
    left: 1146px;
    top: -60px;
    opacity: 0.6;
  }
`;

export default function Main() {
  return (
    <div css={mainWrapper}>
      <h1>
        Lorem Ipsum <br /> Proin Gravi
      </h1>
      <h2>
        Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
        sollicitudin, lorem quis bibendum auctor.
      </h2>
      <div className="Compass">
        <Image src="/compass.png" alt="Compass" layout="fill" />
      </div>
    </div>
  );
}

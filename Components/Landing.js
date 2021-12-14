import { css } from '@emotion/react';

const mainWrapper = css`
  width: 100%;
  max-width: 1400px;
  height: 780px;
  position: relative;
  background-image: url('/Boat.png');
  top: -58px;
  z-index: -1;
  h1 {
    text-transform: uppercase;
    font-family: Arial;
    color: #c4132f;
    font-weight: 300;
    left: 850px;
    right: 30px;
    position: relative;
    top: 180px;
    font-size: 50px;
  }
`;

export default function Main() {
  return (
    <div css={mainWrapper}>
      <h1>
        Lorem Ipsum <br /> Proin Gravi
      </h1>
    </div>
  );
}

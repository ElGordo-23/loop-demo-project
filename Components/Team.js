import { css } from '@emotion/react';

const mainTeamWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1344px;
  max-width: 1400px;
  position: relative;
  top: -550px;
  background-color: #000000;
  z-index: -2;
`;

const headlineStyle = css`
  text-align: center;
  text-transform: uppercase;
  font-family: Arial;
  background-color: #000000;
  margin-top: 80px;

  h2 {
    color: #ffffff;
    font-size: 12.46px;
    font-weight: 700;
    line-height: 13.706px;
    transform: scale(4.008, 3.998);
  }
  h3 {
    color: #ffffff;
    padding-bottom: 10px;
    margin-top: 35px;
    border-bottom: 1px solid #bbbbbb;
    width: 400px;
  }
`;

export default function Team() {
  return (
    <div css={mainTeamWrapper}>
      <div css={headlineStyle}>
        <h2>Unser Team</h2>
        <h3>Subtitles von unserem Team</h3>
      </div>
    </div>
  );
}

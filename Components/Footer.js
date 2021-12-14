import { css } from '@emotion/react';
import Image from 'next/image';

const footerWrapper = css`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  height: 124px;
  position: relative;
  top: -550px;
  align-items: center;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
`;

const twitterContainer = css`
  position: relative;
  height: 32px;
  width: 40px;
`;

const fbContainer = css`
  position: relative;
  height: 32px;
  width: 16px;
`;
const imprintContainer = css`
  display: flex;
  gap: 20px;
  a {
    cursor: pointer;
  }
`;

const icons = css`
  display: flex;
  gap: 15px;
  cursor: pointer;
  width: 66px;
`;
export default function Footer() {
  return (
    <div css={footerWrapper}>
      <div>© 2021. Segel-Team. Alle Rechte vorbehalten</div>
      <div css={icons}>
        <div css={twitterContainer}>
          <Image src="/twitter.png" alt="Twitter icon" layout="fill" />
        </div>
        <div css={fbContainer}>
          <Image src="/facebook.png" alt="Twitter icon" layout="fill" />
        </div>
      </div>
      <div css={imprintContainer}>
        <a>Impressum</a>
        <a>Datenschutz</a>
        <a>Rechtliches</a>
        <a>Copyright</a>
      </div>
    </div>
  );
}

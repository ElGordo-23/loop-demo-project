import { css } from '@emotion/react';
import Image from 'next/image';

const newsWrapper = css`
  display: flex;
  max-width: 1400px;
  height: 280px;
  position: relative;
  top: -140px;
`;

const wrapperLeft = css`
  height: 280px;
  width: 700px;
  position: relative;
  background: black;
`;

export default function News() {
  return (
    <div css={newsWrapper}>
      <div css={wrapperLeft}>
        <Image src="/Sails-half.png" alt="Sailingboats" layout="fill" />
      </div>
      <div css={wrapperLeft}></div>
    </div>
  );
}

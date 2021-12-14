import { css } from '@emotion/react';
import Image from 'next/image';

const imageWrapper = css`
  position: relative;
  height: 560px;
  width: 700px;
`;
const smallImageWrapper = css`
  position: relative;
  height: 280px;
  width: 350px;
`;

const trioWrapper2 = css`
  display: flex;
  max-width: 1400px;
  height: 560px;
  position: relative;
  z-index: -3;
  top: -140px;
`;

const rightSide = css`
  width: 700px;
  display: flex;
  flex-direction: column;
`;

const imagesWrapper = css`
  display: flex;
  justify-content: space-between;
  height: 280px;
`;

export default function MiddleBox() {
  return (
    <div css={trioWrapper2}>
      <div css={imageWrapper}>
        <Image src="/Raceboat.png" alt="A racingboat" layout="fill" />
      </div>
      <div css={rightSide}>
        <div className="Route">
          <Image
            src="/Adria-Route.jpg"
            alt="Map of the Adriatic"
            height="260px"
            width="700px"
          />
          <div css={imagesWrapper}>
            <div css={smallImageWrapper}>
              <Image src="/Sailors.png" alt="Sailors on a boat" layout="fill" />
            </div>
            <div css={smallImageWrapper}>
              <Image
                src="/HR-Flag.png"
                alt="The Flag of Craotia"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

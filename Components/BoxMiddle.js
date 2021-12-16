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
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  .TextOverRoute {
    position: relative;
    top: 284px;
    margin-left: 40px;
    margin-bottom: 40px;
    z-index: 1;
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
    .Route {
      z-index: -1;
    }
  }
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
        <div className="TextOverRoute">
          <h2>03 Okt</h2>
          <h3>Headline Beitrag 2021</h3>
          <h4>Subtitle - Ort - Jahr</h4>
          <p>
            Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor.
          </p>
        </div>

        <div className="Route">
          <Image
            src="/Adria-Route.jpg"
            alt="Map of the Adriatic"
            height="280px"
            width="700px"
          />

          <div css={imagesWrapper}>
            <div css={smallImageWrapper}>
              <Image
                src="/HR-Flag.png"
                alt="The Flag of Craotia"
                layout="fill"
              />
            </div>
            <div css={smallImageWrapper}>
              <Image src="/Sailors.png" alt="Sailors on a boat" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

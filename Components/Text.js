import { css } from '@emotion/react';

const mainTextWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 850px;
  max-width: 1400px;
  position: relative;
  top: -140px;
  background-color: #ffffff;
  z-index: -2;
`;

const headlineStyle = css`
  text-align: center;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-family: Arial;
  background-color: #ffffff;
  margin-top: 80px;

  h2 {
    color: #000000;
    font-size: 12.46px;
    font-weight: 700;
    line-height: 13.706px;
    transform: scale(4.008, 3.998);
  }
  h3 {
    padding-bottom: 10px;
    margin-top: 35px;
    border-bottom: 1px solid #bbbbbb;
    width: 400px;
  }
`;

const textWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: Arial;
  color: #727271;
  font-weight: 400;
  line-height: 22px;
  text-align: justify;

  .Text {
    width: 700px;
    height: 390px;
    padding-left: 90px;
    padding-right: 90px;
    margin-left: -30px;
    margin-right: -30px;
  }
`;

export default function Text() {
  return (
    <div css={mainTextWrapper}>
      <div css={headlineStyle}>
        <h2>Headline - Lorem Ipsum</h2>
        <h3>Subtitle Lorem Ipsum </h3>
      </div>
      <div css={textWrapper}>
        <div className="Text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br /> Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <div className="Text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas <br />
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
}

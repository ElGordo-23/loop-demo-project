import { css } from '@emotion/react';
import Image from 'next/image';

const navWrapper = css`
  display: flex;
  width: 1400px;
  height: 82px;
  justify-content: space-between;
  font-family: Arial;
  font-weight: bold;
  background: white;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    text-align: center;
    width: 700px;
    height: 82px;
    margin-left: 10px;
    padding: 40px;
  }
  nav p {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  div {
    background-color: #c4132f;
    height: 82px;
    width: 450px;
  }

  Image {
    margin: 5px;
  }
`;

export default function Header() {
  return (
    <div css={navWrapper}>
      <nav>
        <p>About Us</p>
        <p>Gallery</p>
        <p>Crew</p>
        <p>Contact</p>
      </nav>
      <div>
        <Image
          src="/SegelTeam_Logo.png"
          alt="Logo"
          height="52px"
          width="264px"
        />
      </div>
    </div>
  );
}

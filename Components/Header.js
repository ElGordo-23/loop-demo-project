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
    gap: 40px;
    align-items: center;
    text-transform: uppercase;
    text-align: center;
    width: 700px;
    height: 82px;
    margin-left: 10px;
    padding: 40px;
  }
  nav a {
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
        <a>About Us</a>
        <a>Gallery</a>
        <a>Crew</a>
        <a>Contact</a>
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

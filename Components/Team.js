import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';

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

const crewListStyle = css`
  ul {
    max-width: 1400px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, minmax(280px, 0fr));
    padding: 0;
  }

  li {
    list-style: none;
    height: 280px;
    width: 280px;
  }
`;

const imageWrapper = css`
  height: 280px;
  width: 280px;
  position: relative;
`;

export const crew = [
  {
    id: '1',
    image: '/Crew/Crew1.jpg',
    name: 'Crew Member 1',
    duties: 'Tactic and Trim',
    duty_slugs: ['tactic', 'trim'],
  },
  {
    id: '2',
    image: '/Crew/Crew2.jpg',
    name: 'Crew Member 2',
    duties: 'Helmsman',
    duty_slugs: ['helmsman'],
  },
  {
    id: '3',
    image: '/Crew/Crew3.jpg',
    name: 'Crew Member 3',
    duties: 'Helmsman and Tactic',
    duty_slugs: ['helmsman', 'tactic'],
  },
  {
    id: '4',
    image: '/Crew/Crew4.jpg',
    name: 'Crew Member 4',
    duties: 'Main Helmsman',
    duty_slugs: ['helmsman'],
  },
  {
    id: '5',
    image: '/Crew/Crew5.jpg',
    name: 'Crew Member 5',
    duties: 'Helmsman and Trim',
    duty_slugs: ['helmsman', 'trim'],
  },
  {
    id: '6',
    image: '/Crew/Crew6.jpg',
    name: 'Crew Member 6',
    duties: 'Trim',
    duty_slugs: ['trim'],
  },
  {
    id: '7',
    image: '/Crew/Crew7.jpg',
    name: 'Crew Member 7',
    duties: 'Tactic and Trim',
    duty_slugs: ['tactic', 'trim'],
  },
  {
    id: '8',
    image: '/Crew/Crew8.jpg',
    name: 'Crew Member 8',
    duties: 'Helmsman and Trim',
    duty_slugs: ['helmsman', 'trim'],
  },
  {
    id: '9',
    image: '/Crew/Crew9.jpg',
    name: 'Crew Member 9',
    duties: 'Junior Helmsman',
    duty_slugs: ['helmsman'],
  },
  {
    id: '10',
    image: '/Crew/Crew10.jpg',
    name: 'Crew Member 10',
    duties: 'Tactic and Trim',
    duty_slugs: ['tactic', 'trim'],
  },
  {
    id: '11',
    image: '/Crew/Crew11.jpg',
    name: 'Crew Member 11',
    duties: 'Senior Helmsman and Trim',
    duty_slugs: ['helmsman', 'trim'],
  },
  {
    id: '12',
    image: '/Crew/Crew12.jpg',
    name: 'Crew Member 12',
    duties: 'Tactic',
    duty_slugs: ['tactic'],
  },
  {
    id: '13',
    image: '/Crew/Crew13.jpg',
    name: 'Crew Member 13',
    duties: 'Trim',
    duty_slugs: ['trim'],
  },
  {
    id: '14',
    image: '/Crew/Crew14.jpg',
    name: 'Crew Member 14',
    duties: 'Tactic and Trim',
    duty_slugs: ['tactic', 'trim'],
  },
  {
    id: '15',
    image: '/Crew/Crew14.jpg',
    name: 'Crew Member 15',
    duties: 'Tactic',
    duty_slugs: ['tactic'],
  },
];

export default function Team() {
  const [filterTeam, setFilterTeam] = useState('');

  const [displNum, setDisplNum] = useState(10);

  const teamfilter = crew.filter((e) => {
    return e.duty_slugs.includes({ filterTeam }) === true;
  });

  console.log(teamfilter);

  const crewFilter = css`
    height: 21px;
    width: 356px;
    color: white;
    display: flex;
    gap: 48px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
    p {
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  `;

  return (
    <div css={mainTeamWrapper}>
      <div css={headlineStyle}>
        <h2>Unser Team</h2>
        <h3>Subtitles von unserem Team</h3>
      </div>
      <div css={crewFilter}>
        <p className="ShowAll">Show All</p>
        <p className="Trim" onClick={() => setFilterTeam('trim')}>
          Trim
        </p>
        <p className="Tactic">Tactic</p>
        <p className="Helmsman">Helmsman</p>
      </div>
      <div css={crewListStyle}>
        <ul>
          {crew.slice(0, displNum).map((crewmember) => {
            return (
              <li key={`crewmember-li-${crewmember.id}`}>
                <div css={imageWrapper}>
                  <Image
                    src={crewmember.image}
                    alt="Image of a crewmember"
                    layout="fill"
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <button onClick={() => setDisplNum(15)}>Load more</button>
      </div>
    </div>
  );
}

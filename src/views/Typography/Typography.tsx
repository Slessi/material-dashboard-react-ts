import { withStyles } from '@material-ui/core';
import {
  Danger,
  Info,
  Muted,
  P,
  Primary,
  Quote,
  RegularCard,
  Small,
  Success,
  Warning,
} from 'components';
import * as React from 'react';

interface Props {
  classes: {
    typo: string;
    note: string;
  };
}

const TypographyPage: React.SFC<Props> = ({ classes: { typo, note } }) => {
  return (
    <RegularCard
      cardTitle={'Material Dashboard Heading'}
      cardSubtitle={'Created using Roboto Font Family'}
      content={
        <div>
          <div className={typo}>
            <div className={note}>Header 1</div>
            <h1>The Life of Material Dashboard</h1>
          </div>
          <div className={typo}>
            <div className={note}>Header 2</div>
            <h2>The Life of Material Dashboard</h2>
          </div>
          <div className={typo}>
            <div className={note}>Header 3</div>
            <h3>The Life of Material Dashboard</h3>
          </div>
          <div className={typo}>
            <div className={note}>Header 4</div>
            <h4>The Life of Material Dashboard</h4>
          </div>
          <div className={typo}>
            <div className={note}>Header 5</div>
            <h5>The Life of Material Dashboard</h5>
          </div>
          <div className={typo}>
            <div className={note}>Header 6</div>
            <h6>The Life of Material Dashboard</h6>
          </div>
          <div className={typo}>
            <div className={note}>Paragraph</div>
            <P>
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </P>
          </div>
          <div className={typo}>
            <div className={note}>Quote</div>
            <Quote
              // tslint:disable-next-line:max-line-length
              text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
              author=" Kanye West, Musician"
            />
          </div>
          <div className={typo}>
            <div className={note}>Muted Text</div>
            <Muted>
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </Muted>
          </div>
          <div className={typo}>
            <div className={note}>Primary Text</div>
            <Primary>
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </Primary>
          </div>
          <div className={typo}>
            <div className={note}>Info Text</div>
            <Info>
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </Info>
          </div>
          <div className={typo}>
            <div className={note}>Success Text</div>
            <Success>
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </Success>
          </div>
          <div className={typo}>
            <div className={note}>Warning Text</div>
            <Warning>
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </Warning>
          </div>
          <div className={typo}>
            <div className={note}>Danger Text</div>
            <Danger>
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </Danger>
          </div>
          <div className={typo}>
            <div className={note}>Small Tag</div>
            <h2>
              Header with small subtitle<br />
              <Small>Use "Small" tag for the headers</Small>
            </h2>
          </div>
        </div>
      }
    />
  );
};

export default withStyles({
  typo: {
    paddingLeft: '25%',
    marginBottom: '40px',
    position: 'relative',
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: '10px',
    color: '#c0c1c2',
    display: 'block',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '13px',
    left: '0',
    marginLeft: '20px',
    position: 'absolute',
    width: '260px',
  },
})(TypographyPage);

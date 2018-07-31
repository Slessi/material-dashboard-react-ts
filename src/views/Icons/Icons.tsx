import { Grid, Hidden, withStyles } from '@material-ui/core';
import iconsStyle from 'assets/jss/material-dashboard-react/iconsStyle';
import { A, ItemGrid, P, RegularCard } from 'components';
import * as React from 'react';

interface Props {
  classes: {
    iframe: string;
  };
}

const Icons: React.SFC<Props> = props => (
  <Grid container>
    <ItemGrid xs={12} sm={12} md={12}>
      <RegularCard
        plainCard
        cardTitle="Material Design Icons"
        cardSubtitle={
          <P>
            Handcrafted by our friends from{' '}
            <A
              href="https://design.google.com/icons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </A>
          </P>
        }
        content={
          <div>
            <Hidden only={['sm', 'xs']}>
              <iframe
                className={props.classes.iframe}
                src="https://material.io/icons/"
                title="Icons iframe"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Hidden>
            <Hidden only={['lg', 'md']}>
              <ItemGrid xs={12} sm={12} md={6}>
                <h5>
                  The icons are visible on Desktop mode inside an iframe. Since
                  the iframe is not working on Mobile and Tablets please visit
                  the icons on their original page on Google. Check the
                  <a
                    href="https://design.google.com/icons/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Material Icons
                  </a>
                </h5>
              </ItemGrid>
            </Hidden>
          </div>
        }
      />
    </ItemGrid>
  </Grid>
);

export default withStyles(iconsStyle)(Icons);

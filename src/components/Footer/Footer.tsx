import { List, ListItem, withStyles } from '@material-ui/core';
import footerStyle from 'assets/jss/material-dashboard-react/footerStyle';
import * as React from 'react';

interface Props {
  classes: {
    footer: string;
    container: string;
    left: string;
    list: string;
    inlineBlock: string;
    block: string;
    right: string;
    a: string;
  };
}

const Footer: React.SFC<Props> = props => {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#company" className={classes.block}>
                Company
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#portfolio" className={classes.block}>
                Portfolio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#blog" className={classes.block}>
                Blog
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {new Date().getFullYear()}
            <a href="http://www.creative-tim.com" className={classes.a}>
              Creative Tim
            </a>, made with love for a better web
          </span>
        </p>
      </div>
    </footer>
  );
};

export default withStyles(footerStyle)(Footer);

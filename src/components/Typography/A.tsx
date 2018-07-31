import { withStyles } from '@material-ui/core';
import typographyStyle from 'assets/jss/material-dashboard-react/typographyStyle';
import * as React from 'react';

interface Props {
  classes: {
    defaultFontStyle: string;
    aStyle: string;
  };
}

const A: React.SFC<
  Props &
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
> = props => {
  const { classes, children, ...rest } = props;

  return (
    <a {...rest} className={classes.defaultFontStyle + ' ' + classes.aStyle}>
      {children}
    </a>
  );
};

export default withStyles(typographyStyle)(A);

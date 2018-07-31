import { withStyles } from '@material-ui/core';
import typographyStyle from 'assets/jss/material-dashboard-react/typographyStyle';
import * as React from 'react';

interface Props {
  classes: {
    defaultFontStyle: string;
    smallText: string;
  };
}

const Small: React.SFC<Props> = props => {
  const { classes, children } = props;

  return (
    <div className={classes.defaultFontStyle + ' ' + classes.smallText}>
      {children}
    </div>
  );
};

export default withStyles(typographyStyle)(Small);

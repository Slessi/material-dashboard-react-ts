import { withStyles } from '@material-ui/core';
import typographyStyle from 'assets/jss/material-dashboard-react/typographyStyle';
import * as React from 'react';

interface Props {
  classes: {
    defaultFontStyle: string;
    dangerText: string;
  };
}

const Danger: React.SFC<Props> = props => {
  const { classes, children } = props;

  return (
    <div className={classes.defaultFontStyle + ' ' + classes.dangerText}>
      {children}
    </div>
  );
};

export default withStyles(typographyStyle)(Danger);

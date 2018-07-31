import { withStyles } from '@material-ui/core';
import typographyStyle from 'assets/jss/material-dashboard-react/typographyStyle';
import * as React from 'react';

interface Props {
  classes: {
    defaultFontStyle: string;
    successText: string;
  };
}

const Success: React.SFC<Props> = props => {
  const { classes, children } = props;

  return (
    <div className={classes.defaultFontStyle + ' ' + classes.successText}>
      {children}
    </div>
  );
};

export default withStyles(typographyStyle)(Success);

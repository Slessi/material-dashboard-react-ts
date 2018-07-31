import { Grid, withStyles } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';
import * as React from 'react';

interface Props {
  classes: {
    grid: string;
  };
}

const ItemGrid: React.SFC<
  Props & Pick<GridProps, Exclude<keyof GridProps, keyof Props>>
> = props => {
  const { classes, children, ...rest } = props;

  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export default withStyles({
  grid: {
    padding: '0 15px !important',
  },
})(ItemGrid);

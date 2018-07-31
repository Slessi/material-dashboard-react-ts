import { IconButton, withStyles } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
import iconButtonStyle from 'assets/jss/material-dashboard-react/iconButtonStyle';
import * as React from 'react';

interface Props {
  classes: {
    button: string;
  };

  color?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'rose'
    | 'white'
    | 'simple';
  customClass?: string;
  disabled?: boolean;
}

const IconCustomButton: React.SFC<
  Props & Pick<IconButtonProps, Exclude<keyof IconButtonProps, keyof Props>>
> = props => {
  const { classes, color, children, customClass, ...rest } = props;

  return (
    <IconButton
      {...rest}
      className={
        classes.button +
        (color ? ' ' + classes[color] : '') +
        (customClass ? ' ' + customClass : '')
      }
    >
      {children}
    </IconButton>
  );
};

export default withStyles(iconButtonStyle)(IconCustomButton);

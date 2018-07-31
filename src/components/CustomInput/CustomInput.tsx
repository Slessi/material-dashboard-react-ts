import { FormControl, Input, InputLabel, withStyles } from '@material-ui/core';
import { FormControlProps } from '@material-ui/core/FormControl';
import { Check, Clear } from '@material-ui/icons';
import customInputStyle from 'assets/jss/material-dashboard-react/customInputStyle';
import * as cx from 'classnames';
import * as React from 'react';

interface Props {
  classes: {
    labelRootError: string;
    labelRootSuccess: string;
    underlineError: string;
    underlineSuccess: string;
    underline: string;
    marginTop: string;
    formControl: string;
    labelRoot: string;
    disabled: string;
    feedback: string;
  };

  labelText?: React.ReactNode;
  labelProps?: object;
  id?: string;
  inputProps?: object;
  formControlProps?: FormControlProps;
  error?: boolean;
  success?: boolean;
}

const CustomInput: React.SFC<Props> = props => {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success,
  } = props;

  const labelClasses = cx({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error,
  });

  const underlineClasses = cx({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  });

  const marginTop = cx({
    [classes.marginTop]: labelText === undefined,
  });

  const formControlClasses = cx(
    formControlProps && formControlProps.className,
    classes.formControl,
  );

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
      {error ? (
        <Clear className={classes.feedback + ' ' + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + ' ' + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
};

export default withStyles(customInputStyle)(CustomInput);

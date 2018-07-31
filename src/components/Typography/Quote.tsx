import { withStyles } from '@material-ui/core';
import typographyStyle from 'assets/jss/material-dashboard-react/typographyStyle';
import * as React from 'react';

interface Props {
  classes: {
    defaultFontStyle: string;
    quote: string;
    quoteText: string;
    quoteAuthor: string;
  };

  text?: React.ReactNode;
  author?: React.ReactNode;
}

const Quote: React.SFC<Props> = props => {
  const { classes, text, author } = props;

  return (
    <blockquote className={classes.defaultFontStyle + ' ' + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
};

export default withStyles(typographyStyle)(Quote);

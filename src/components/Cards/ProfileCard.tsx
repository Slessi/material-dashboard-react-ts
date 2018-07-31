import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  withStyles,
} from '@material-ui/core';
import profileCardStyle from 'assets/jss/material-dashboard-react/profileCardStyle';
import * as React from 'react';

interface Props {
  classes: {
    card: string;
    cardHeader: string;
    cardAvatar: string;
    textAlign: string;
    img: string;
    cardTitle: string;
    cardSubtitle: string;
    cardDescription: string;
    cardActions: string;
  };

  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  avatar?: string;
}

class ProfileCard extends React.Component<Props> {
  public render() {
    const {
      classes,
      subtitle,
      title,
      description,
      footer,
      avatar,
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            avatar: classes.cardAvatar,
          }}
          avatar={<img src={avatar} alt="..." className={classes.img} />}
        />
        <CardContent className={classes.textAlign}>
          {subtitle !== undefined ? (
            <Typography component="h6" className={classes.cardSubtitle}>
              {subtitle}
            </Typography>
          ) : null}
          {title !== undefined ? (
            <Typography component="h4" className={classes.cardTitle}>
              {title}
            </Typography>
          ) : null}
          {description !== undefined ? (
            <Typography component="p" className={classes.cardDescription}>
              {description}
            </Typography>
          ) : null}
        </CardContent>
        <CardActions className={classes.textAlign + ' ' + classes.cardActions}>
          {footer}
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(profileCardStyle)(ProfileCard);

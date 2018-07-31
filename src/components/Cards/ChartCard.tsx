import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  SvgIcon,
  Typography,
  withStyles,
} from '@material-ui/core';
import chartCardStyle from 'assets/jss/material-dashboard-react/chartCardStyle';
import * as React from 'react';

interface Props {
  classes: {
    card: string;
    cardHeader: string;
    cardContent: string;
    cardCategory: string;
    cardActions: string;
    cardStats: string;
    cardStatsIcon: string;
    cardStatsLink: string;
    cardTitle: string;
  };
  chart: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
  statIcon: typeof SvgIcon;
  statIconColor?:
    | 'warning'
    | 'primary'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'gray';

  chartColor?: 'orange' | 'green' | 'red' | 'blue' | 'purple';
  statLink?: {
    href: string;
    text: string;
  };
  statText?: React.ReactNode;
}

class ChartCard extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    statIconColor: 'gray',
    chartColor: 'purple',
  };

  public render() {
    const {
      classes,
      chartColor,
      statIconColor,
      chart,
      title,
      text,
      statLink,
      statText,
      statIcon: StatIcon,
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          className={
            classes.cardHeader + ' ' + classes[chartColor + 'CardHeader']
          }
          subheader={chart}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            variant="title"
            component="h4"
            className={classes.cardTitle}
          >
            {title}
          </Typography>
          <Typography component="p" className={classes.cardCategory}>
            {text}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.cardStats}>
            <StatIcon
              className={
                classes.cardStatsIcon +
                ' ' +
                classes[statIconColor + 'CardStatsIcon']
              }
            />
            {statLink !== undefined ? (
              <a href={statLink.href} className={classes.cardStatsLink}>
                {statLink.text}
              </a>
            ) : statText !== undefined ? (
              statText
            ) : null}
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(chartCardStyle)(ChartCard);

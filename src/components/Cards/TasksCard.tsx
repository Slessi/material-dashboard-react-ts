import {
  Card,
  CardContent,
  CardHeader,
  Tab,
  Tabs,
  Typography,
  withStyles,
} from '@material-ui/core';
import { BugReport, Cloud, Code } from '@material-ui/icons';
import tasksCardStyle from 'assets/jss/material-dashboard-react/tasksCardStyle';
import { Tasks } from 'components';
import * as React from 'react';
import { bugs, server, website } from 'variables/general';

interface Props {
  classes: {
    card: string;
    cardHeader: string;
    cardTitle: string;
    cardHeaderContent: string;
    tabsContainer: string;
    displayNone: string;
    tabWrapper: string;
    label: string;
    labelIcon: string;
    tabIcon: string;
  };
}

interface State {
  value: number;
}

class TasksCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { value: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle,
            content: classes.cardHeaderContent,
          }}
          title="Tasks:"
          action={
            <Tabs
              classes={{
                flexContainer: classes.tabsContainer,
                indicator: classes.displayNone,
              }}
              value={this.state.value}
              onChange={this.handleChange}
              textColor="inherit"
            >
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  labelIcon: classes.labelIcon,
                  label: classes.label,
                }}
                icon={<BugReport className={classes.tabIcon} />}
                label="Bugs"
              />
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  labelIcon: classes.labelIcon,
                  label: classes.label,
                }}
                icon={<Code className={classes.tabIcon} />}
                label="Website"
              />
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  labelIcon: classes.labelIcon,
                  label: classes.label,
                }}
                icon={<Cloud className={classes.tabIcon} />}
                label="Server"
              />
            </Tabs>
          }
        />
        <CardContent>
          {this.state.value === 0 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[0, 3]}
                tasksIndexes={[0, 1, 2, 3]}
                tasks={bugs}
              />
            </Typography>
          )}
          {this.state.value === 1 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[0]}
                tasksIndexes={[0, 1]}
                tasks={website}
              />
            </Typography>
          )}
          {this.state.value === 2 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[1]}
                tasksIndexes={[0, 1, 2]}
                tasks={server}
              />
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }

  private handleChange(event: React.ChangeEvent<{}>, value: any) {
    if (typeof value === 'number') {
      this.setState({ value });
    }
  }
}

export default withStyles(tasksCardStyle)(TasksCard);

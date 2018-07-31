import {
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  withStyles,
} from '@material-ui/core';
import { Check, Close, Edit } from '@material-ui/icons';
import tasksStyle from 'assets/jss/material-dashboard-react/tasksStyle';
import * as React from 'react';

interface Props {
  classes: {
    table: string;
    tableRow: string;
    tableCell: string;
    tableActions: string;
    tableActionButton: string;
    tableActionButtonIcon: string;

    checked: string;
    checkedIcon: string;
    uncheckedIcon: string;

    edit: string;
    close: string;
    tooltip: string;
  };

  checkedIndexes: number[];
  tasksIndexes: number[];
  tasks: React.ReactNode[];
}

interface State {
  checked: Props['checkedIndexes'];
}

class Tasks extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { checked: props.checkedIndexes };

    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    const { classes, tasksIndexes, tasks } = this.props;
    const { checked } = this.state;

    const tableRows = tasksIndexes.map(value => (
      <TableRow key={value} className={classes.tableRow}>
        <TableCell className={classes.tableCell}>
          <Checkbox
            checked={checked && checked.indexOf(value) !== -1}
            tabIndex={-1}
            onClick={this.handleToggle(value)}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
            }}
          />
        </TableCell>

        <TableCell className={classes.tableCell}>{tasks[value]}</TableCell>

        <TableCell className={classes.tableActions}>
          <Tooltip
            id="tooltip-top"
            title="Edit Task"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <IconButton aria-label="Edit" className={classes.tableActionButton}>
              <Edit
                className={classes.tableActionButtonIcon + ' ' + classes.edit}
              />
            </IconButton>
          </Tooltip>

          <Tooltip
            id="tooltip-top-start"
            title="Remove"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <IconButton
              aria-label="Close"
              className={classes.tableActionButton}
            >
              <Close
                className={classes.tableActionButtonIcon + ' ' + classes.close}
              />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
    ));

    return (
      <Table className={classes.table}>
        <TableBody>{tableRows}</TableBody>
      </Table>
    );
  }

  private handleToggle(value: number) {
    return () => {
      const { checked } = this.state;
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      this.setState({ checked: newChecked });
    };
  }
}

export default withStyles(tasksStyle)(Tasks);

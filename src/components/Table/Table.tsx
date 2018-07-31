import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from '@material-ui/core';
import tableStyle from 'assets/jss/material-dashboard-react/tableStyle';
import * as React from 'react';

interface Props {
  classes: {
    table: string;
    tableResponsive: string;
    tableCell: string;
    tableHeadCell: string;
  };

  tableHeaderColor?:
    | 'warning'
    | 'primary'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'gray';
  tableHead?: string[];
  tableData?: string[][];
}

const CustomTable: React.SFC<Props> = props => {
  const { classes, tableHead, tableData, tableHeaderColor } = props;

  const tableRows =
    tableData &&
    tableData.map((rowProp, rowKey) => {
      const rowCells = rowProp.map((cellProp, cellKey) => (
        <TableCell className={classes.tableCell} key={cellKey}>
          {cellProp}
        </TableCell>
      ));

      return <TableRow key={rowKey}>{rowCells}</TableRow>;
    });

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead && (
          <TableHead className={classes[tableHeaderColor + 'TableHeader']}>
            <TableRow>
              {tableHead.map((prop, key) => (
                <TableCell
                  className={classes.tableCell + ' ' + classes.tableHeadCell}
                  key={key}
                >
                  {prop}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}

        <TableBody>{tableRows}</TableBody>
      </Table>
    </div>
  );
};

CustomTable.defaultProps = {
  tableHeaderColor: 'gray',
};

export default withStyles(tableStyle)(CustomTable);

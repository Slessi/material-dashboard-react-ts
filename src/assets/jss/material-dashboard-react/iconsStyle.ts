// ##############################
// // // Icons styles
// #############################

import { StyleRules } from '@material-ui/core/styles';
import { boxShadow } from 'assets/jss/material-dashboard-react';

const iconsStyle: StyleRules = {
  iframe: {
    width: '100%',
    height: '500px',
    border: '0',
    ...boxShadow,
  },
  iframeContainer: {
    margin: '0 -20px 0',
  },
};

export default iconsStyle;

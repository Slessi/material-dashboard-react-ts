import {
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import sidebarStyle from 'assets/jss/material-dashboard-react/sidebarStyle';
import * as cx from 'classnames';
import { HeaderLinks } from 'components';
import * as React from 'react';
import { NavLink, RouteProps } from 'react-router-dom';
import { Route } from 'routes/dashboard';

interface Props {
  classes: {
    list: string;
    whiteFont: string;
    itemLink: string;
    itemIcon: string;
    itemText: string;
    logo: string;
    img: string;
    drawerPaper: string;
    open: string;
    sidebarWrapper: string;
    background: string;
    logoLink: string;
    logoImage: string;
    item: string;
  };

  handleDrawerToggle: () => void;
  open: boolean;

  color: string;
  logo: string;
  image: string;
  logoText: string;
  routes: Route[];
}

const Sidebar: React.SFC<Props & RouteProps> = props => {
  const { classes, color, logo, image, logoText, routes } = props;

  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (prop.redirect) {
          return null;
        }

        const listItemClasses = cx({
          [' ' + classes[color]]: activeRoute(prop.path),
        });

        const whiteFontClasses = cx({
          [' ' + classes.whiteFont]: activeRoute(prop.path),
        });

        return (
          <NavLink
            to={prop.path}
            className={classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {prop.icon && (
                <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                  <prop.icon />
                </ListItemIcon>
              )}
              <ListItemText
                primary={prop.sidebarName}
                className={classes.itemText + whiteFontClasses}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  var brand = (
    <div className={classes.logo}>
      <a href="https://www.creative-tim.com" className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );

  return (
    <div>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <HeaderLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName: string) {
    const { location } = props;

    return location && location.pathname.indexOf(routeName) > -1;
  }
};

export default withStyles(sidebarStyle)(Sidebar);

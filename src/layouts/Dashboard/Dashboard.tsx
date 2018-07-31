import { withStyles } from '@material-ui/core';
import logo from 'assets/img/reactlogo.png';
import image from 'assets/img/sidebar-2.jpg';
import appStyle from 'assets/jss/material-dashboard-react/appStyle';
import { Footer, Header, Sidebar } from 'components';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import * as React from 'react';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import dashboardRoutes from 'routes/dashboard';

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect) {
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      }

      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

interface Props {
  classes: {
    content: string;
    container: string;
    map: string;
    mainPanel: string;
    wrapper: string;
  };
}

interface State {
  mobileOpen: boolean;
}

class App extends React.Component<Props & RouteProps, State> {
  private mainPanel: HTMLDivElement | null = null;

  constructor(props: Props) {
    super(props);

    this.state = { mobileOpen: false };

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.getRoute = this.getRoute.bind(this);
  }

  componentDidMount() {
    if (!this.mainPanel) {
      throw new Error('mainPanel ref missing');
    }

    if (navigator.platform.indexOf('Win') > -1) {
      // tslint:disable-next-line:no-unused-expression
      new PerfectScrollbar(this.mainPanel);
    }
  }

  componentDidUpdate() {
    if (this.mainPanel) {
      this.mainPanel.scrollTop = 0;
    }
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={dashboardRoutes}
          logoText={'Creative Tim'}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref={ref => (this.mainPanel = ref)}>
          <Header
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/*
              On the /maps route we want the map to be on full screen
              this is not possible if the content and conatiner classes are present
              because they have some paddings which would make the map smaller
            */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() && <Footer />}
        </div>
      </div>
    );
  }

  private handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  private getRoute() {
    const { location } = this.props;

    return location && location.pathname !== '/maps';
  }
}

export default withStyles(appStyle)(App);

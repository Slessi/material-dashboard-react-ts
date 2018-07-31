import {
  BubbleChart,
  ContentPaste,
  Dashboard,
  LibraryBooks,
  LocationOn,
  Notifications,
  Person,
} from '@material-ui/icons';
import DashboardPage from 'views/Dashboard/Dashboard';
import Icons from 'views/Icons/Icons';
import Maps from 'views/Maps/Maps';
import NotificationsPage from 'views/Notifications/Notifications';
import TableList from 'views/TableList/TableList';
import Typography from 'views/Typography/Typography';
import UserProfile from 'views/UserProfile/UserProfile';

export type Route = typeof dashboardRoutes[0];
const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Material Dashboard',
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: '/user',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    component: UserProfile,
  },
  {
    path: '/table',
    sidebarName: 'Table List',
    navbarName: 'Table List',
    icon: ContentPaste,
    component: TableList,
  },
  {
    path: '/typography',
    sidebarName: 'Typography',
    navbarName: 'Typography',
    icon: LibraryBooks,
    component: Typography,
  },
  {
    path: '/icons',
    sidebarName: 'Icons',
    navbarName: 'Icons',
    icon: BubbleChart,
    component: Icons,
  },
  {
    path: '/maps',
    sidebarName: 'Maps',
    navbarName: 'Map',
    icon: LocationOn,
    component: Maps,
  },
  {
    path: '/notifications',
    sidebarName: 'Notifications',
    navbarName: 'Notifications',
    icon: Notifications,
    component: NotificationsPage,
  },
  {
    path: '/',
    navbarName: 'Redirect',
    redirect: true,
    to: '/dashboard',
  },
];

export default dashboardRoutes;

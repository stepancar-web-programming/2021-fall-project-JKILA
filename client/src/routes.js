import {
  BOARD, ISSUES, LOGIN_ROUTE, PROJECTS, REGISTRATION_ROUTE, WORKSPACES,
} from './utils/consts';
import Kanban from './pages/Kanban';
import Auth from './pages/Auth';
import Projects from './pages/Projects';
import Workspaces from './pages/Workspaces';
import Issues from './pages/Issue';

export const authRoutes = [
  {
    path: BOARD,
    Component: Kanban,
  },
  {
    path: `${PROJECTS}/:id`,
    Component: Projects,
  },
  {
    path: WORKSPACES,
    Component: Workspaces,
  },
  {
    path: ISSUES,
    Component: Issues,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];

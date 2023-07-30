import TaskList from "../components/Task/TaskList";

import Login from "../components/Registration/Login";
import Signup from "../components/Registration/signup";

export const UserRoutes = {
  user: [{ path: "/", component: <TaskList /> }],
  Public: [
    { path: "/register", component: <Signup /> },
    { path: "/", component: <Login /> },
  ],
};

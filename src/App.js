import React from "react";

import Routes from "./routes";

import * as NavigationService from "./services/navigation";

const App: React.FC = () => {
  return <Routes ref={(nav) => NavigationService.setNavigator(nav)} />;
};

export default App;

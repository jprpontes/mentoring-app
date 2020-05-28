import React from "react";

import Routes from "./routes";

import * as NavigationService from "./services/navigation";

function App() {
  return <Routes ref={(nav) => NavigationService.setNavigator(nav)} />;
}

export default App;

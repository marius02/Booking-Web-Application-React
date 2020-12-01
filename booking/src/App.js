import React from "react";
import Header from "./components/shared/header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { AuthProvider } from "providers/AuthProvider";
import { initStore } from "./store";

const store = initStore();
const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Header />
          <Routes />
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;

import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import { MenuList } from "./Components/MenuList";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <MenuList />;
      </Provider>
    </>
  );
};

export default App;

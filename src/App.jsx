import ShopRouter from "./components/ShopRouter";

import { Provider } from "react-redux";
import store from "./store/store";
import { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ShopRouter />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;

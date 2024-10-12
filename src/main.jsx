import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import './index.css'
import './i18n.js'
import React from "react";
import Loading from "./loading/Loading.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.Suspense fallback={<Loading />}>
      <App />
    </React.Suspense>
  </Provider>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ModalProvider from "./providers/ModalProvider.jsx";
import ToasterProvider from "./providers/ToasterProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToasterProvider />
        <ModalProvider />
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

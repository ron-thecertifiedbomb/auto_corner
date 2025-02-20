
import ReactDOM from "react-dom/client";
import { Provider, createStore } from "jotai";
import App from "./App";
import "./index.css";

const store = createStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

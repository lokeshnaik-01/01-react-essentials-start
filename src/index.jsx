import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// the root we are getting it from index.html

// root component will have many components which will create a hierarchy
// custom components should start with uppercase letter as all html components are small case like div, image, etc

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      color={"#fcc419"}
      size={48}
      clasName={"test"}
      defualtRate={0}
      messages={["Terrible", "Bad", "Good", "Very Good", "Amazing"]}
    /> */}
  </React.StrictMode>
);

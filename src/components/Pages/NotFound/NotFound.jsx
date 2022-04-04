import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section
      onClick={() => navigate("/")}
      id="not-found"
      style={{ textAlign: "center", cursor: "pointer" }}
    >
      <div className="container">
        <img src="https://i.stack.imgur.com/vcTyd.png" alt="not-found" />
      </div>
    </section>
  );
};

export default NotFound;

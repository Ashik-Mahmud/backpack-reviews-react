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
        <img
          src="https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=612x612&w=0&h=n3NzIx5MWfdouq0iyYiegzPrOfR6J4B-luYlIsAM-2E="
          alt=""
        />
      </div>
    </section>
  );
};

export default NotFound;

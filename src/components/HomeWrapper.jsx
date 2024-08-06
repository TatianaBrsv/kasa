import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Home from "../pages/Home";

const HomeWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const numericId = Number(id);
    if (!numericId || numericId <= 0) {
      navigate("/ErrorId");
    }
  }, [id, navigate]);

  return <Home />;
};

export default HomeWrapper;

import "../styles/Card.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/properties");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/card/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery">
      <div className="cards">
        {data.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => handleCardClick(item.id)}
            style={{ backgroundImage: `url(${item.cover})` }}
          >
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

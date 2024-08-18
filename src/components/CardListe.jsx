import "../styles/Card.css";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery">
      <div className="cards">
        {data.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
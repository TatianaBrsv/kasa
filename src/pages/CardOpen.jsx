import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/CardOpen.css";
import Head from "../components/Head";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const CardOpen = () => {
  const { id } = useParams(); // Получаем id из URL-параметра
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/properties/${id}`
        );
        const result = await response.json();
        setProperty(result);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }
  const [firstName, lastName] = property.host.name.split(" ", 2);

  return (
    <div className="card-open">
      <Head />
      <div className="content">
        <div className="slider">
          <Slider pictures={property.pictures} />
        </div>
        <div className="proprety-container">
          <div className="property-info">
            <h1>{property.title}</h1>
            <p>{property.location}</p>
            <div className="tags-container">
              {property.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

<div className="host-box">
          <div className="host-info">
            <div className="host-details">
              <div>{firstName}</div>
              <div>{lastName}</div>
            </div>
            
          
          <div className="host-picture">
            <img src={property.host.picture} alt="Host" />
          </div>
</div>
          <div className="host-rating">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="star">
                  {index < property.host.rating ? "⭐" : "☆"}
                </span>
              ))}
</div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardOpen;

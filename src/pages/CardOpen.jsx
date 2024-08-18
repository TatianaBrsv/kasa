import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CardOpen.css";
import Head from "../components/Head";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Collapse from "../components/Collapse";
import StarEmpty from "../assets/Icones/StarGris.png";
import StarFilled from "../assets/Icones/StarRed.png";

const CardOpen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/properties/${id}`);
        if (!response.ok) {
          navigate("/error");
          return;
        }
        const result = await response.json();
        setProperty(result);
      } catch (error) {
        console.error("Id est incorrect", error);
        navigate("/error");
      }
    };

    fetchData();
  }, [id, navigate]);

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
        <div className="property-container">
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
                  <img
                    src={index < property.rating ? StarFilled : StarEmpty}
                    alt={index < property.rating ? "Filled Star" : "Empty Star"}
                    className="star-icon"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="collapse-row">
          <Collapse
            title="Description"
            content={property.description}
            className="collapse-item"
          />
          <Collapse
            title="Equipments"
            content={property.equipments}
            isList={true}
            className="collapse-item"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardOpen;
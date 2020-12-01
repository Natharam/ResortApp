import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free facocktail",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur quibusdam quaerat, suscipit porro accusantium.",
      },
      {
        icon: <FaHiking />,
        title: "Free Fahiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur quibusdam quaerat, suscipit porro accusantium.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Fashuttlevan",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur quibusdam quaerat, suscipit porro accusantium.",
      },
      {
        icon: <FaBeer />,
        title: "Free Fabeer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur quibusdam quaerat, suscipit porro accusantium.",
      },
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;

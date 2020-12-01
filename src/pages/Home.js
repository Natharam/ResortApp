import React from "react";
import { Link } from "react-router-dom";
import Banner from "../component/Banner";
import Hero from "../component/Hero";
import Services from "../component/Services";
import FeaturedRooms from "../component/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="luxurious rooms" subtitle="delux rooms starting at 300$">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;

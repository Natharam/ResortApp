import React from "react";
import { Link } from "react-router-dom";
import Banner from "../component/Banner";
import Hero from "../component/Hero";
import RoomsContainer from '../component/RoomsContainer';

const Rooms = () => {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <Link to="/" className="btn-primary">
            return home
        </Link>
      </Banner>
    </Hero>
    <RoomsContainer />
    </>
  );
};

export default Rooms;

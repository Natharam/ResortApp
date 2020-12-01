import React from "react";
import Banner from "../component/Banner";
import Hero from "../component/Hero";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="page Not Found">
        <Link to="/" className="btn-primary">
            return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;

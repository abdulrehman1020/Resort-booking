import React from "react";
import Hero from "../components/Hero";
import Baner from "../components/Baner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";
const Rome = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Baner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Baner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rome;
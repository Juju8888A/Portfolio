import React from "react";
import Header from "../components/Header";
import BottomPage from "../components/BottomPage";
import Video from "../components/Video";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <main>
        <Video />
      </main>
      <BottomPage />
    </div>
  );
};

export default Home;

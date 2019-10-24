import React, { Component } from "react";
import Homenav from "../elements/homenav";
import "../style/wave.css"

function Home() {
  return (
    <>
    
      <Homenav />
      <header>
        <div className="overlay"></div>
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="images/Dreamy-Basketball.mp4" type="video/mp4"></source>
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3 we">Life Sports</h1>
              <p className="lead mb-0"></p>
            </div>
          </div>
        </div>
      </header>
      <div>


        <div className="container">
        

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Life Kicks <span className="text-muted"></span>
            </h2>
            <p className="lead">
              LifeKicks was founded in August of 2018 as the second 501(c)(3)
              nonprofit under the LifeSports umbrella. Like LifeHoops, LifeKicks
              works alongside the YMCA of Greater Charlotte to offer academic
              resources and sports-based opportunities for Charlotte-area
              students in Title I schools. Through mentorship and teambuilding,
              LifeKicks offers young adults a setting for growth as soccer
              players and as leaders.
            </p>
          </div>
          <div className="col-md-5">
          <img
              src="https://lifesports.org/wp-content/uploads/life-kicks-logo-resized.png"
              className="rounded float-left"
              alt="..."
            ></img>
            {/* {% include icons/placeholder.svg width="500" height="500" background="#eee" color="#aaa" "bd-placeholder-img-lg featurette-image img-fluid mx-auto" %} */}
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
            Life Hoops <span className="text-muted"></span>
            </h2>
            <p className="lead">
              LifeHoops is a Charlotte-based 501(c)(3) nonprofit that combines
              basketball, mentorship, and academics to empower young men as
              leaders in their communities. In partnership with the Charlotte
              YMCA, it seeks to create a safe afterschool environment where
              participants accelerate their academic achievements, learn what it
              means to be a part of a team, and enhance their basketball skills
              under guided coaching.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="https://lifesports.org/wp-content/uploads/lifehoops-logo-main-menu.png"
              className="rounded float-left"
              alt="..."
            ></img>

            {/* {% include icons/placeholder.svg width="500" height="500" background="#eee" color="#aaa" "bd-placeholder-img-lg featurette-image img-fluid mx-auto" %} */}
          </div>
        </div>

        <hr className="featurette-divider"></hr>
      </div>
      </div>
    </>
  );
}
export default Home;

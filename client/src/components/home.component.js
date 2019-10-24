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
              <h1 className="display-3">Life Sports</h1>
              <p className="lead mb-0">With HTML5 Video and Bootstrap 4</p>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="row">
          <div className="col-lg-4">
            {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
            <h2>Heading</h2>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh.
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            {/* {% include icons/placeholder.svg width="140" height="140" background="#777" color="#777" class="rounded-circle" %} */}
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              <a className="btn btn-secondary" href="#" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Founded August 2018 <span class="text-muted">LifeKicks.</span>
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
            {/* {% include icons/placeholder.svg width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto" %} */}
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Founded March 2017 . <span class="text-muted">Life Hoops.</span>
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
              class="rounded float-left"
              alt="..."
            ></img>

            {/* {% include icons/placeholder.svg width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto" %} */}
          </div>
        </div>

        <hr className="featurette-divider"></hr>
      </div>
    </>
  );
}
export default Home;

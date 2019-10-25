import React from "react";
import Homenav from "../elements/homenav";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Homenav />
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>

                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active badge-warning"
                          id="pills-home-tab"
                          data-toggle="pill"
                          href="#pills-home"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Student
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link badge-warning"
                          id="pills-profile-tab"
                          data-toggle="pill"
                          href="#pills-profile"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Parent
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link badge-warning"
                          id="pills-contact-tab"
                          data-toggle="pill"
                          href="#pills-contact"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Employee
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <form>
                          <div className="form-label-group">
                            <input
                              type="email"
                              id="inputEmail"
                              className="form-control"
                              placeholder="Email address"
                              required
                              autoFocus
                            ></input>
                            <label for="inputEmail">Email address</label>
                          </div>

                          <div className="form-label-group">
                            <input
                              type="password"
                              id="inputPassword"
                              className="form-control"
                              placeholder="Password"
                              required
                            ></input>
                            <label for="inputPassword">Password</label>
                          </div>

                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                            ></input>
                            <label
                              className="custom-control-label"
                              for="customCheck1"
                            >
                              Remember password
                            </label>
                          </div>

                          <Link to="/view-student" className="btn btn-lg btn-warning btn-block btn-login text-uppercase font-weight-bold mb-2" 
                          >
                          Sign in
                          </Link >

                          <div className="text-center">
                            <a className="small" href="#">
                              Forgot password?
                            </a>
                          </div>
                        </form>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <form>
                          <div className="form-label-group">
                            <input
                              type="email"
                              id="inputEmail"
                              className="form-control"
                              placeholder="Email address"
                              required
                              autoFocus
                            ></input>
                            <label for="inputEmail">Email address</label>
                          </div>

                          <div className="form-label-group">
                            <input
                              type="password"
                              id="inputPassword"
                              className="form-control"
                              placeholder="Password"
                              required
                            ></input>
                            <label for="inputPassword">Password</label>
                          </div>

                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                            ></input>
                            <label
                              className="custom-control-label"
                              for="customCheck1"
                            >
                              Remember password
                            </label>
                          </div>

                          <Link to="/view-student" className="btn btn-lg btn-warning btn-block btn-login text-uppercase font-weight-bold mb-2"
                          > Sign in</Link>

                          <div className="text-center">
                            <a className="small" href="#">
                              Forgot password?
                            </a>
                          </div>
                        </form>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        <form>
                          <div className="form-label-group">
                            <input
                              type="email"
                              id="inputEmail"
                              className="form-control"
                              placeholder="Email address"
                              required
                              autoFocus
                            ></input>
                            <label for="inputEmail">Email address</label>
                          </div>

                          <div className="form-label-group">
                            <input
                              type="password"
                              id="inputPassword"
                              className="form-control"
                              placeholder="Password"
                              required
                            ></input>
                            <label for="inputPassword">Password</label>
                          </div>

                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                            ></input>
                            <label
                              className="custom-control-label"
                              for="customCheck1"
                            >
                              Remember password
                            </label>
                          </div>

                          <Link to="/view-employee" className="btn btn-lg btn-warning btn-block btn-login text-uppercase font-weight-bold mb-2"
                          > Sign in</Link>

                          <div className="text-center">
                            <a className="small" href="#">
                              Forgot password?
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
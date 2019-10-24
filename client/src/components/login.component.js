import React, { Component } from "react";
import Homenav from "../elements/homenav";

function Home() {
  return (
    <>
      <Homenav />
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h3 class="login-heading mb-4">Welcome back!</h3>

                    <ul
                      class="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="nav-link active"
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
                      <li class="nav-item">
                        <a
                          class="nav-link"
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
                      <li class="nav-item">
                        <a
                          class="nav-link"
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
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <form>
                          <div class="form-label-group">
                            <input
                              type="email"
                              id="inputEmail"
                              class="form-control"
                              placeholder="Email address"
                              required
                              autofocus
                            ></input>
                            <label for="inputEmail">Email address</label>
                          </div>

                          <div class="form-label-group">
                            <input
                              type="password"
                              id="inputPassword"
                              class="form-control"
                              placeholder="Password"
                              required
                            ></input>
                            <label for="inputPassword">Password</label>
                          </div>

                          <div class="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck1"
                            ></input>
                            <label
                              class="custom-control-label"
                              for="customCheck1"
                            >
                              Remember password
                            </label>
                          </div>
                          <button
                            class="btn btn-lg btn-warning btn-block btn-login text-uppercase font-weight-bold mb-2"
                            type="submit"
                          >
                            Sign in
                          </button>
                          <div class="text-center">
                            <a class="small" href="#">
                              Forgot password?
                            </a>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <form>
                          <div class="form-label-group">
                            <input
                              type="email"
                              id="inputEmail"
                              class="form-control"
                              placeholder="Email address"
                              required
                              autofocus
                            ></input>
                            <label for="inputEmail">Email address</label>
                          </div>

                          <div class="form-label-group">
                            <input
                              type="password"
                              id="inputPassword"
                              class="form-control"
                              placeholder="Password"
                              required
                            ></input>
                            <label for="inputPassword">Password</label>
                          </div>

                          <div class="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck1"
                            ></input>
                            <label
                              class="custom-control-label"
                              for="customCheck1"
                            >
                              Remember password
                            </label>
                          </div>
                          <button
                            class="btn btn-lg btn-warning btn-block btn-login text-uppercase font-weight-bold mb-2"
                            type="submit"
                          >
                            Sign in
                          </button>
                          <div class="text-center">
                            <a class="small" href="#">
                              Forgot password?
                            </a>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        <form>
                          <div class="form-label-group">
                            <input
                              type="email"
                              id="inputEmail"
                              class="form-control"
                              placeholder="Email address"
                              required
                              autofocus
                            ></input>
                            <label for="inputEmail">Email address</label>
                          </div>

                          <div class="form-label-group">
                            <input
                              type="password"
                              id="inputPassword"
                              class="form-control"
                              placeholder="Password"
                              required
                            ></input>
                            <label for="inputPassword">Password</label>
                          </div>

                          <div class="custom-control custom-checkbox mb-3">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck1"
                            ></input>
                            <label
                              class="custom-control-label"
                              for="customCheck1"
                            >
                              Remember password
                            </label>
                          </div>
                          <button
                            class="btn btn-lg btn-warning btn-block btn-login text-uppercase font-weight-bold mb-2"
                            type="submit"
                          >
                            Sign in
                          </button>
                          <div class="text-center">
                            <a class="small" href="#">
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

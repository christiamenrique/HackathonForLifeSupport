import React, { Component } from "react";
import "../style/calender.scss";
import EmployeeNav from "../elements/employeenav";

function Calender() {
  return (
    <>
    <EmployeeNav />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

      <main className="calendar-contain">
        <section className="title-bar">
          <button className="title-bar__burger">
            <span className="burger__lines">Toggle Menu</span>
          </button>
          <span className="title-bar__year">Calendar > October 2019</span>
          <span className="title-bar__month">Month</span>
          <div className="title-bar__controls">
            <div className="title-bar__minimize"></div>
            <div className="title-bar__maximize"></div>
            <div className="title-bar__close"></div>
          </div>
        </section>

        <aside className="calendar__sidebar">
          <div className="sidebar__nav">
            <span className="sidebar__nav-item">
              <img
                className="icon icons8-Plus-Math"
                width="22px"
                height="22px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAWUlEQVRYR+2WMQoAIAgA9f+PrsWmEMQSEa7Z8rzEUmle2pxfABhvYFkPpQtJb7TEAGAAAxgoM3AO/v1YXoPPm4TtANHKy64AAAxgAANjDERB3bjXXzEA8w1s3k4WIU0YaEoAAAAASUVORK5CYII="
              ></img>
            </span>
            <span className="sidebar__nav-item">
              <img
                className="icon icons8-Share"
                width="22px"
                height="22px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+klEQVRYR+2W0VEdMQxFDxUQKoBUkFABUAFQAaGDUEFCBQkVABUAFRAqgFRAUgFQQTJnxprx2/V67f3h5+nnzfNK8vXVteQN3tk23nl/1gCWMrAD/AD2UwlvgTPgtbekSwB8AJ4Bf3Nz84+9IJYAuAJOgAfgKGNgD7gGvvSwsATAH2Ab2MpOKxsvgN9kodl6AHha6279tRyAa5ZFE4R6UBez1gogaM8T/gKO08JNJsjw+ZmAVEG0AMg3Pwf8/wRsDjK/AZ+TBr6lbxfA1xqCOQDS7um0A8BTa1L+fSBC/0u/lsfJ0mQ55gCE4KyplPaYJ1czVWHWAHidLoG/mfB6AIQgvTGnqXSj+BoAaTusBTegCRbusnKthNUABP157Rv2XHGxVd/XylAD8C+lmtNJDVQ0KH2KeaaSDxuL104hhsrnmIhh5bWMxmWHHMWXABjwODFsdhtAdMWXANSGzaSYMkpCvE3DqgQgar902DiW7ZKl+JEWSgBKCUITttvhO2Coh1r8qKeUAASFpWHTMu+jhKX4UQmnRFgaNp7Ufu9Aqpk+MYxyP9mTyZVnW+0a2vu9RrZSBeWLJ9qr31wTqKaf3+18ce0iRtr1s7WP3ow9TcauJr0CqpkbullMzqpzD4BIZHLBeOpPafF3OqWbCrLZlgBoTt7iuAawZuA/xAh3Ifk/Dm0AAAAASUVORK5CYII="
              ></img>
            </span>
            <span className="sidebar__nav-item">
              <img
                className="icon icons8-Up"
                width="22px"
                height="22px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAxklEQVRYR+3VwQ2DMAyF4Z8NOkI36AodpZ2sjMAoHaWdoJWlIEXI4RHnwMWROAH2ZxuSiZPXdHJ+EjDagUcZ4Rwd5QjAkr9K4icQQkQBdfK1+BAiAvCShxG9gG3b6xGExtED8Gb+K6VbnNA3cRTQCl4DzNKNOALYC7oFdCMUQFXkAboQCvAGbkDrF2sBasQXuAIfb7NSgAtwB5bGTrcHWBFWhF3uUgC1wyqAen/4NExAdiA7kB3IDmQH5GGjHhg9DVV8eT8Bf2HqNiEP+isaAAAAAElFTkSuQmCC"
              ></img>
            </span>
            <span className="sidebar__nav-item">
              <img
                className="icon icons8-Down"
                width="22px"
                height="22px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA4UlEQVRYR+2WgQnCMBBFXzdwBSdwBUfRyXQER3EUN1AOEgnxLrkkhYCkUFpI7/+Xf1fajcnHNtmfBTCawDu0sFunuzAYL4CVwEpgJbAS+P8EDsAZeBj/DbUELsAznKpE7WMkxSfgCtwVhRKAmN+AF3AM1x+JGkAUkUINwgKo1X1BagDyYElMA3Cbi7gHoASRAzSZtwBYEClAs3krgAYhQxbnI73XBrbrLdCK0p3m69bbYv79e2cgF9Agms17WpCCdPU830lvAlFHIORw93xvALO33oXRBLw+uw/hsHEUmJ7ABzErNiGyzfJcAAAAAElFTkSuQmCC"
              ></img>
            </span>
          </div>
          <h2 className="sidebar__heading">
            Wednesday
            <br />
            October 8
          </h2>
          <ul className="sidebar__list">
            <li className="sidebar__list-item sidebar__list-item--complete">
              <span className="list-item__time">8.30</span> School
            </li>
            <li className="sidebar__list-item sidebar__list-item--complete">
              <span className="list-item__time">10.00</span> Lunch
            </li>
            <li className="sidebar__list-item">
              <span className="list-item__time">2.30</span> Practice
            </li>
            <li className="sidebar__list-item">
              <span className="list-item__time">4.00</span> Game
            </li>
          </ul>
        </aside>

        <section className="calendar__days">
          <section className="calendar__top-bar">
            <span className="top-bar__days">Mon</span>
            <span className="top-bar__days">Tue</span>
            <span className="top-bar__days">Wed</span>
            <span className="top-bar__days">Thu</span>
            <span className="top-bar__days">Fri</span>
            <span className="top-bar__days">Sat</span>
            <span className="top-bar__days">Sun</span>
          </section>

          <section className="calendar__week">
            <div className="calendar__day inactive">
              <span className="calendar__date">30</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day inactive">
              <span className="calendar__date">31</span>
              <span className="calendar__task">4</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">1</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">2</span>
              <span className="calendar__task">3</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">3</span>
              <span className="calendar__task">1</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">4</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">5</span>
              <span className="calendar__task">4</span>
            </div>
          </section>

          <section className="calendar__week">
            <div className="calendar__day">
              <span className="calendar__date">6</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">7</span>
              <span className="calendar__task">3</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">8</span>
              <span className="calendar__task">3</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">9</span>
              <span className="calendar__task">1</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">10</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">11</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">12</span>
              <span className="calendar__task">1</span>
            </div>
          </section>

          <section className="calendar__week">
            <div className="calendar__day">
              <span className="calendar__date">13</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">14</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day today">
              <span className="calendar__date">15</span>
              <span className="calendar__task calendar__task--today">4 items</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">16</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">17</span>
              <span className="calendar__task">1</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">18</span>
              <span className="calendar__task">4</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">19</span>
              <span className="calendar__task">2</span>
            </div>
          </section>

          <section className="calendar__week">
            <div className="calendar__day">
              <span className="calendar__date">20</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">21</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">22</span>
              <span className="calendar__task">1</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">23</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">24</span>
              <span className="calendar__task">5</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">25</span>
              <span className="calendar__task">3</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">26</span>
              <span className="calendar__task">1</span>
            </div>
          </section>

          <section className="calendar__week">
            <div className="calendar__day">
              <span className="calendar__date">27</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day">
              <span className="calendar__date">28</span>
              <span className="calendar__task">1</span>
            </div>
            <div className="calendar__day inactive">
              <span className="calendar__date">1</span>
              <span className="calendar__task">2</span>
            </div>
            <div className="calendar__day inactive">
              <span className="calendar__date">2</span>
              <span className="calendar__task">1</span>
            </div>
            <div className="calendar__day inactive">
              <span className="calendar__date">3</span>
              <span className="calendar__task">5</span>
            </div>
            <div className="calendar__day inactive">
              <span className="calendar__date">4</span>
              <span className="calendar__task">3</span>
            </div>
            <div className="calendar__day inactive">
              <span className="calendar__date">5</span>
              <span className="calendar__task">1</span>
            </div>
          </section>
        </section>
      </main>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </>
  );
}
export default Calender;

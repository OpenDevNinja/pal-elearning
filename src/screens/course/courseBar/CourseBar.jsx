/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import "./courseBar.css"
const CourseBar = () => {

  useEffect(() => {
    const form = document.querySelector("#yourFormId");
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }
    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOnchange = (event) => {
    event.preventDefault();
    const value = event.target.value;

  };

  return (
    <div className="course-bar-up-area ">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="course-main-wrapper mb-30">
              <div className="bar-filter">
              <i className="fa-solid fa-filter"></i>
                <span>Filter</span>
                <span>(2)</span>
              </div>
              <div className="corse-bar-wrapper">
                <div className="bar-search">
                  <form action="#">
                    <div className="bar-secrch-icon position-relative">
                      <input
                        type="text"
                        //  value={inputValue}
                        onChange={handleOnchange}
                        placeholder="Search..."
                      />
                      <button type="submit">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="course-sidebar-tab">
                <div className="course-sidebar-wrapper">
                  <div className="curse-tab-left-wrap">
                    <div className="course-results">
                      Showing <span className="course-result-showing">15</span>{" "}
                      of <span className="course-result-number">60</span>{" "}
                      results
                    </div>
                  </div>
                  <div className="couse-dropdown">
                    <div className="course-drop-inner">
                      <select>
                        <option>Newly published</option>
                        <option>Most Viewed</option>
                        <option>5 Star Rated</option>
                        <option>Duration</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBar;

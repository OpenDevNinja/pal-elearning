
import { useState } from "react";
import { Link } from "react-router-dom";

const CourseReview = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="course-review-btn">
        <span id="show-review-box " className="edu-btn mb-5 " onClick={handleToggle}>
          Write a Review
        </span>
        <div
          id="review-box"
          className={`review-comment mt-45 ${isActive ? "danger" : "d-block"}`}
        >
          <div className="comment-title mb-20">
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div className="comment-rating mb-20">
            <span>Overall ratings</span>
            <ul>
              <li>
                <Link href="#">
                  <i className="fas fa-star"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fas fa-star"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fas fa-star"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fas fa-star"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                <i className="fa-regular fa-star"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="comment-input-box mb-15">
            <form action="#">
              <div className="row">
                <div className="col-xxl-12">
                  <textarea
                    placeholder="Your review"
                    className="comment-input comment-textarea mb-20"
                  ></textarea>
                </div>
                <div className="col-xxl-6">
                  <div className="comment-input mb-20">
                    <input type="text" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div className="comment-input mb-20">
                    <input type="email" placeholder="Your Email" />
                  </div>
                </div>
                <div className="col-xxl-12 mb-5 mt-3">
                  <div className="comment-submit">
                    <button type="submit" className="edu-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseReview;

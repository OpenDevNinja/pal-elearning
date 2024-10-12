/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from "react";

import ModalVideo from "react-modal-video";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import { cart_product } from "@/redux/slices/cartSlice";
//import { wishlist_product } from "@/redux/slices/wishlist-slice";

const CourseDetailsSidebar = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setvideoId] = useState("");
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setvideoId(id);
  };
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    //dispatch(cart_product(product));
  };
  return (
    <>
      <div className="course-video-widget">
        <div className="course-widget-wrapper mb-30">
          <div className="course-video-thumb w-img">
            {course.img && (
              <img
                src={course.img}
                style={{ width: "100%", height: "auto" }}
                alt="img not found"
              />
            )}
            <div className="sidber-video-btn">
              <span
                className="popup-video"
                onClick={() => {
                  openVideoModal(course.videoUrl);
                }}
              >
                <i className="fas fa-play"></i>
              </span>
            </div>
          </div>
          <div className="course-video-price">
            <span>
              {course.price === 0 ? "FREE" : `$${course.price}.00`}
            </span>
          </div>
          <div className="course-video-body">
            <ul>
              <li>
                <div className="course-vide-icon">
                {/*   <i className="flaticon-filter"></i> */}
                  <i className="fa-solid fa-sliders"></i>
                  <span>Level</span>
                </div>
                <div className="video-corse-info">
                  <span>{course.level}</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                <i className="fa-solid fa-display"></i>
                  <span>Lectures</span>
                </div>
                <div className="video-corse-info">
                  <span>8 Lectures</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                <i className="fa-regular fa-clock"></i>
                  <span>Duration</span>
                </div>
                <div className="video-corse-info">
                  <span>{course.clock}</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                <i className="fa-solid fa-indent"></i>
                  <span>Category</span>
                </div>
                <div className="video-corse-info">
                  <span>{course.category}</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                <i className="fa-solid fa-globe"></i>
                  <span>Language</span>
                </div>
                <div className="video-corse-info">
                  <span>English</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                <i className="fa-regular fa-bookmark"></i>
                  <span>Access</span>
                </div>
                <div className="video-corse-info">
                  <span>Full Lifetime</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                <i className="fa-solid fa-trophy"></i>
                  <span>Certificate</span>
                </div>
                <div className="video-corse-info">
                  <span>Yes</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                <i className="fa-solid fa-list"></i>
                  <span>Recourse</span>
                </div>
                <div className="video-corse-info">
                  <span>5 Downloadable Files</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="video-wishlist">
            <button
              onClick={() => handleAddToCart(course)}
              className="video-cart-btn"
            >
              <i className="fa-solid fa-cart-shopping"></i>Add to cart
            </button>
            <button
              type="button"
              className="video-wishlist-btn"
            //  onClick={() => dispatch(wishlist_product(course))}
            >
              <i className="far fa-heart"></i>Add to Wishlist
            </button>
          </div>
          <div className="course-gift">
            <div className="course-apply-coupon">
              <Link to="#">Apply Coupon</Link>
            </div>
            <div className="course-gift-coupon">
              <Link to="#">Gift Courses</Link>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default CourseDetailsSidebar;

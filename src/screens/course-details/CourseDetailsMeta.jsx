/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
//import courseMetaImg from '../../../assets/img/course/course-meta.png';

const CourseDetailsMeta = ({ course }) => {
    return (
        <div className="course-detelis-meta">
            <div className="course-meta-wrapper border-line-meta">
                <div className="course-meta-img">
                    <Link to="/instructor-profile">
                        {course.tutorImg && <img src={course.tutorImg} style={{width:'100%', height:'auto'}} alt="course-meta"/>}
                    </Link>
                </div>
                <div className="course-meta-text">
                    <span>Created by</span>
                    <h6><Link to="/instructor-profile">{course.authorName}</Link></h6>
                </div>
            </div>
            <div className="course-Enroll border-line-meta">
                <p>Total Enrolled</p>
                <span>5,420</span>
            </div>
            <div className="course-update border-line-meta">
                <p>Last Update</p>
                <span>01 January 2022 </span>
            </div>
            <div className="course-category">
                <p>01 January 2022 </p>
                <span><Link to="/course">Data Science</Link></span>
            </div>
        </div>
    );
};

export default CourseDetailsMeta;

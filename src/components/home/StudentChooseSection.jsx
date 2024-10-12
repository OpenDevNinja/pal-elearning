

import { Link } from 'react-router-dom';
import StudentShapeOne from '../../assets/img/shape/student-shape-03.png';
import StudentShapeTwo from '../../assets/img/shape/student-shape-04.png';
import StudentShapeThere from '../../assets/img/shape/student-shape-05.png';
import StudentShapeFour from '../../assets/img/shape/student-shape-06.png';
import StudentShapeFive from '../../assets/img/shape/student-shape-07.png';
import StudentShapeSix from '../../assets/img/shape/student.webp';
import '../../styles/StudentChooseSection.css'
const StudentChooseSection = () => {
    return (
        <div className="student-choose-area fix pt-120 mt-5 pb-110">
         <div className="container">
            <div className="row">
               <div className="col-xl-5 col-lg-5">
                  <div className="student-wrapper">
                     <div className="section-title mb-30">
                        <h2>Why Students <span className="down-mark-line">Choose</span> Us for Gain Their Knowledge</h2>
                     </div>
                     <div className="sitdent-choose-content">
                        <p>Helping employees gain skills and providing career development often take a back seat to
                           business priorities but workplace better right now. Seventy percent of workers think that.
                        </p>
                     </div>
                     <div className="student-choose-list">
                        <ul>
                           <li><i className="fas fa-check-circle"></i>Free for physically handcraft </li>
                           <li><i className="fas fa-check-circle"></i>Easy to enroll courses</li>
                           <li><i className="fas fa-check-circle"></i>Course certificate for particular course</li>
                        </ul>
                     </div>
                     <div className="student-btn">
                        <Link href="/about" className="edu-sec-btn">More about us</Link>
                     </div>
                  </div>
               </div>
               <div className="col-xl-2 col-lg-2">
                  <div className="student-wrapper position-relative">
                     <div className="shap-01">
                     </div>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5">
                  <div className="student-choose-wrapper position-relative">
                     <div className="shap-02">
                     </div>
                     <div className="shap-03">
                        <img src={StudentShapeOne} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-04">
                        <img src={StudentShapeTwo} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-05">
                        <img src={StudentShapeThere} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-06">
                        <img src={StudentShapeFour} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="shap-07">
                        <img src={StudentShapeFive} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                     <div className="student-choose-thumb">
                        <img src={StudentShapeSix} style={{width:'100%', height:'auto'}} alt="img not found"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default StudentChooseSection;
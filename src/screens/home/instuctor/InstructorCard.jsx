/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./instructor.css"
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { GiEvilBook, GiWorld } from "react-icons/gi";
const InstructorCard = () => {
  return (
    <div className="content" id="blo-instructor">
   
    <div className="row mt-4 " >
      <CardItem color="iconColor" icon={<FaUsers size={60} />} title="632,52+" desc="Students Enrolled" />
      <CardItem color="iconColor" icon={<GiEvilBook size={60} />} title="12500+" desc="Total Courses" />
      <CardItem color="iconColor" icon={<FaGraduationCap size={60} />} title="1500+" desc="Online Learners" />
      <CardItem color="iconColor" icon={<GiWorld size={60} />} title="450+" desc="Online Learners" />
    </div>
  </div>
  )
}

export default InstructorCard
export const CardItem = (props) => {
    return (
      <div className="col-lg-3 col-md-6 mb-4 instCard">
        <div className="box p-4 rounded text-center">
          <div className={props.color}>{props.icon}</div>
          <div className="text mt-2">
            <h4 className="h5 font-weight-bold text-dark">{props.title}</h4>
            <p className="small">{props.desc}</p>
          </div>
        </div>
      </div>
    );
  };
  
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

import './helmet.css'

const Helmet = ({ title, subTitle }) => {
   return (
      <>
        <div className="hero-arera course-item-height" >
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="hero-course-1-text">
                            <h2>{title}</h2>
                        </div>
                        <div className="course-title-breadcrumb">
                            <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home  </Link> </li>
                                
                                <li className="breadcrumb-item"><i className="fa-solid fa-chevron-right"></i>  <span>  {subTitle}</span></li>
                            </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
   );
};

export default Helmet;
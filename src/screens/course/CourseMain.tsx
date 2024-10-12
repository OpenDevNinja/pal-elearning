import React from 'react';
;

import './course.css'
import Helmet from '../../components/helmet/Helmet';
import CourseBar from './courseBar/CourseBar';
import CourseContent from './courseContent/CourseContent';

const CourseMain = () => {
    return (
        <>
            <Helmet title="Courses" subTitle="Courses" />
            <CourseBar />
            <CourseContent/>
            
        </>
    );
};

export default CourseMain;
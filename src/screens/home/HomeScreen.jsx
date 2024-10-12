import styled from "styled-components";
import Hero from "../../components/home/Hero";

import BrowserCourseSection from "../../components/home/BrowserCourseSection";

import StudentChooseSection from "../../components/home/StudentChooseSection";
import AcademicCourse from "../academie/AcademicCourse";
//import Testimonials from "./Testimonial/Testimonials";
import UniversityMessage from "./universityMessage/UniversityMessage";
//import CounterSection from "./CounterSection/CounterSection";
import FeatureSection from "./featureSection/FeatureSection";
//import EducationSection from "./educationSection/EducationSection";

const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {
  return (
    <HomeScreenWrapper>
      <Hero />
      <UniversityMessage />
      {/* <CounterSection /> */}
      <FeatureSection />
      <StudentChooseSection />
      <AcademicCourse />
      <BrowserCourseSection />
      {/* <EducationSection/>
      <Testimonials /> */}
    </HomeScreenWrapper>
  );
};

export default HomeScreen;

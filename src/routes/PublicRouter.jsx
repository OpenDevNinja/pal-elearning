import { Routes, Route } from "react-router-dom";

import BaseLayout from "../components/layout/BaseLayout";
import HomeScreen from "../screens/home/HomeScreen";
import CourseMain from "../screens/course/CourseMain";
import NotFoundScreen from "../screens/error/NotFoundScreen";

//import AuthLayout from "../components/layout/AuthLayout";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/course" element={<CourseMain />} />
       
             <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  )
}

export default PublicRouter
/* 
<Routes>
<Route element={<PublicMain />}>
  <Route index element={<Home />} />
  <Route path="home" element={<Home />} />

  <Route path="*" element={<NotFound />} />
</Route>
</Routes> */
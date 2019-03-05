import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './Components/App';
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage';
import CoursesPage from './Components/courses/CoursesPage';
import ManageCoursePage from './Components/courses/ManageCoursePage';
export default (
<Route path="/" component={App}>

   <IndexRoute component={HomePage} />
   <Route path="about" component={AboutPage} />
   <Route path="courses" component={CoursesPage} />
   <Route path="course" component={ManageCoursePage} />
   <Route path="course/:id" component={ManageCoursePage} />


</Route>

);
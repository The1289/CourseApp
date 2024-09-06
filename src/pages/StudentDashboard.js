import React from 'react';
import { useParams } from 'react-router-dom'; 
import CourseBanner from '../components/CourseBanner';
import CourseProgress from '../components/CourseProgress';  
import courses from '../utils/data';  
import CourseDetailsBoxes from '../components/CourseDetailsBoxes';
import CourseContentOverview from '../components/CourseContentOverview';


const SampleCoursePage = () => {
 

    const { id } = useParams();
  
   
    const course = courses.find((course) => course.id === id);
  
   
    if (!course) {
      return <div>Course not found</div>;
    }
  return (
    <div>
      <CourseBanner course={course} />
      <CourseProgress />
      <CourseDetailsBoxes />
      <CourseContentOverview content={course.content} />
    </div>
  );
};

export default SampleCoursePage;

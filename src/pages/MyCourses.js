import React from 'react';
import styled from "styled-components";
import courses from '../utils/data';
import Course from '../components/Course';

const MyCourses = () => {
  
  const myCourses = courses.slice(0, 2); 
  
  return (
    <MyCoursesWrapper>
      <h2>My Courses</h2>
      <div className='courses-list'>
        {myCourses.length > 0 ? (
          myCourses.map((course) => ( 
            <Course key={course.id} {...course} />
          ))
        ) : (
          <p>No courses available.</p>  
        )}
      </div>
    </MyCoursesWrapper>
  );
}

const MyCoursesWrapper = styled.div` 
  margin-top: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .courses-list {
    display: grid;
    gap: 26px;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1400px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default MyCourses;

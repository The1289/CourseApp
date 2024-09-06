import React from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import { Link } from "react-router-dom";
import { FaBook, FaUser } from 'react-icons/fa'; 

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
      <div className='button-container'>
        <Link to="/dashboard/mycourses">
          <FaBook className='icon' />
          My Courses
        </Link>
        <Link to="/">
          <FaUser className='icon' />
          My Account
        </Link>
      </div>
      <CoursesList />
      <CategoriesList />
    </div>
  )
}


export default HomePage
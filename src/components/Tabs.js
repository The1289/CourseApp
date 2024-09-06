import React, { useState } from 'react';
import styled from "styled-components";
import Course from "./Course";
import { PYTHON, WEB_DEVELOPMENT, DATA_SCIENCE, AWS, DESIGN, MARKETING } from "../utils/constants";
import courses from '../utils/data';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(PYTHON);
  const [searchTerm, setSearchTerm] = useState(''); // Add search state

  const tabHandler = (category) => {
    setActiveTab(category);
    setSearchTerm(''); // Reset search term when switching tabs
  }

  // Function to handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  // Filter courses based on active tab and search term (by name or instructor)
  const filteredCourses = courses
    .filter(course => course.category === activeTab)
    .filter(course => course.course_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                      course.creator.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <TabsWrapper>
      <div className='tabs'>
        {/* Tabs Header */}
        <ul className='flex flex-wrap'>
          <li className='tabs-head-item'>
            <button 
              type="button" 
              className={`tab-btn ${activeTab === PYTHON ? 'active' : ''}`} 
              onClick={() => tabHandler(PYTHON)}
            >
              Python
            </button>
          </li>
          <li className='tabs-head-item'>
            <button 
              type="button" 
              className={`tab-btn ${activeTab === WEB_DEVELOPMENT ? 'active' : ''}`} 
              onClick={() => tabHandler(WEB_DEVELOPMENT)}
            >
              Web Development
            </button>
          </li>
          <li className='tabs-head-item'>
            <button 
              type="button" 
              className={`tab-btn ${activeTab === DATA_SCIENCE ? 'active' : ''}`} 
              onClick={() => tabHandler(DATA_SCIENCE)}
            >
              Data Science
            </button>
          </li>
          <li className='tabs-head-item'>
            <button 
              type="button" 
              className={`tab-btn ${activeTab === AWS ? 'active' : ''}`} 
              onClick={() => tabHandler(AWS)}
            >
              AWS Certification
            </button>
          </li>
          <li className='tabs-head-item'>
            <button 
              type="button" 
              className={`tab-btn ${activeTab === DESIGN ? 'active' : ''}`} 
              onClick={() => tabHandler(DESIGN)}
            >
              Design
            </button>
          </li>
          <li className='tabs-head-item'>
            <button 
              type="button" 
              className={`tab-btn ${activeTab === MARKETING ? 'active' : ''}`} 
              onClick={() => tabHandler(MARKETING)}
            >
              Marketing
            </button>
          </li>
        </ul>

        {/* Search Input */}
        <div className='search'>
          <input 
            type='text' 
            placeholder='Search by name or instructor' 
            value={searchTerm} 
            onChange={handleSearch} 
          />
        </div>

        {/* Tabs Body - Course List */}
        <div className='tabs-body'>
          {
            filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <Course key={course.id} {...course} />
              ))
            ) : (
              <p>No courses found.</p>
            )
          }
        </div>
      </div>
    </TabsWrapper>
  );
}

const TabsWrapper = styled.div`
  .tabs {
    margin-top: 16px;

    .tabs-head-item button {
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      // Hover effect
      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }

      // Active tab style
      &.active {
        background-color: var(--clr-black); /* Same as hover */
        color: var(--clr-white);
        border-color: var(--clr-black);
      }
    }

    .search {
      margin-top: 20px;
      input {
        padding: 10px;
        width: 100%;
        max-width: 400px;
        border: 1px solid rgba(0, 0, 0, 0.7);
        border-radius: 4px;
      }
    }

    .tabs-body {
      margin-top: 32px;
    }

    @media screen and (min-width: 600px) {
      .tabs-body {
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px) {
      .tabs-body {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px) {
      .tabs-body {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default Tabs;

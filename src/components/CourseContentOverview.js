import React from 'react';
import styled from 'styled-components';

const CourseContentOverview = ({ content }) => {
  return (
    <ContentWrapper>
      <h2>Course Overview</h2>
      <p>Here’s what you’ll learn each week:</p>
      <ContentList>
        {content.map((topic, index) => (
          <ContentItem key={index}>
            <WeekTitle>Week {index + 1}:</WeekTitle>
            <TopicTitle>{topic}</TopicTitle>
          </ContentItem>
        ))}
      </ContentList>
    </ContentWrapper>
  );
};

// Styled Components
const ContentWrapper = styled.div`
  margin: 40px auto;
  padding: 20px;
  max-width: 900px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    text-align: left;
  }
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const WeekTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #4a90e2;
`;

const TopicTitle = styled.p`
  font-size: 16px;
  color: #333;
`;

export default CourseContentOverview;

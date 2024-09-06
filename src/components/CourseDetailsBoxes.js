import React from 'react';
import styled from 'styled-components';

const CourseDetailsBoxes = () => {
  // Sample data for next exam and next class
  const nextExam = {
    date: "October 15, 2024",
    time: "10:00 AM",
  };

  const nextClass = {
    date: "October 10, 2024",
    time: "2:00 PM",
  };

  return (
    <DetailsWrapper>
      <DetailBox>
        <h3>Next Exam</h3>
        <p>Date: <strong>{nextExam.date}</strong></p>
        <p>Time: <strong>{nextExam.time}</strong></p>
      </DetailBox>
      <DetailBox>
        <h3>Next Class</h3>
        <p>Date: <strong>{nextClass.date}</strong></p>
        <p>Time: <strong>{nextClass.time}</strong></p>
      </DetailBox>
    </DetailsWrapper>
  );
};

// Styled Components
const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px auto;
  padding: 20px;
  max-width: 900px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DetailBox = styled.div`
  background: #f3f3f3;
  border-radius: 12px;
  padding: 20px;
  width: 40%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: #4a90e2;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    color: #333;

    strong {
      color: #2d2d2d;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

export default CourseDetailsBoxes;

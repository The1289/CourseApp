import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

const CourseProgress = () => {
  // Progress data for each category
  const progressData = [
    { title: "Course Status", value: 80, maxValue: 100 },
    { title: "Tests Completed", value: 25, maxValue: 30 },
    { title: "Battleground", value: 10, maxValue: 20 },
    { title: "Highest Score", value: 199, maxValue: 200 },
  ];

  return (
    <ProgressWrapper>
      {progressData.map((item, index) => (
        <div key={index} className="progress-item">
          <CircularProgressbar
            value={item.value}
            maxValue={item.maxValue}
            text={`${item.value}/${item.maxValue}`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: `rgba(62, 152, 199, ${item.value / item.maxValue})`,
              textColor: '#f88',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
          <p className="progress-title">{item.title}</p>
        </div>
      ))}
    </ProgressWrapper>
  );
};

// Styled Components
const ProgressWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .progress-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    text-align: center;

    .progress-title {
      margin-top: 10px;
      font-size: 16px;
      color: #333;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .progress-item {
      margin-bottom: 20px;
    }
  }
`;

export default CourseProgress;

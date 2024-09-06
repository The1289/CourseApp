import React from 'react';
import styled from 'styled-components';

const CourseBanner = ({ course }) => {
  const {
    image,
    course_name,
    category,
    description,
    creator,
    rating_star,
    rating_count,
    actual_price,
    discounted_price,
    students,
  } = course;

  return (
    <BannerWrapper>
      <div className="course-banner">
        {/* Course Image */}
        <div className="course-image">
          <img src={image} alt={course_name} />
        </div>

        {/* Course Details */}
        <div className="course-details">
          <h2 className="course-name">{course_name}</h2>
          <p className="category"><strong>Category:</strong> {category}</p>
          <p className="description">{description}</p>
          <p className="creator"><strong>Instructor:</strong> {creator}</p>
          
          {/* Course Meta */}
          <div className="meta">
            <p className="rating">
              <strong>Rating:</strong> {rating_star} ({rating_count} reviews)
            </p>
            <p className="students"><strong>Students:</strong> {students}</p>
          </div>

          <div className="pricing">
            <span className="discounted-price">${discounted_price}</span>
            <span className="actual-price">${actual_price}</span>
          </div>

          
        </div>
      </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  .course-banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    max-width: 1200px;
    margin: 20px auto;

    .course-image img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 16px;
    }

    .course-details {
      .course-name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .category, .creator {
        font-size: 16px;
        margin-bottom: 8px;
      }

      .description {
        font-size: 14px;
        color: #555;
        margin-bottom: 16px;
      }

      .meta {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 16px;
      }

      .pricing {
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 10px;
        margin-bottom: 16px;

        .discounted-price {
          font-size: 22px;
          color: #e63946;
          font-weight: bold;
        }

        .actual-price {
          font-size: 18px;
          color: #777;
          text-decoration: line-through;
        }
      }

      .action .enroll-btn {
        padding: 12px 24px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }

  /* Responsive Styles */
  @media (min-width: 768px) {
    .course-banner {
      flex-direction: row;
      text-align: left;
      padding: 30px;
    }

    .course-details {
      padding-left: 30px;
    }

    .course-image img {
      max-width: 300px;
    }
  }

  @media (min-width: 992px) {
    .course-banner {
      padding: 40px;
    }
  }
`;

export default CourseBanner;

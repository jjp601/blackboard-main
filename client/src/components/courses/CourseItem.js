import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CourseContext from '../../context/course/courseContext';

const CourseItem = ({ course }) => {
  const courseContext = useContext(CourseContext);
  const { setCurrent, clearCurrent } = courseContext;

  const { _id, name, instructor, term } = course;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        
      </h3>
      <ul className='list'>
        {instructor && (
          <li>
            Instructor: {instructor}
          </li>
        )}
        {term && (
          <li>
            Term: {term}
          </li>
        )}
      </ul>
      <p>
        
        <Link className="btn btn-dark btn-sm" onClick={() => setCurrent(course)} to="/course">View</Link>
      </p>
    </div>
  );
};

CourseItem.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseItem;

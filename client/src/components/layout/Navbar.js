import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from './nlogo.png';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import CourseContext from '../../context/course/courseContext';

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const courseContext = useContext(CourseContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearCourses } = courseContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearCourses();
  };

  const authLinks = (
    <Fragment>
      <li className="navlink"><Link to='/'>My Courses</Link></li>
      <li className="navlink"><Link to="/profile">My Profile</Link></li>
      <li className="userLink">{user && user.name}</li>
      <li>
        <a className="navlink" onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <div className="logo">
        <h1>
          <Link to='/'>
          <img
            src={logo}
            style={{ width: '50px' }}
            alt='unl logo'
          />
          </Link>
        </h1>
        <h1>{title}</h1>
      </div>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Canvas'
};

export default Navbar;

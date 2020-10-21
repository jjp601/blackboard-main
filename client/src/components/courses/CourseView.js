import React, { useContext } from 'react';
import CourseContext from '../../context/course/courseContext';

const CourseView = ({ course }) => {
  const courseContext = useContext(CourseContext);
  const { current } = courseContext;

  const { _id, name, instructor, term, assignment1,
    assignment2,
    assignment3,
    assignment4,
    assignment5,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    midterm,
    final,
    project,
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
    video11,
    video12,
    video13,
    video14,
    video15,
    video16,
    video17,
    video18,
    video19,
    video20, photo, title, office, email, phone } = current;

  const openCity = function (evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        
      </h3>
      <ul className='list'>
        {term && (
          <li className="term">
            Term: {term}
          </li>
        )}
        
      </ul>
      <div className="tab-bar">
        <button className="tab-bar-item tab-button tablink active" onClick={(e) => openCity(e, 'content')}>Course Content</button>
        <button className="tab-bar-item tab-button tablink" onClick={(e) => openCity(e, 'assignments')}>Assignments</button>
        <button className="tab-bar-item tab-button tablink" onClick={(e) => openCity(e, 'instructor')}>Instructor</button>
      </div>

        <div id="content" className="w3-container city">
        <ul className='list'>
          
        {video15 && (
            <li className="video">
              <label>Lecture Video 11/9/2020</label>
              <iframe title="Lecture15" width="560" height="315" src={"https://www.youtube.com/embed/" + video15} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video16 && (
            <li className="video">
              <label>Lecture Video 11/4/2020</label>
              <iframe title="Lecture16" width="560" height="315" src={"https://www.youtube.com/embed/" + video16} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video17 && (
            <li className="video">
              <label>Lecture Video 11/2/2020</label>
              <iframe title="Lecture17" width="560" height="315" src={"https://www.youtube.com/embed/" + video17} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video18 && (
            <li className="video">
              <label>Lecture Video 10/28/2020</label>
              <iframe title="Lecture18" width="560" height="315" src={"https://www.youtube.com/embed/" + video18} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video19 && (
            <li className="video">
              <label>Lecture Video 10/26/2020</label>
              <iframe title="Lecture19" width="560" height="315" src={"https://www.youtube.com/embed/" + video19} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video20 && (
            <li className="video"><iframe title="Lecture20" width="560" height="315" src={"https://www.youtube.com/embed/" + video20} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
              <label>Lecture Video 10/21/2020</label>

            </li>
          )}
          {video1 && (
            <li className="video">
              <label>Lecture Video 10/19/2020</label>
              <iframe title="Lecture1"  width="560" height="315" src={"https://www.youtube.com/embed/" + video1} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video2 && (
            <li className="video">
              <label>Lecture Video 10/14/2020</label>
              <iframe title="Lecture2" width="560" height="315" src={"https://www.youtube.com/embed/" + video2} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video3 && (
            <li className="video">
              <label>Lecture Video 10/12/2020</label>
              <iframe title="Lecture3" width="560" height="315" src={"https://www.youtube.com/embed/" + video3} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video4 && (
            <li className="video">
              <label>Lecture Video 10/5/2020</label>
              <iframe title="Lecture4" width="560" height="315" src={"https://www.youtube.com/embed/" + video4} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video5 && (
            <li className="video">
              <label>Lecture Video 9/30/2020</label>
              <iframe title="Lecture5" width="560" height="315" src={"https://www.youtube.com/embed/" + video5} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video6 && (
            <li className="video">
              <label>Lecture Video 9/28/2020</label>
              <iframe title="Lecture6" width="560" height="315" src={"https://www.youtube.com/embed/" + video6} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video7 && (
            <li className="video">
              <label>Lecture Video 9/21/2020</label>
              <iframe title="Lecture7" width="560" height="315" src={"https://www.youtube.com/embed/" + video7} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video8 && (
            <li className="video">
              <label>Lecture Video 9/16/2020</label>
              <iframe title="Lecture8" width="560" height="315" src={"https://www.youtube.com/embed/" + video8} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video9 && (
            <li className="video">
              <label>Lecture Video 9/14/2020</label>
              <iframe title="Lecture9" width="560" height="315" src={"https://www.youtube.com/embed/" + video9} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video10 && (
            <li className="video">
              <label>Lecture Video 9/9/2020</label>
              <iframe title="Lecture10" width="560" height="315" src={"https://www.youtube.com/embed/" + video10} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video11 && (
            <li className="video">
              <label>Lecture Video 9/7/2020</label>
              <iframe title="Lecture11" width="560" height="315" src={"https://www.youtube.com/embed/" + video11} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video12 && (
            <li className="video">
              <label>Lecture Video 9/2/2020</label>
              <iframe title="Lecture12" width="560" height="315" src={"https://www.youtube.com/embed/" + video12} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video13 && (
            <li className="video">
              <label>Lecture Video 8/31/2020</label>
              <iframe title="Lecture13" width="560" height="315" src={"https://www.youtube.com/embed/" + video13} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          {video14 && (
            <li className="video">
              <label>Lecture Video 8/24/2020</label>
              <iframe title="Lecture14" width="560" height="315" src={"https://www.youtube.com/embed/" + video14} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
            </li>
          )}
          
          
        </ul>
        </div>

        <div id="assignments" className="w3-container city" style={{display: 'none'}}>
        <ul className='list'>
            <li class="heading">
              <label>Assignment</label> <p>Grade</p>
            </li>
          {quiz1 && (
            <li>
              <label>Quiz 1:</label> <p>{quiz1}</p>
            </li>
          )}
          {assignment1 && (
            <li>
              <label>Assignment 1:</label> <p>{assignment1}</p>
            </li>
          )}
          {quiz2 && (
            <li>
              <label>Quiz 2:</label> <p>{quiz2}</p>
            </li>
          )}
          {assignment2 && (
            <li>
              <label>Assignment 2:</label> <p>{assignment2}</p>
            </li>
          )}
          {quiz3 && (
            <li>
              <label>Quiz 3:</label> <p>{quiz3}</p>
            </li>
          )}
          {assignment3 && (
            <li>
              <label>Assignment 3:</label> <p>{assignment3}</p>
            </li>
          )}
          {quiz4 && (
            <li>
              <label>Quiz 4:</label> <p>{quiz4}</p>
            </li>
          )}
          {assignment4 && (
            <li>
              <label>Assignment 4:</label> <p>{assignment4}</p>
            </li>
          )}
          {quiz5 && (
            <li>
              <label>Quiz 5:</label> <p>{quiz5}</p>
            </li>
          )}
          {assignment5 && (
            <li>
              <label>Assignment 5:</label> <p>{assignment5}</p>
            </li>
          )}
          {project && (
            <li>
              <label>Code Project:</label> <p>{project}</p>
            </li>
          )}
          {midterm && (
            <li>
              <label>Midterm:</label> <p>{midterm}</p>
            </li>
          )}
          {final && (
            <li>
              <label>Final:</label> <p>{final}</p>
            </li>
          )}
          
        </ul>
        </div>

        <div id="instructor" className="w3-container city" style={{display:'none'}}>
          <div class="instructor">
          <div class="photo">
            <img src={photo} alt="photo" />
          </div>
          <ul class="info">
          {instructor && (
            <li className="name">
              {instructor}
            </li>
          )}
          {title && (
            <li className="title">
              {title}
            </li>
          )}
          {email && (
            <li>
              <i className='fas fa-envelope-open' /> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className='fas fa-phone' /> {phone}
            </li>
          )}
          {office && (
            <li>
              <i class="fas fa-briefcase"></i> {office}
            </li>
          )}
          </ul>
          </div>
        </div>
      
    </div>
  );
};

export default CourseView;

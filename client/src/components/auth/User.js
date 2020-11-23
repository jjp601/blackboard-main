import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const User = () => {
    const authContext = useContext(AuthContext);

    const { user } = authContext;

    const { name, email } = user

    const openContent = function (evt, cityName) {
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
        My Profile
      </h3>
      
      <div className="tab-bar">
        <button className="tab-bar-item tab-button tablink active" onClick={(e) => openContent(e, 'student')}>Student Information</button>
        <button className="tab-bar-item tab-button tablink" onClick={(e) => openContent(e, 'coursework')}>Coursework</button>
      </div>

        <div id="student" className="w3-container city">
            <ul className='list'> 
            {name && (
            <li>
                <label>Name:</label> {'    '}{name}
            </li>
            )}
            {email && (
            <li>
                <label>Email:</label> {'    '}{email}
            </li>
            )}
            <li>
                <label>NUID:</label> {'    '}04912278
            </li>
            <li>
                <label>Primary Address:</label> {'    '}2010 SW 33rd Street, Lincoln, NE 68522
            </li>
            <li>
                <label>Primary Phone:</label> {'    '}(402) 270-2924
            </li>
            <li>
                <label>Mobile Phone:</label> {'    '}(402) 270-2924
            </li>
            </ul>
            <ul className="list">
            <li>
                <label>College:</label> {'    '}Arts & Science
            </li>
            <li>
                <label>Major:</label> {'    '}Computer Science
            </li>
            <li>
                <label>Minor(s):</label>
            </li>
            <li>
                <label>Undergraduate GPA:</label> {'    '}3.52
            </li>
            </ul>
        </div>

        <div id="coursework" className="w3-container city" style={{display: 'none'}}>
        <table id="courses">
        <tr>
            <th>Course</th>
            <th>Title</th>
            <th>Instructor</th>
            <th>Term</th>
            <th>Credits</th>
            <th>Final Grade</th>
        </tr>
        <tr>
            <td>CSCE436</td>
            <td>ADVANCED EMBEDDED SYSTEMS</td>
            <td>Falkinburg, Jeffrey</td>
            <td>Spring 2021</td>
            <td>3</td>
            <td>In Progress</td>
        </tr>
        <tr>
            <td>CSCE451</td>
            <td>OPERATING SYSTEMS PRINCIPLES</td>
            <td>Bohn, Christopher</td>
            <td>Spring 2021</td>
            <td>4</td>
            <td>In Progress</td>
        </tr>
        <tr>
            <td>CSCE455</td>
            <td>DISTRBUTED OPERATING SYSTEMS</td>
            <td>Bourke, Christopher</td>
            <td>Spring 2021</td>
            <td>3</td>
            <td>In Progress</td>
        </tr>
        <tr>
            <td>CSCE466</td>
            <td>SOFTWARE DESIGN & ARCHITECTURE</td>
            <td>Garvin, Brady</td>
            <td>Spring 2021</td>
            <td>3</td>
            <td>In Progress</td>
        </tr>
        <tr>
            <td>CSCE430</td>
            <td>COMPUTER ARCHITECTURE</td>
            <td>Bourke, Christopher</td>
            <td>Fall 2020</td>
            <td>4</td>
            <td>B+</td>
        </tr>
        <tr>
        <td>CSCE413</td>
        <td>DATABASE SYSTEMS</td>
            <td>Garvin, Brady</td>
            <td>Fall 2020</td>
            <td>3</td>
            <td>In Progress</td>
        </tr>
        <tr>
        <td>CSCE423</td>
        <td>DSGN & ANLYS ALGORTHMS</td>
            <td>Bohn, Christopher</td>
            <td>Fall 2020</td>
            <td>3</td>
            <td>In Progress</td>
        </tr>
        <tr>
        <td>CSCE155E</td>
        <td>CS I: SYSTEMS ENGR</td>
            <td>Bourke, Christopher</td>
            <td>Fall 2018</td>
            <td>3</td>
            <td>A</td>
        </tr>
        <tr>
        <td>CSCE251</td>
        <td>UNIX PROGRAMMING</td>
            <td>Wirka, Garrett</td>
            <td>Fall 2018</td>
            <td>3</td>
            <td>A</td>
        </tr>
        
        <tr>
        <td>CSCE230</td>
        <td>COMPUTER ORGANIZATN</td>
            <td>Falkinburg, Jeffrey</td>
            <td>Fall 2018</td>
            <td>4</td>
            <td>A</td>
        </tr>
        <tr>
        <td>CSCE156</td>
        <td>COMPUTER SCIENCE II</td>
            <td>Park, Kang</td>
            <td>Spring 2019</td>
            <td>4</td>
            <td>A-</td>
        </tr>
        <tr>
        <td>MATH106</td>
        <td>ANALYTIC GEOMETRY & CALCULUS I</td>
            <td>Farthing, Cindy</td>
            <td>Spring 2019</td>
            <td>5</td>
            <td>B+</td>
        </tr>
        <tr>
        <td>CSCE310</td>
        <td>DATA STRUCT & ALGORITH</td>
            <td>Patrick, Ryan</td>
            <td>Spring 2019</td>
            <td>3</td>
            <td>A-</td>
        </tr>
        <tr>
        <td>CSCE231</td>
        <td>COMP SYSTMS ENGINEERING</td>
            <td>Johnson, Aaron</td>
            <td>Fall 2019</td>
            <td>4</td>
            <td>B+</td>
            
        </tr>
        <tr>
        <td>CSCE361</td>
        <td>SOFTWARE ENGINEERING</td>
            <td>Gopal, Bhuvaneswari</td>
            <td>Fall 2019</td>
            <td>3</td>
            <td>A-</td>
            
        </tr>
        <tr>
        <td>CSCE322</td>
        <td>PRGRM LANG CONCEPTS</td>
            <td>Patrick, Ryan</td>
            <td>Fall 2019</td>
            <td>3</td>
            <td>A</td>
            
        </tr>
        <tr>
        <td>MATH107</td>
        <td>CALCULUS II</td>
            <td>Harbourne, Brian</td>
            <td>Spring 2020</td>
            <td>4</td>
            <td>B-</td>
            
        </tr>
        <tr>
        <td>CSCE351</td>
        <td>OPERATNG SYS KERNELS</td>
            <td>Srisa-An, Witawas</td>
            <td>Spring 2020</td>
            <td>3</td>
            <td>A-</td>
            
        </tr>
        <tr>
        <td>CSCE236</td>
        <td>EMBEDDED SYSTEMS</td>
            <td>Falkinburg, Jeffrey</td>
            <td>Spring 2020</td>
            <td>3</td>
            <td>A</td>
            
        </tr>
        <tr>
        <td>CSCE440</td>
        <td>NUMERICAL ANALYSIS I</td>
            <td>Revesz, Peter</td>
            <td>Spring 2020</td>
            <td>3</td>
            <td>B+</td>
            
        </tr>
        </table>
        </div>
      
    </div>
  );
};

export default User;
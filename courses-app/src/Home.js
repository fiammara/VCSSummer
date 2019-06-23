import React from "react";
import Calendar from 'react-calendar';
import Courses from './CourseCard';

const Home = () => {
    return (
        <div id="mainContainer">
            <table>
                <tr>
                    <td>Home page
            </td>
                    <td>
                        <button onClick={() => "# "}>
                            <Calendar />
                            Great calendar
                </button>
                    </td>
                </tr>

                <tr>
                    <td>Text
            </td>
                    <td>
                        <button onClick={() => "# "}>
                            Button
                </button>
                    </td>
                </tr>
            </table>
            <Courses.CourseCards />
        </div>
    );
};

export default Home;
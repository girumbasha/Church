import React from 'react';
import './Schedule.css'; // Import the CSS file for styling

const Schedule = () => {
  return (
    <div id="schedule">
      <section className="schedule">
        <h2 className="schedule-title">Weekly Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Morning Program</th>
              <th>Evening Program</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sunday</td>
              <td>Worship</td>
              <td>Disciple class 4:00 PM - 5:30 PM</td>
            </tr>
            <tr>
              <td>Monday</td>
              <td>Praying 6:00 AM - 7:00 AM</td>
              <td>Mother's Prayer 5:00 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Praying 6:00 AM - 7:00 AM</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>-</td>
              <td>Worship 5:00 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Praying 6:00 AM - 7:00 AM</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>-</td>
              <td>Youth Worship 5:00 PM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>Kids Sunday School and Development 8:00 AM - 9:00 PM</td>
              <td>-</td>
            </tr>
            {/* Add rows for the remaining days of the week */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Schedule;

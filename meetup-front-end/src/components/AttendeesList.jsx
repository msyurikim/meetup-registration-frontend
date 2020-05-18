import React from 'react';

class AttendeesList extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
    return (
      <div className="attendees">
        <h2>Attendees</h2>
        <h3>Beginner</h3>
        <div>Hoban Washburn</div>
        <div>Jayne Cobb</div>
        <h3>Intermediate</h3>
        <div>Zoe Washburn</div>
        <h3>Expert</h3>
        <div>Malcom Reyolds</div>
        <div>Kaylee Frye</div>
      </div>
    );
  }
}

export default AttendeesList;;

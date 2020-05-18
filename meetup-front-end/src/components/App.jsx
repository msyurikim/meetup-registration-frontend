import React from 'react';
import AttendeeList from './AttendeeList.jsx';
import AttendeeForm from './AttendeeForm.jsx';

import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attendees: []
    };
  }

  getAttendees() {
    axios.get('/attendees')
      .then((response) => {
        this.setState({
          attendees: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getAttendees();
  }



  render() {
    const { attendees } = this.state;
    return(
      <div className="main">
        <AttendeeList attendees={attendees} />
        <AttendeeForm />
      </div>
    );
  }

}

export default App;

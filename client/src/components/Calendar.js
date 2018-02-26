import React from 'react';
import '../Calendar.css';
import Dropdown from './Dropdown';
import { Container, Header, Button, Divider, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import axios from 'axios';

class Calender extends React.Component{
  state = { events: [] }

  render() {
    return(
      <div className='bodyCalendar'>
        <Dropdown />
        <br />
        <br />
        <div as='h1' className='scheduleTitle'>
          CVAC Schedule
        </div>
        <br />
        <br />
        <Container>
          <div className='calendar'>
            <Image src={require('../images/calendar.jpg')} />
          </div>
        </Container>
        <Container>
          <div className='calendar'>
            <Image src={require('../images/calendar2.jpg')} />
          </div>
        </Container>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
            <div className='footer'>
              <a href="https://www.facebook.com/cvacsopa/">
                <Icon color='black' name='facebook square' size='huge' />
              </a>
              <a href="https://www.instagram.com/cvac_kinuko/">
                <Icon color='black' name='instagram' size='huge' />
              </a>
              <div className='footnote2'>
                <p>All Rights Reserved</p>
              </div>
              <div className='footnote2'>
                <Link to="/ContactUs">
                  Contact Us
                </Link>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Calender;

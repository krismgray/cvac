import React from 'react';
import '../Home.css';
import { Container, Header, Button, Divider, Icon, Sidebar, Segment, Menu, Image, Grid } from 'semantic-ui-react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';



class Home extends React.Component {


  render() {
    return(
      <div>
        <div className="box1">
          <div className='tabMenu'>
          <Dropdown />
          </div>
          <br />
          <br />
          <div>
            <h1 className='name'>CVAC</h1>
          </div>
          <div>
            <h2 className='name2'>Canyon View Arts Center</h2>
          </div>
        </div>
        <div className="break">
          <div className="breakContent">
          <div>
              <p className="breakTitle">Dance Calendar 2017-2018</p>
          </div>
          <br />
          <div>
            <Link to="/Calendar">
              <Button secondary size='huge' onClick={this.goToAbout}>CLICK HERE</Button>
            </Link>
          </div>
          </div>
        </div>
        <div className="box2">
          <h1 className="mission">Our goal is to provide a safe and dedicated learning center to the art of dance.
            We have helped youth learn many skills which they will carry through the rest of their lives. Learning Dance
            is more than skills, it is building character.
          </h1>
        </div>
        <div className="box4">
          <h1 className="about">
            <p className="aboutTitle">
              Dance
            </p>
            Develop confidence, Learn Teamwork, and enhance skills.
              </h1>
        </div>
        <div className="box5">
          <Grid colums={2}>
            <Grid.Column className="column1">

            </Grid.Column>
          </Grid>
        </div>
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
    )
  }
}


export default Home;

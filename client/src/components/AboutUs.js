import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { Container, Header, Button, Divider, Icon, Sidebar, Segment, Menu, Image, Grid } from 'semantic-ui-react';
import '../About.css';
import Map from './Map';

class AboutUs extends React.Component {



  render() {
    return(
      <div>
        <div className='toppage'>
          <div>
            <Dropdown />
          </div>
        </div>
        <div className='content1'>
          <p className='title1'>About Us</p>
        </div>
        <div className='content2'>
          <div className='address'>
            <p>We are located in Riverton on the corner of 2700 w. and 12600 s. We teach many forms of dance
              at our studio including jazz, ballet, hip-hop, ballroom, and more! We are equiped with full-length mirrors
              and ballet bars. This is the perfect enviornment to help your child grow!
            </p>
          </div>
          <Map />
        </div>
        <div className='content3'>
          <Grid relaxed columns={2} padded='vertically'>
            <Grid.Column className='col1'>
              <div className='colimage'>
                <Image src={require('../images/dance2.jpeg')} />
              </div>
            </Grid.Column>
            <Grid.Column className='col2'>
              <div className='colword'>
                <p className='ourmish'>Our Mission</p>
                <p>At CVAC we have created a positive and uplifting envoirnment for all ages. We offer a variety
                  of classes including competetive teams. Our focus is to help gain the best experience and hold our
                  studio at a very high standard. We respect the parents opinions and strive to accomodate all lifestyles, religious beliefs, and
                  standards. Having been in the industry for over 14 years we know how important dance is to help the growth of your child.
                </p>
              </div>
            </Grid.Column>
          </Grid>
        </div>
        <div className='content4'>
            <p>Contact us today to learn more or come in and check us out!</p>
          <div className='contact'>
            <Link to="/ContactUs">
              <Button primary size='large'>Contact Us!</Button>
            </Link>
          </div>
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

export default AboutUs;

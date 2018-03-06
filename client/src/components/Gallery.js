import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';
import '../Gallery.css';
import { Container, Header, Button, Divider, Icon, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';




class Gallery extends React.Component {


  render() {

    const images = [
      {
        original: require('../images/cat1.jpg'),
        thumbnail: require('../images/cat1.1.jpg')
      },
      {
        original: require('../images/cat2.jpg'),
        thumbnail: require('../images/cat2.1.jpg')
      },
      {
        original: require('../images/cat3.jpg'),
        thumbnail: require('../images/cat3.1.jpg')
      },
      {
        original: require('../images/cat4.2.jpg'),
        thumbnail: require('../images/cat4.1.jpg')
      },
      {
        original: require('../images/cat2.jpg'),
        thumbnail: require('../images/cat2.1.jpg')
      },
      {
        original: require('../images/cat3.jpg'),
        thumbnail: require('../images/cat3.1.jpg')
      },
      {
        original: require('../images/cat1.jpg'),
        thumbnail: require('../images/cat1.1.jpg')
      },
      {
        original: require('../images/cat4.2.jpg'),
        thumbnail: require('../images/cat4.1.jpg')
      },
    ]

    return(
      <div>
      <div className='gal'>
        <div>
          <Dropdown />
        </div>
        <div className='explain'>
          <p>Still Waiting on Pictures from Studio to finish Gallery</p>
        </div>
        <div className='galStyle'>
          <br />
          <ImageGallery items={images} />
        </div>
      </div>
        <Segment>
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
              <a href="mailto:henderson.gray.inc@gmail.com">
                Contact Us
              </a>
            </div>
          </div>
        </Segment>
      </div>
    )
  }
}

export default Gallery;

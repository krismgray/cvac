import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';
import '../Gallery.css';
import { Container, Header, Button, Divider, Icon, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ImageButton } from '../Pics.style.js'
import Zoomy from 'react-zoomy';


class Gallery extends React.Component {


  render() {
    return(
      <div className='gal'>
      <div>
        <Dropdown />
      </div>
      <div className='galStyle'>
        <br />
        <Zoomy
          imageUrl={require('../images/cat2.jpg')}
          renderThumbnail={({ showImage }) =>
          <ImageButton onClick={showImage}>
            <img src={require('../images/cat2.1.jpg')} />
          </ImageButton>
        }
          scale={[1.1, 1.1]}
          imageProps={{
            style: {
              width: '100vw',
              height: 'auto'
            }
          }}
        />
        <Zoomy
          imageUrl={require('../images/cat1.jpg')}
          renderThumbnail={({ showImage }) =>
          <ImageButton onClick={showImage}>
            <img src={require('../images/cat1.1.jpg')} />
          </ImageButton>
        }
          scale={[1.1, 1.1]}
          imageProps={{
            style: {
              width: '100vw',
              height: 'auto'
            }
          }}
        />
        <Zoomy
          imageUrl={require('../images/cat3.jpg')}
          renderThumbnail={({ showImage }) =>
          <ImageButton onClick={showImage}>
            <img src={require('../images/cat3.1.jpg')} />
          </ImageButton>
        }
          scale={[1.1, 1.1]}
          imageProps={{
            style: {
              width: '100vw',
              height: 'auto'
            }
          }}
        />
      </div>
      <div className='galStyle'>
        <br />
        <Zoomy
          imageUrl={require('../images/cat1.jpg')}
          renderThumbnail={({ showImage }) =>
          <ImageButton onClick={showImage}>
            <img src={require('../images/cat1.1.jpg')} />
          </ImageButton>
        }
          scale={[1.1, 1.1]}
          imageProps={{
            style: {
              width: '100vw',
              height: 'auto'
            }
          }}
        />
        <Zoomy
          imageUrl={require('../images/cat3.jpg')}
          renderThumbnail={({ showImage }) =>
          <ImageButton onClick={showImage}>
            <img src={require('../images/cat3.1.jpg')} />
          </ImageButton>
        }
          scale={[1.1, 1.1]}
          imageProps={{
            style: {
              width: '100vw',
              height: 'auto'
            }
          }}
        />
        <Zoomy
          imageUrl={require('../images/cat2.jpg')}
          renderThumbnail={({ showImage }) =>
          <ImageButton onClick={showImage}>
            <img src={require('../images/cat2.1.jpg')} />
          </ImageButton>
        }
          scale={[1.1, 1.1]}
          imageProps={{
            style: {
              width: '100vw',
              height: 'auto'
            }
          }}
        />
      </div>
      <Segment>
      <div className='footer'>
        <a href="https://www.facebook.com/cvacsopa/">
          <Icon color='black' name='facebook square' size='huge' />
        </a>
        <a href="https://www.instagram.com/cvac_kinuko/">
          <Icon color='black' name='instagram' size='huge' />
        </a>
        <div className='footnote1'>
          <p>All Rights Reserved</p>
        </div>
        <div className='footnote1'>
          <p>Contact Us</p>
        </div>
      </div>
      </Segment>
    </div>
    )
  }
}

export default Gallery;

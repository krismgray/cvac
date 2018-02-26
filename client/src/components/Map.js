import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { Button, Segment, Header, Form, Input, Divider } from 'semantic-ui-react';
import axios from 'axios';

class Map extends React.Component {
  static defaultProps = {
    center: { lat: 40.5217, lng: -111.9582 },
    zoom: 16,
  }

  state = {
    center: this.props.center,
    zoom: this.props.zoom,
    address: 'Canyon View Arts Center',
  }


  render() {
    const { center, zoom, address } = this.state;
    return(
        <div>
        <Segment basic style={{ height: '600px', width: '600px', margin: '0 auto' }}>
          <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zoom}
            center={center}
          />
        </Segment>
      </div>
    )
  }

}

export default connect()(Map);

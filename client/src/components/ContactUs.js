import React from 'react';
import '../Register.css';
import Dropdown from './Dropdown';
import { Container, Header, Button, Divider, Icon, Segment, Form, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class ContactUs extends React.Component{
  state = { name: '', email: '', message: '' }

  handleChange = (e) => {
    let { target: { name, value }} = e;
    this.setState({ [name]: value })
  }


  render() {
    const { value } = this.state
    return(
      <div>
        <div>
          <Dropdown />
        </div>
        <div className='formWrap'>
          <Form onSubmit={this.handleSubmit} className='form'>
            <Form.Group widths='equal'>
              <Form.Input onChange={this.handleChange} value={this.state.name} fluid label='Full Name' placeholder='Name here please' name='name' />
              <Form.Input onChange={this.handleChange} value={this.state.email} fluid label='Email' placeholder='Email' name='email' />
            </Form.Group>
            <Form.TextArea onChange={this.handleChange} value={this.state.message} label='Message' name='message' placeholder='Please let us know what this is in regards to!' />
            <Form.Button>Submit</Form.Button>
          </Form>
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

            <p>Contact Us</p>
          </div>
        </div>
        </Segment>
      </div>
    )
  }
}

export default ContactUs;

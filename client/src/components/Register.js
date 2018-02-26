import React from 'react';
import '../Register.css';
import Dropdown from './Dropdown';
import { Container, Header, Button, Divider, Icon, Segment, Form, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

class AboutUs extends React.Component{
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = () => {

  }


  render() {
    const { value } = this.state
    return(
      <div>
        <div>
          <Dropdown />
        </div>
        <p className='title'>If you are interested please fill out the following. We will get in touch with you and go into more details!</p>
        <div className='formWrap'>
          <Form onSubmit={this.handleSubmit} className='form'>
            <Form.Group widths='equal'>
              <Form.Input fluid label='First name' placeholder='First name' />
              <Form.Input fluid label='Last name' placeholder='Last name' />
              <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            <Form.Group inline>
              <label>Size</label>
              <Form.Radio label='Extra Small' value='xs' checked={value === 'xs' } onChange={this.handleChange} />
              <Form.Radio label='Small' value='sm' checked={value === 'sm' } onChange={this.handleChange} />
              <Form.Radio label='Medium' value='md' checked={value === 'md' } onChange={this.handleChange} />
              <Form.Radio label='large' value='lg' checked={value === 'lg' } onChange={this.handleChange} />
            </Form.Group>
            <Form.Group inline>
              <Form.Field>
                <label>Phone Number</label>
                <Input placeholder='(xxx)' />
              </Form.Field>
              <Form.Field>
                <Input placeholder='xxx' />
              </Form.Field>
              <Form.Field>
                <Input placeholder='xxxx' />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Email</label>
              <Input placeholder='example@example.com' />
            </Form.Field>
            <Form.Group grouped>
              <label>Class Interests</label>
              <Form.Field label='Ballet' control='input' type='checkbox' />
              <Form.Field label='Hip Hop' control='input' type='checkbox' />
              <Form.Field label='Jazz' control='input' type='checkbox' />
              <Form.Field label='Modern' control='input' type='checkbox' />
              <Form.Field label='Pointe' control='input' type='checkbox' />
            </Form.Group>
            <Form.TextArea label='Dance history' placeholder='Tell us about your dance history...' />
            <Form.Button content='Submit' />
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
            <Link to="/ContactUs">
              Contact Us
            </Link>
          </div>
        </div>
        </Segment>
      </div>
    )
  }
}

export default AboutUs;

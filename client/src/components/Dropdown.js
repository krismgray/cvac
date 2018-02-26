import React from 'react';
import { Container, Header, Button, Divider, Icon, Sidebar, Segment, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Dropdown extends React.Component{
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return(
      <div>
        <Button secondary onClick={this.toggleVisibility}><Icon name='content' size='large' /></Button>
          <Sidebar as={Menu} animation='overlay' visible={visible} vertical inverted>
            <Button secondary onClick={this.toggleVisibility}><Icon name='remove' size='large' /></Button>
            <Link to="/">
              <Menu.Item name='home'>
                Home
              </Menu.Item>
            </Link>
            <Link to="/AboutUs">
              <Menu.Item name='AboutUs'>
                About Us
              </Menu.Item>
            </Link>
            <Link to='Register'>
              <Menu.Item name='register'>
                Register
              </Menu.Item>
            </Link>
            <Link to='Calendar'>
              <Menu.Item name='calendar'>
                Calendar
              </Menu.Item>
            </Link>
          </Sidebar>

      </div>
    )
  }


}

export default Dropdown;

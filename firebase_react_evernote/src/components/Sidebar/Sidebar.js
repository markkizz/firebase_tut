import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './Sidebar.style'
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../SidebarItem/SidebarItem';

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <h1>Hello Sidebar</h1>
      </div>
    )
  }
}

export default Sidebar

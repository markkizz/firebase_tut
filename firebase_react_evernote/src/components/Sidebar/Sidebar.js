import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './Sidebar.style'
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../SidebarItem/SidebarItem';

export class Sidebar extends Component {
  state = {
    addingNote: false,
    title: null
  }
  render() {
    const {notes, selectedNoteIndex, classes} = this.props
    return (
      <div>
        <Button
        onClick
        >
          New Note
        </Button>
      </div>
    )
  }
}

export default Sidebar

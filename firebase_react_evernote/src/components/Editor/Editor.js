import React, { Component } from "react";
import ReactQuill from "react-quill";
import debounce from "../../helpers";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Editor.style.js";

import {toolbarOptions} from '../../config/editorConf';

class EditorComponent extends Component {
  state = {
    text: "",
    title: "",
    id: ""
  };

  update = debounce(() => {
    console.log("UPDATE DATABASE");
  }, 1500)

  updateBody = async value => {
    await this.setState({
      text: value
    })
    this.update()
  }

  render() {
    const {id, title, text} = this.state;
    const {classes} = this.props;
    return (
      <div className={classes.editorContainer}>
        <ReactQuill modules={{ toolbar: toolbarOptions }} value={text} onChange={this.updateBody} />
      </div>
    );
  }
}

export default withStyles(styles)(EditorComponent);

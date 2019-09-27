import React, { Component } from "react";
import { connect } from "react-redux";
 
import {addTask}  from "../actions/actions"



class Add extends Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleAdd = e => {
    e.preventDefault();
    this.props.addTask({
      key: Date.now(),
      title: this.state.task,
      isCompleted: false,
      edit:false
    });

    this.setState({
      task: ""
    });
  };


  render() {
    return (
      <div>
        <h1> Daily Todo Lists!</h1>

        <div className="header">
          <input
            type="text"
            name="task"
            value={this.state.task}
            placeholder=" Add Your Todo"
            onChange={event => {
              this.setState({
                task: event.target.value
              });
            }}
          />
          <button onClick={e => this.handleAdd(e)}>Add </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTask: (payload) => dispatch(addTask(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(Add);

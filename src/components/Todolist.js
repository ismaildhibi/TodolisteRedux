import React, { Component } from "react"
import { connect } from "react-redux"

import { deleteTask, editTask, completeTask } from "../actions/actions"

class Todolist extends Component {
  // const [edittodo,setedittodo]=useState('')
  state = {
    edittodo: ""
  }
  render() {
    return (
      <div>
        {this.props.items.map(el =>



          <div key={el.key}>
            <button onClick={(e) => { e.preventDefault(e); this.props.deleteTask(el.key) }}> DELETE</button>

            <button onClick={(e) => { e.preventDefault(e); this.props.editTask({ key: el.key, title: this.state.edittodo }) }}>EDIT</button>

            {el.edit ? <input type="text" onChange={e => this.setState({ edittodo: e.target.value })} /> : <p className={el.isCompleted ? "completed" : ""}>{el.title}</p>}

            <button onClick={(e) => { e.preventDefault(e); this.props.completeTask(el.key) }}> COMPLETE</button>




          </div>
        )}
      </div>
    )
  }


}
const mapStateToProps = (state) => {
  return {
    items: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (payload) => dispatch(deleteTask(payload)),
    editTask: (payload) => dispatch(editTask(payload)),
    completeTask: (payload) => dispatch(completeTask(payload)),



  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)














































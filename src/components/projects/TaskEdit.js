import React from 'react'
import AddTask from './AddTask'
import { connect } from 'react-redux'
import { editTask } from '../../actions/tasks'

class TaskEdit extends React.Component {


    handleSubmit = formData => {
        this.props.dispatch(editTask(formData.id, formData))
        this.props.history.push('/')
    }




    render() {
        console.log(this.props)
        console.log(this.props.task)


        return (
            <div>
                <h2>Task Edit </h2>
                <AddTask handleSubmit={this.handleSubmit} task={this.props.task} />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        task: state.task.find(task => task.id == props.match.params.id)
    }


}
export default connect(mapStateToProps)(TaskEdit)
import React, {Component} from 'react'

class Process extends Component {
    constructor(props) {
        super(props)
        const {process} = this.props
        this.state = {
            id: process.id,
            mark: process.actual_mark === null ? "" : process.actual_mark,
            status: process.status
        }
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    handleMarkChange = e => {
        this.setState({
            mark: e.target.value,
        })
    }

    handleStatusChange = e => {
        this.setState({
            status: e.target.value,
        })
    }

    handleSubmit = () => {
        this.props.updateProcess(this.state)
    }

    render() {
        console.log(this.props.process.submitted)
        return (
            <tr>
                <th>{this.props.process.student.username}</th>
                <th>{this.props.process.student.email}</th>
                <th>{this.props.process.student.group}</th>
                <th><input className="form-control input_m" type="text" name="mark"
                           value={this.state.mark}
                           onChange={this.handleMarkChange}/>
                </th>
                <th>
                    <select className="form-control"
                            value={this.state.status}
                            onChange={this.handleStatusChange}
                    >
                        <option value="PEND">Pending</option>
                        <option value="DONE">Done</option>
                        <option value="OVER">Over Due</option>
                    </select>
                </th>
                <th>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </th>
                <th>
                    <h3 className="no_margin" style={{display: this.props.process.submitted === undefined ? "none" : "block"}}>
                        <span className="label label-success">Success</span>
                    </h3>
                </th>
            </tr>

        )
    }
}

export default Process
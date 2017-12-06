import React from 'react'

export const StuProcessList = props => {
    let listItem
    let actual_mark = 0
    let total_mark = 0

    // console.log(props)
    if (props.processList && props.processList.data instanceof Array)
        listItem = props.processList.data.map(item => {
            let status
            if (item.status === "PEND")
                status = <span className="label label-warning">Pending</span>
            else if (item.status === "DONE")
                status = <span className="label label-success">Done</span>
            else
                status = <span className="label label-danger">Over Due</span>

            total_mark += item.list.mark
            if (item.actual_mark) {
                actual_mark += item.actual_mark
            }

            return (
                <tr key={item.id}>
                    <th>{item.list.list_name}</th>
                    <th>{props.group === 'Fall' ? item.list.fall_due_date : item.list.winter_due_date}</th>
                    <th>{item.list.mark}</th>
                    <th>{item.actual_mark}</th>
                    <th>{status}</th>
                </tr>
            )
        })

    return (
        <div className="col-lg-12 col-md-12">
            <div className="row">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Task</th>
                        <th>Due Date</th>
                        <th>Percentage</th>
                        <th>Actual</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listItem}
                    </tbody>
                </table>
            </div>
            <div className="row">
                <h4 className="pull-right ">Mark: {actual_mark}/{total_mark}</h4>
            </div>
        </div>
    )
}
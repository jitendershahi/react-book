import React, { Component } from 'react';
import { Row } from 'antd';
import EditableTimer from '../EditableTimer'

class EditableTimerList extends Component {
    render() {
        return (
            <Row>
                <EditableTimer />
            </Row>
        );
    }
}

export default EditableTimerList;
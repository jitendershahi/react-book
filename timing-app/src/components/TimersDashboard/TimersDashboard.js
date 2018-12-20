import React, { Component } from 'react';
import { Row } from 'antd';
import EditableTimerList from '../EditableTimerList';

class TimersDashboard extends Component {
    render() {
        return (
            <Row>
                <h1>TimersDashboard</h1>
                <EditableTimerList />
            </Row>
        );
    }
}

export default TimersDashboard;
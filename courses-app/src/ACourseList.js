import React, { Component } from 'react';
import axios from 'axios';
import ACourse from './ACourse';
import Modal from 'react-modal'
import CourseAddComponent from './CourseAddComponent';

class ACourseList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addModal: false,
            courses: [{
                id: '',
                name: ''
            }],
            newItem: {
                name: ''
            },
        };

    }

    componentDidMount() {
        this.getData();

    }

    getData() {
        axios.get("http://localhost:8080/api/courses").then((response) => {
            this.setState({ courses: response.data });

        });
    }

    openAddModal = () => {
        this.setState({
            addModal: true
        });
    }
    closeAddModal = () => {
        this.setState({
            addModal: false
        });
    }

    addItem = () => {

        const { name } = this.state.newItem;

        axios.post("http://localhost:8080/api/courses", { name }).then(
            this.getData()
        );
    }
    
    render() {
        
        return (
            <div className="todoList">

                <Modal className="addModal" isOpen={this.state.addModal} onRequestClose={this.closeAddModal}>
                   <CourseAddComponent cancel={this.closeAddModal} add={this.handleOnAddItem} />
                </Modal>

                <p>Courses list:</p>
                <table className="table">
                    <tbody>
                        {this.state.courses.map((course, index) => {
                            return <ACourse key={course.id} arrayId={index} data={course} />
                        })}
                    </tbody>
                </table>
                <br />
                <button onClick={this.openAddModal} className="addButton">Add new course</button>
            </div>
        );
    }
}

export default ACourseList;
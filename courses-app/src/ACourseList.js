import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import ACourse from './ACourse';
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
            /*  newItem: {
                  name: ''
              }, */
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('http://localhost:8080/api/courses').then((response) => {
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

        axios.post('http://localhost:8080/api/courses', { name }).then(
            this.getData()
        );
    }

    render() {
        const { courses, addModal } = this.state;
        return (
          <div className="coursesList">

            <Modal className="addModal" isOpen={addModal} onRequestClose={this.closeAddModal}>
              <CourseAddComponent cancel={this.closeAddModal} add={this.handleOnAddItem} />
            </Modal>

            <p>Courses list:</p>
            <table>
              <tbody>
                {courses.map((course, index) => (
                  <ACourse 
                    key={course.id} 
                    arrayId={index} 
                    data={course} 
                  />
                 ))}                       
              </tbody>
            </table>
            <br />
            <button type="button" onClick={this.openAddModal}>Add new course</button>
          </div>
        );
    }
}

export default ACourseList;

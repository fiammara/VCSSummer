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
            courses: [],         
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

    addItem = () => {
        const { name } = this.state;

        axios.post('http://localhost:8080/api/courses', { name }).then(
            this.getData()
        );
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

    render() {
        const { courses, addModal } = this.state;
        return (
          <div className="coursesList">

            <Modal className="addModal" isOpen={addModal} onRequestClose={this.closeAddModal}>
              <CourseAddComponent onCancel={this.closeAddModal} add={this.handleOnAddItem} />
            </Modal>

            <p>Courses list:</p>
            <div>            
              {courses.map((course, index) => (
                <ACourse 
                  {...course}
                  key={course.id} 
                  arrayId={index}
                />
                 ))}                                  
            </div>
            <br />
            <button type="button" onClick={this.openAddModal}>Add new course</button>
          </div>
        );
    }
}

export default ACourseList;

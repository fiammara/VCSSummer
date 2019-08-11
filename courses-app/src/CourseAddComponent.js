import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class CourseAddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                {
                    name: ''
                }
            ]
        };
    }

    handleChangeFor = property => (event) => {
        this.setState({ [property]: event.target.value });
    };

    addItem = (event) => {
        event.preventDefault();

        const newItem = {
            name: this.state.name
        };

        if (this.state.name !== undefined) {
            axios
                .post('http://localhost:8080/api/courses/addCourse', newItem)
                .then(window.location.replace('/courses'));
        } else {
            alert("new item can't be empty");
        }
    };

    render() {
        return (
          <div>
            <p>Name your course</p>

            <div>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    autoComplete="off"
                    value={this.name}
                    onChange={this.handleChangeFor('name')}
                  />
                </div>

                <div className="btn-group">
                  <button 
                    type="button"
                    onClick={this.props.onCloseModal}
                    className="inputButton"
                  >
                                Cancel
                  </button>
                  <button
                    type="button"
                    onClick={this.addItem}
                    className="inputButton"
                  >
                    <NavLink to={{ pathname: '/courses' }} />
                                OK
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default CourseAddComponent;

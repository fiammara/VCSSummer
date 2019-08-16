import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class CourseAddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ' ',
        };
    }

    handleChangeFor = property => (event) => {
        this.setState({ [property]: event.target.value });
    };

    addItem = (event) => {
      const { name } = this.state;
        event.preventDefault();
       
        const newItem = {
            name,
        };

        if (name !== undefined) {
            axios
                .post('http://localhost:8080/api/courses/addCourse', newItem)
                .then(window.location.replace('/calendar'));
        } else {
            alert("new item can't be empty");
        }
    };

    render() {
      const { onCancel } = this.props;
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
                    onClick={onCancel}
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

CourseAddComponent.propTypes = {    
  onCancel: PropTypes.func.isRequired,
};  

export default CourseAddComponent;

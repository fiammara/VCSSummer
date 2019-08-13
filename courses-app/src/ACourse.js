import React from 'react';
import PropTypes from 'prop-types';

const ACourse = props => 

 (
                    
   <div>{props.name}</div>);   

 ACourse.propTypes = {   
      name: PropTypes.string.isRequired,      
};

export default ACourse;

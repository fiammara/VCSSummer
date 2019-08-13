import React from 'react';
import PropTypes from 'prop-types';

const ACourse = (props) => {
const { name } = props;
return (<div>{name}</div>);
};

ACourse.propTypes = {    
  name: PropTypes.string.isRequired, 
};
export default ACourse;

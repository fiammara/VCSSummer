import React from 'react';
import './Main.css';
import './Blog.css';
import PropTypes from 'prop-types';

const BlogPost = (props) => {

  return ( 
    <div className="blogPost">

      <div className="blog1">
        <div className="blogImg">
          {props.blogImg}
        </div>
      </div>

      <div className="blog2">
        <div className="blogTitle">
          <h3 className="blogTitleH">
            {props.blogTitle}
          </h3>
        </div>
        <div className="blogAuthorImg">
          {props.blogAuthorImg}

        </div>
        <div className="blogAuthor">
          <h3>{props.blogAuthor}</h3>
          <h3>{props.title}</h3>
        </div>
        <div className="blogDate">
          <h3>{props.blogDate}</h3>
        </div>
      </div>

      <div className="blog3">
        <div className="blogTextwBtn">
          <p>
            {props.blogTextwBtn}
          </p>
          <button type="button">Skaityti</button>
        </div>
      </div>
    </div>
    );
};
    BlogPost.propTypes = {
    
      blogImg: PropTypes.element.isRequired,
      blogTitle: PropTypes.string.isRequired,
      blogAuthorImg: PropTypes.element.isRequired,
      blogAuthor: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      blogDate: PropTypes.string.isRequired,
      blogTextwBtn: PropTypes.string.isRequired,
        
};

export default BlogPost; 

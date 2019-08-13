import React from 'react';
import './Main.css';
import './Blog.css';
import PropTypes from 'prop-types';

const BlogPost = (props) => {
  const {
 blogImg, 
 blogTitle, 
 blogAuthorImg, 
 blogAuthor, 
 title, 
 blogDate, 
 blogTextwBtn 
} = props;

  return ( 
    <div className="blogPost">

      <div className="blog1">
        <div className="blogImg">
          {blogImg}
        </div>
      </div>

      <div className="blog2">
        <div className="blogTitle">
          <h3 className="blogTitleH">
            {blogTitle}
          </h3>
        </div>
        <div className="blogAuthorImg">
          {blogAuthorImg}
        </div>
        <div className="blogAuthor">
          <h3>{blogAuthor}</h3>
          <h3>{title}</h3>
        </div>
        <div className="blogDate">
          <h3>{blogDate}</h3>
        </div>
      </div>

      <div className="blog3">
        <div className="blogTextwBtn">
          <p>
            {blogTextwBtn}
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
      blogTextwBtn: PropTypes.string.isRequired       
};

export default BlogPost; 

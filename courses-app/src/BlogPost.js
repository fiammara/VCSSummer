import React from "react";
import "./Main.css";
import "./Blog.css";
import PropTypes from 'prop-types';

const BlogPost = props => {
    return (

        <div className="blogPost" >

            < div className="blog1" >
                <div className="blogImg">
                    {props.data.blogImg}
                </div>
            </div >

            < div className="blog2" >
                <div className="blogTitle">
                    <h3 className="blogTitleH">{props.data.blogTitleH}</h3>
                </div>
                <div className="blogAuthorImg">
                    {props.data.blogAuthorImg}

                </div>
                <div className="blogAuthor">
                    <h3>{props.data.blogAuthor}</h3>
                    <h3>{props.data.title}</h3>
                </div>
                <div className="blogDate">
                    <h3>{props.data.blogDate}</h3>
                </div>
            </div >

            < div className="blog3" >
                <div className="blogTextwBtn">
                    <p>{props.data.blogTextwBtn}
                    </p>
                    <button>Skaityti</button>
                </div>
            </div >
        </div >
    );
};
BlogPost.propTypes = {
    blogImg: PropTypes.string.isRequired,
    blogTitle: PropTypes.string.isRequired,
    blogAuthorImg: PropTypes.string.isRequired,
    blogAuthor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    blogDate: PropTypes.string.isRequired,
    blogTextwBtn: PropTypes.string.isRequired,

};
export default BlogPost; 

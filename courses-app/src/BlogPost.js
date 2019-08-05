import React from "react";
import "./Main.css";
import "./Blog.css";

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
                    <h3 className="blogTitleH">{props.data.blogTitle}</h3>
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

export default BlogPost; 
import React from "react";
import "./Main.css";
import "./Blog.css";
import BlogPost from "./BlogPost";
import Title from "./Title";

const Blog = () => {
    return (
        <div className="main">
            <div className="divas">
                <Title />
                <div className="textBlock">
                    <h3 className="intro1">pasirinkti pagal kategorijas</h3>
                    <input className="search1" type="text" name="fname" placeholder="  Visos"></input>
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                </div>
            </div>
        </div>
    );
};

export default Blog; 

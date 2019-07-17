import React from "react";
import Title from "./Title";
import "./Main.css";
import "./Blog.css";

const Blog = () => {
    return (
        <div className="main">
               
            <div className="divas">
                <Title />
                <div className="textBlock">
                    
                    <h3 className="intro1">pasirinkti pagal kategorijas</h3>
                       
                    <input className="search1" type="text" name="fname" placeholder="  Visos"></input>
                    <div className="blogPost">
                        <div className="blog1">
                            <div className="blogImg">
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyqcEbtZy1vItK_jDT9iA-wqLmkj7nb8iYipzXcbMhAaovjhLOQ"} alt=""/>
                            </div>
                        </div>
                        
                        <div className="blog2">
                            <div className="blogTitle">
                                <h3 className="blogTitleH">Sed Ut perspiciatis Unde Omnis 
                                    Iste Natus Error Sit Voluplatem</h3>
                            </div>
                            <div className="blogAuthorImg">
                            <img src={"http://www.pixelprints.co.in/images/portfolio/graphic-design/logo/small/logo_3.png"} alt="" />
                            
                            </div>
                            <div className="blogAuthor">
                                <h3>Rob Robinson</h3>
                                <h3>Title</h3>
                            </div>
                            <div className="blogDate">
                                <h3>2019.5.25</h3>
                            </div> 
                        </div>

                        <div className="blog3">
                            <div className="blogTextwBtn">
                                <p>It is a long established fact that a reader will be distracted by the readable content 
                                    of a page when looking at its layout. The point of
                                </p>
                                <button>Skaityti</button>
                             </div>
                        </div>
                    </div>
                    

                    <div className="blogPost">
                        <div className="blog1">
                            <div className="blogImg">
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyqcEbtZy1vItK_jDT9iA-wqLmkj7nb8iYipzXcbMhAaovjhLOQ"} alt=""/>
                            </div>
                        </div>
                        
                        <div className="blog2">
                            <div className="blogTitle">
                                <h3 className="blogTitleH">Sed Ut perspiciatis Unde Omnis 
                                    Iste Natus Error Sit Voluplatem</h3>
                            </div>
                            <div className="blogAuthorImg">
                            <img src={"http://www.pixelprints.co.in/images/portfolio/graphic-design/logo/small/logo_3.png"} alt="" />
                            
                            </div>
                            <div className="blogAuthor">
                                <h3>Rob Robinson</h3>
                                <h3>Title</h3>
                            </div>
                            <div className="blogDate">
                                <h3>2019.5.25</h3>
                            </div> 
                        </div>

                        <div className="blog3">
                            <div className="blogTextwBtn">
                                <p>It is a long established fact that a reader will be distracted by the readable content 
                                    of a page when looking at its layout. The point of
                                </p>
                                <button>Skaityti</button>
                             </div>
                        </div>
                    </div>

                    <div className="blogPost">
                        <div className="blog1">
                            <div className="blogImg">
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyqcEbtZy1vItK_jDT9iA-wqLmkj7nb8iYipzXcbMhAaovjhLOQ"} alt=""/>
                            </div>
                        </div>
                        
                        <div className="blog2">
                            <div className="blogTitle">
                                <h3 className="blogTitleH">Sed Ut perspiciatis Unde Omnis 
                                    Iste Natus Error Sit Voluplatem</h3>
                            </div>
                            <div className="blogAuthorImg">
                            <img src={"http://www.pixelprints.co.in/images/portfolio/graphic-design/logo/small/logo_3.png"} alt="" />
                            
                            </div>
                            <div className="blogAuthor">
                                <h3>Rob Robinson</h3>
                                <h3>Title</h3>
                            </div>
                            <div className="blogDate">
                                <h3>2019.5.25</h3>
                            </div> 
                        </div>

                        <div className="blog3">
                            <div className="blogTextwBtn">
                                <p>It is a long established fact that a reader will be distracted by the readable content 
                                    of a page when looking at its layout. The point of
                                </p>
                                <button>Skaityti</button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog; 

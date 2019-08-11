import React, { Component } from 'react';
import './Main.css';
import './Blog.css';
import BlogPost from './BlogPost';
import Title from './Title';

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {

            blogData: [
                {
                    id: 0,
                    blogImg: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyqcEbtZy1vItK_jDT9iA-wqLmkj7nb8iYipzXcbMhAaovjhLOQ" alt="" />,
                    blogTitle: 'Sed Ut perspiciatis Unde Omnis Iste Natus Error Sit Voluplatem',
                    blogAuthorImg: <img src="http://www.pixelprints.co.in/images/portfolio/graphic-design/logo/small/logo_3.png" alt="" />,
                    blogAuthor: 'Rob Robinson1',
                    title: 'Title',
                    blogDate: '2019.5.25',
                    blogTextwBtn: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of'
                },

                {
                    id: 1,
                    blogImg: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyqcEbtZy1vItK_jDT9iA-wqLmkj7nb8iYipzXcbMhAaovjhLOQ" alt="" />,
                    blogTitle: 'Sed Ut perspiciatis Unde Omnis Iste Natus Error Sit Voluplatem',
                    blogAuthorImg: <img src="http://www.pixelprints.co.in/images/portfolio/graphic-design/logo/small/logo_3.png" alt="" />,
                    blogAuthor: 'Rob Robinson2',
                    title: 'Title',
                    blogDate: '2019.5.26',
                    blogTextwBtn: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of'

                },

                {
                    id: 2,
                    blogImg: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyqcEbtZy1vItK_jDT9iA-wqLmkj7nb8iYipzXcbMhAaovjhLOQ" alt="" />,
                    blogTitle: 'Sed Ut perspiciatis Unde Omnis Iste Natus Error Sit Voluplatem',
                    blogAuthorImg: <img src="http://www.pixelprints.co.in/images/portfolio/graphic-design/logo/small/logo_3.png" alt="" />,
                    blogAuthor: 'Rob Robinson3',
                    title: 'Title',
                    blogDate: '2019.5.27',
                    blogTextwBtn: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of'

                }

            ],

        };
    }
    
    render() {
        const { blogData } = this.state;
        return (
          <div className="main">
            <div className="divas">
              <Title />
              <div className="textBlock">
                <h3 className="intro1">pasirinkti pagal kategorijas</h3>
                <input className="search1" type="text" name="fname" placeholder="Visos" />
                
                {blogData.map((post, index) => (
                  <BlogPost key={post.id} arrayId={index} data={post} />))}
                      
              </div>
            </div>
          </div>
          );
    }
}

export default Blog; 

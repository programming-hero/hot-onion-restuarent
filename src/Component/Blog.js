import React from 'react';
import './Style.css';

import BlogData from '../Data/Blog';
import { useState } from 'react';
import BlogChild from './BlogChild';

const Blog = () => {
    const newData = BlogData; 
    const [blogData, setBlogData] = useState(newData); 
   
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>Why You Choose Us </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aspernatur veniam quo incidunt, et dolorem.</p>
                </div>
            </div>
            <div className="row mt-4">
            {
                blogData.map(bd=> <BlogChild bd={bd}></BlogChild>)
             }
       </div>
       </div>
    );
};

export default Blog;
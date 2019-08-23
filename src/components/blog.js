import React from "react"
import './blog.css';

function BlogTitle(props) {
    return(
        <div className="blog-post-title">
            <h2>Sample blog post</h2>
        </div>
    );
}

function BlogMeta(props) {
    return (
        <div className="blog-post-meta">
            <p>January 1, 2014 by <a href="#">Mark</a></p>
        </div>
    )
}

function Blog(props) {
    return (
        <div>
            <BlogTitle></BlogTitle>
            <BlogMeta></BlogMeta>
        </div>
    );
}
import React from "react"
import './blog.css';
import { Link } from "gatsby"


export default (props) => (
  <div className="blog-masthead">
   <div class="container">
        <nav class="blog-nav">
          <a class="blog-nav-item active" href="#">Home</a>
          <a class="blog-nav-item" href="#">New features</a>
          <a class="blog-nav-item" href="#">Press</a>
          <a class="blog-nav-item" href="#">New hires</a>
          <a class="blog-nav-item" href="#">About</a>
        </nav>
      </div>
   {props.children}
  </div>
)
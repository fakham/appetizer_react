import React from "react";

const BlogItem = props => {
  return (
    <div className="col-md-4">
      <div className="blog-entry">
        <a
          href="/"
          className="block-20"
          style={{ backgroundImage: `url(${props.img})` }}
        >
          {" "}
        </a>
        <div className="text pt-3 pb-4">
          <div className="meta">
            <div>
              <a href="/">{props.date}</a>
            </div>
            <div>
              <a href="/"> {props.owner}</a>
            </div>
          </div>
          <h3 className="heading">
            <a href="/">{props.title}</a>
          </h3>
          <p className="clearfix">
            <a href="/" className="float-left read">
              Read more
            </a>
            <a href="/" className="float-right meta-chat">
              <span className="icon-chat"></span> {props.comments}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

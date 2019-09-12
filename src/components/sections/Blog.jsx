import React from "react";
import image1 from "../../assets/images/image_1.jpg";
import image2 from "../../assets/images/image_2.jpg";
import image3 from "../../assets/images/image_3.jpg";
import image4 from "../../assets/images/image_4.jpg";
import image5 from "../../assets/images/image_5.jpg";
import image6 from "../../assets/images/image_6.jpg";
import BlogItem from "./common/BlogItem";

const posts = [
  {
    title: "Taste the delicious foods in Asia",
    date: "June 25, 2019",
    owner: "Admin",
    comments: 3,
    img: image1
  },
  {
    title: "Taste the delicious foods in Asia",
    date: "June 25, 2019",
    owner: "Admin",
    comments: 3,
    img: image2
  },
  {
    title: "Taste the delicious foods in Asia",
    date: "June 25, 2019",
    owner: "Admin",
    comments: 3,
    img: image3
  },
  {
    title: "Taste the delicious foods in Asia",
    date: "June 25, 2019",
    owner: "Admin",
    comments: 3,
    img: image4
  },
  {
    title: "Taste the delicious foods in Asia",
    date: "June 25, 2019",
    owner: "Admin",
    comments: 3,
    img: image5
  },
  {
    title: "Taste the delicious foods in Asia",
    date: "June 25, 2019",
    owner: "Admin",
    comments: 3,
    img: image6
  }
];

const Blog = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          {posts.map((item, index) => (
            <BlogItem key={index} {...item} />
          ))}
        </div>
        <div className="row no-gutters my-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li>
                  <a href="/">&lt;</a>
                </li>
                <li className="active">
                  <span>1</span>
                </li>
                <li>
                  <a href="/">2</a>
                </li>
                <li>
                  <a href="/">3</a>
                </li>
                <li>
                  <a href="/">4</a>
                </li>
                <li>
                  <a href="/">5</a>
                </li>
                <li>
                  <a href="/">&gt;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

import React from "react";
import Header from "../components/sections/Header";
import NavBar from "../components/sections/NavBar";
import Header2 from "../components/sections/Header2";
import Footer from "../components/sections/Footer";
import { default as BlogSection } from "../components/sections/Blog";

const Blog = () => {
  return (
    <>
      <Header />
      <NavBar page="Blog" />
      <Header2 title="Our Blog" subtitle="Blog" />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Blog;

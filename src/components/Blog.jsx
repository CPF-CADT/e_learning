import React from "react";
import Nav from "./Nav";
import userProfile from "../assets/profile.avif";
import "./style/Blog.css";
import { BackgroundBlogCard } from "./ReadBlogDisplay"
import { IMAGE_READING_BLOG } from "./style/BlogImge/BlogImage";
import { IMAGE_READING_BLOG2 } from "./style/BlogImge/BlogImage";
import { RelatedBlogIMG } from "./RelatedBlogIMG";

export default function Blog() {
  let userName = "Cheng Nhajor";
  return (
    <>
      <div className="blog-container">
        <Nav UserName={userName} ProfilePath={userProfile} isLogin={true} />
        
        <div className="spacer"></div>
        
        <div className="hero-section">
          <div className="text-content">
            <h3 className="hero-title">Title</h3>
            <h2 className="hero-subtitle">
              "Learning knows no bounds — with  e-learning, the classroom is wherever you are."
            </h2> 
            

            <button className="cta-button">
              Start Learning Now
            </button>
          </div>
          <div className="image-placeholder">hi</div>
        </div>
        <div className="flex ml-64 mt-5 ">
          <h4 className="read-blog">Reading blog list</h4>
          
        </div>
        <div className="flex justify-evenly gap-4 mt-5">
          {IMAGE_READING_BLOG.map((blog) => (
            <BackgroundBlogCard
              key={blog.id}
              image={blog.image} // Ensure this path is correct
              title={blog.title}
            />
          ))}
        </div>
        <div className="hero-section mt-20 flex flex-col">
          <span className="flex flex-row items-center justify-between w-full px-4">
            <h2 className="read-blog ml-46">Related Blog</h2> {/* Changed ml-35 to ml-8 */}
            <h4 className="text-xl cursor-pointer hover:underline  seeMore">See all</h4>
          </span>
          <div>jo</div>
         
        </div>
        <div className="flex justify-evenly gap-4 mt-5">
          {IMAGE_READING_BLOG2.map((blog) => (
            <RelatedBlogIMG
              key={blog.id}
              image={blog.image} // Ensure this path is correct
              title={blog.title}
              description={blog.description}
            />
          ))}
          </div>

       
        
      </div>
      
    </>
  );
}
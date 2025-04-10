import React from "react";
import Nav from "./Nav";
import userProfile from "../assets/profile.avif";
import "./style/Blog.css";
import { BackgroundBlogCard } from "./ReadBlogDisplay"
import { IMAGE_READING_BLOG } from "./style/BlogImge/BlogImage";
import { IMAGE_READING_BLOG2 } from "./style/BlogImge/BlogImage";
import { RelatedBlogIMG } from "./RelatedBlogIMG";
import 'primeicons/primeicons.css';
export default function Blog() {
  const heroImage = IMAGE_READING_BLOG2.find(blog => blog.id === 1)?.image;
  let userName = "Cheng Nhajor";
  return (
    <>
      <div className="blog-container">
        <Nav UserName={userName} ProfilePath={userProfile} isLogin={true} />
        
        <div className="spacer"></div>
        
        <div className="flex justify-evenly items-center  p-10 text-4xl font-semibold bg-sky-50">
          <div className="text-content ">
            <h3 className="hero-title">Title</h3>
            <h2 className="hero-subtitle">
              "Learning knows no bounds — with  e-learning, the classroom is wherever you are."
            </h2> 
            

            <button className="cta-button">
              Start Learning Now
            </button>
          </div>
          <div className="w-1/5 h-auto rounded-lg  ">
            <img
              className=""
              src={heroImage}
              alt="Placeholder"
            />
          </div>
        </div>
        <div>
        <div className="flex  mt-5 md:pl-33 *:pb-10 ">
          <h4 className="text-3xl font-semibold text-black mt-8 ">Reading blog list</h4>
          
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
        <div className="flex justify-around items-center p-10 text-4xl font-semibold bg-sky-50 mt-20  flex-col"> 
          <span className="flex flex-row items-center justify-between w-full px-4">
            <h2 className="text-3xl font-semibold text-black   md:ml-20">Related Blog</h2> {/* Changed ml-35 to ml-8 */}
            <h4 className="text-xl cursor-pointer hover:underline  seeMore">See all</h4>
          </span>
          <div className="flex justify-around gap-6 mt-5 w-full">
          {IMAGE_READING_BLOG2.map((blog) => (
            <RelatedBlogIMG
              key={blog.id}
              image={blog.image} // Ensure this path is correct
              title={blog.title}
              description={blog.description}
              text={blog.text} // Ensure this path is correct
            />
          ))}
          </div>
         <div className="flex justify-end gap-6 w-full  mt-5 ">

<i className="pi pi-chevron-left p-4  rounded-xl bg-teal-300 cursor-pointer hover:bg-teal-100 hover:scale-50 transition-transform duration-400" style={{ fontSize: '2rem',color:'black' }}></i>
<i className="pi pi-chevron-right p-4 rounded-xl bg-teal-300 cursor-pointer hover:bg-teal-100 hover:scale-50 transition-transform duration-400" style={{ fontSize: '2rem' ,color:'black' }}></i>
         </div>
          
         
        
        </div>
        <div>
        <div className="flex justify-around items-center p-10 text-4xl font-semibold  mt-20  flex-col">

        <span className="flex  justify-between items-center w-full px-4 md:*:pt-10">
            <h2 className="text-3xl font-semibold text-black   md:ml-20">Maketing Article</h2> {/* Changed ml-35 to ml-8 */}
            <h4 className="text-xl cursor-pointer hover:underline  seeMore">See all</h4>
          </span>
        </div>
        </div>


       
        </div>
      </div>
      
    </>
  );
}
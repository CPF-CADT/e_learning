import React from "react";

export default function AboutUs() {
  return (
    <>    
      <div className="text-center py-10 px-4 bg-white">
        <h3 className="text-gray-600 text-3xl">About Us</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Unveiling Our Identity, Vision and Values
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-4">
          At <span className="text-blue-600 font-semibold">Academic Skill Development Center</span>, we believe that education is the key to unlocking potential and transforming lives. Our mission is to provide high-quality, accessible, and engaging learning experiences that empower individuals to grow, innovate, and succeed in a rapidly evolving world.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <FeatureCard title="Safety" icon="🛡️" />
          <FeatureCard title="Efficient" icon="⚙️" />
          <FeatureCard title="Precision" icon="🎯" />
          <FeatureCard title="Innovation" icon="💡" />
        </div>
        
        <div className="mt-12 bg-blue-900 text-black py-12 px-6 rounded-xl flex flex-col md:flex-row gap-8 justify-center">
          <VisionMissionCard
            title="Vision"
            description="Our vision is to create a future where every student, regardless of their background, has equal access to technology and language education. We strive to break barriers in learning, ensuring that students from rural areas can confidently navigate the digital age and compete on a global stage."
          />
          <VisionMissionCard
            title="Mission"
            description="Our mission is to bridge the educational gap for students from the countryside by providing accessible, high-quality learning in ICT and English. We aim to empower underprivileged learners with the skills they need to thrive in a digital world, improve their communication abilities, and unlock new opportunities for education and employment."
          />
        </div>
      </div>

      <div className="bg-gray-50 text-center py-16 px-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-gray-700 text-3xl text-start">About Us</h3>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Introduction to <span className="text-blue-600">Best E-Learning</span>!
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-4">
          With our platform, students from rural areas gain the skills they need to succeed in school, work, and life. We are not just a learning platform—we are a movement to empower the next generation with the tools they need for a brighter future.
        </p>
      </div>
    </>
  );
}

function FeatureCard({ title, icon }) {
  return (
    <div className="flex items-center gap-2 bg-blue-100 text-blue-900 py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <span className="text-2xl">{icon}</span>
      <span className="text-lg font-semibold">{title}</span>
    </div>
  );
}

function VisionMissionCard({ title, description }) {
  return (
    <div className="bg-blue-800 p-6 rounded-lg max-w-lg text-left transition-transform transform hover:scale-105">
      <span className="bg-white text-blue-800 px-4 py-1 rounded-full font-semibold">{title}</span>
      <p className="mt-4 text-black">{description}</p>
    </div>
  );
}
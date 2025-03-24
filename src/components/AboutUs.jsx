import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-white text-center py-16 px-4">
      <h3 className="text-gray-600 text-lg">About Us</h3>
      <h2 className="text-3xl font-bold text-gray-900 mt-2">
        Unveiling Our Identity, Vision and Values
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mt-4">
        At <span className="text-blue-600 font-semibold">Academic Skill Development Center</span>, we believe that education is the key to unlocking potential and transforming lives. Our mission is to provide high-quality, accessible, and engaging learning experiences that empower individuals to grow, innovate, and succeed in a rapidly evolving world.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <FeatureCard title="Safety" icon="🛡️" />
        <FeatureCard title="Efficient" icon="⚙️" />
        <FeatureCard title="Precision" icon="🎯" />
        <FeatureCard title="Innovation" icon="💡" />
      </div>
      
      <div className="mt-12 bg-blue-900 text-white py-12 px-6 rounded-xl flex flex-col md:flex-row gap-8 justify-center">
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
  );
}

function FeatureCard({ title, icon }) {
  return (
    <div className="flex items-center gap-2 bg-blue-800 text-black py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-110">
      <span className="text-2xl">{icon}</span>
      <span className="text-lg font-semibold">{title}</span>
    </div>
  );
}

function VisionMissionCard({ title, description }) {
  return (
    <div className="bg-blue-800 p-6 rounded-lg max-w-lg text-left transition-transform transform hover:scale-105">
      <span className="bg-white text-blue-800 px-4 py-1 rounded-full font-semibold">{title}</span>
      <p className="mt-4 text-gray-200">{description}</p>
    </div>
  );
}
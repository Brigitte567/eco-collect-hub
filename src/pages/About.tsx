
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <PageLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">About EcoCollect</h1>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At EcoCollect, we're dedicated to revolutionizing waste management through 
              smart technology and sustainable practices. Our mission is to create cleaner, 
              healthier communities by making waste collection efficient, transparent, and 
              environmentally responsible.
            </p>
            <p className="text-gray-700">
              We believe that proper waste management is a cornerstone of environmental 
              stewardship and public health. By leveraging technology to optimize collection 
              routes, monitor bin status, and engage community participation, we're building 
              a future where waste management is seamless, efficient, and contributes to a 
              circular economy.
            </p>
          </CardContent>
        </Card>
        
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m4.9 4.9 14.2 14.2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Smart Technology</h3>
              <p className="text-gray-700">
                Using IoT sensors, GPS tracking, and data analytics to optimize waste 
                collection routes, monitor bin fill levels, and reduce operational costs.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m7 10 2 2 6-6"></path>
                  <path d="m7 16 2 2 6-6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Community Engagement</h3>
              <p className="text-gray-700">
                Empowering residents through accessible requesting, real-time updates, 
                and educational resources on proper waste separation and recycling.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M14 11c5.333 0 5.333-8 0-8"></path>
                  <path d="M6 11h8"></path>
                  <path d="M10 11v8"></path>
                  <path d="M14 15h-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Environmental Impact</h3>
              <p className="text-gray-700">
                Implementing sustainable waste management practices that reduce landfill 
                usage, promote recycling, and decrease carbon emissions from collection vehicles.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-700 mb-4">
              EcoCollect is powered by a dedicated team of environmental scientists, software 
              engineers, logistics experts, and community advocates. Together, we're working 
              to create innovative solutions to waste management challenges, with a focus on 
              sustainability, efficiency, and community well-being.
            </p>
            <p className="text-gray-700">
              We're always looking for passionate individuals to join our mission. If you're 
              interested in contributing to a cleaner future, please reach out through our 
              contact page.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default About;

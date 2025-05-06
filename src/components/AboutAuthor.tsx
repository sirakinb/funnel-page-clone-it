
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const AboutAuthor = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-10">About the Author</h2>
        
        <Card className="max-w-4xl mx-auto shadow-md border-0">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gray-100 flex justify-center items-center p-8">
                <Avatar className="h-52 w-52 rounded-full border-4 border-white shadow-lg">
                  <AvatarImage 
                    src="/lovable-uploads/2496c6b5-74fe-436e-b819-7bb36340ba9d.png" 
                    alt="Author" 
                    className="object-cover"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold mb-3">John Doe</h3>
                <p className="text-gray-600 font-semibold mb-3">AI Technology Expert & Author</p>
                
                <p className="text-gray-700 mb-4">
                  John Doe has spent the last decade at the intersection of technology and business, 
                  helping organizations adapt to rapidly changing technological landscapes.
                </p>
                
                <p className="text-gray-700 mb-4">
                  With experience working with Fortune 500 companies and startups alike, 
                  he brings a unique perspective on how AI is transforming work across industries.
                </p>
                
                <p className="text-gray-700">
                  Through this playbook, John shares practical strategies and insights to help you 
                  navigate the AI revolution and position yourself for success in this new era.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutAuthor;

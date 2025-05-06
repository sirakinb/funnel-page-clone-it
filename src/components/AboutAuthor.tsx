import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
const AboutAuthor = () => {
  return <section id="about-author" className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-10">About the Author</h2>
        
        <Card className="max-w-4xl mx-auto shadow-md border-0">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gray-100 flex justify-center items-center p-8">
                <Avatar className="h-52 w-52 rounded-full border-4 border-white shadow-lg">
                  <AvatarImage src="/lovable-uploads/2496c6b5-74fe-436e-b819-7bb36340ba9d.png" alt="Author" className="object-cover" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold mb-3">Akinyemi Bajulaiye</h3>
                <p className="text-gray-600 font-semibold mb-3">AI Entrepreneur</p>
                
                <p className="text-gray-700 mb-4">Akinyemi Bajulaiye is the Founder of Pentridge Media, an AI-powered Automation Agency that helps entrepreneurs and organizations build streamlined, effective business systems.</p>
                
                <p className="text-gray-700 mb-4">
                  Specializing in practical AI workflows, MVP development, and digital business infrastructures, 
                  Akinyemi accelerates his clients' growth while actively demystifying emerging technologies—equipping 
                  communities with the tools, knowledge, and confidence to thrive in a rapidly changing landscape.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Testimonials Section with more visual contrast */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">What Readers Are Saying</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-md bg-[#DC2626] text-white">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <p className="italic mb-4">
                    "You are literally one of the best at explaining these challenging for beginners ai tech concepts"
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <p className="font-semibold">Sheila Kay</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="border-0 shadow-md bg-[#DC2626] text-white">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <p className="italic mb-4">
                    "3 thumbs up. Very nicely broken down. Great resources and explanations given"
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <p className="font-semibold">Ron B</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutAuthor;
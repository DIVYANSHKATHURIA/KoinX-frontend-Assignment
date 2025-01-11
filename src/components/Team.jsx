import * as React from "react";
import TeamMember from "./TeamMember";
export const Team = () => {
    const teamMembers = [
        {
          image: "../assets/p1.png",
          name: "John Smith",
          designation: "Designation here",
          description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
        },
        {
          image: "../assets/p2.png",
          name: "Elina Williams",
          designation: "Designation here",
          description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
        },
        {
          image: "../assets/p3.png",
          name: "John Smith",
          designation: "Designation here", 
          description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
        }
      ];
    return(
      <div className="flex flex-col items-start pt-6 pb-11 pl-6 mt-5 w-full bg-white rounded-lg max-w-[881px] min-h-[776px] max-md:pl-5 max-md:max-w-full">
                  <div className="z-10 py-px w-full text-2xl font-semibold leading-tight whitespace-nowrap text-slate-900 max-md:pr-5">
                    Team
                  </div>
                  <div className="flex flex-col self-stretch mt-6 w-full text-base font-medium leading-7 text-zinc-700">
                    <div className="w-full max-md:max-w-full">
                      Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing
                      arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor
                      id pretium quam. Facilisis purus convallis quam augue.
                    </div>
                  </div>
                  {teamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                  ))}
                </div>
                
    );
};
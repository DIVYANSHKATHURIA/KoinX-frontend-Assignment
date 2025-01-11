import * as React from "react";

const TeamMember = ({ image, name, designation, description }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center p-3 mt-6 max-w-full bg-indigo-50 rounded-lg border-0 border-sky-500 border-solid w-[821px]">
        
      <div className="flex flex-col grow shrink items-center self-stretch my-auto text-center w-[103px]">
        
      </div>
      
      <div className="flex items-start my-auto text-sm leading-6 text-slate-900 w-[620px] max-md:max-w-full">
  {/* Left Section: Image with Name and Designation below */}
  <div className="flex flex-col items-center mr-4">
    <img 
      loading="lazy" 
      src={image} 
      alt={name} 
      className="object-contain w-24 rounded-lg aspect-[0.92]" 
    />
    <div className="text-base font-semibold text-slate-900 mt-3">{name}</div>
    <div className="mt-1 text-xs font-medium text-slate-500">{designation}</div>
  </div>

  {/* Right Section: Description */}
  <div className="flex-1 text-sm text-slate-900 mt-3">{description}</div>
</div>

    </div>
  );
};

export default TeamMember;
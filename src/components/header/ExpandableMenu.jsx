import React, { useState } from 'react';

const ExpandableMenu = ({ item, isSubmenu }) => {
  const [isExpanded, setIsExpanded] = useState(false); //If hoverd on the menu item it sets true

  return (
    <>
    {/* This is for above medium screen */}
      <div
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="relative max-md:hidden"
      >
        <div className={`cursor-pointer p-2 hover:bg-blue-500 hover:rounded hover:text-white transition-all delay-[10ms]`}>
          {item.name}
        </div>
        {isExpanded && item.subcategories.length > 0 && (
          <div className={`${isSubmenu ? 'absolute right-full top-0 max-md:relative max-md:left-5 max-md:top-0' : 'absolute right-0 top-full max-md:relative max-md:left-5 max-md:top-0'} w-48 bg-slate-50 max-md:bg-transparent max-md:shadow-none max-md:text-white  text-black shadow-lg rounded z-10 transition-all delay-[10ms]`}>
            {item.subcategories.map((subItem, index) => (
              <ExpandableMenu key={index} item={subItem} isSubmenu={true} />
            ))}
          </div>
        )}
      </div>
      
      {/* For medium screen and smaller  in this the subcategories are visible on clicking of parent category*/}
      <div
        className="relative md:hidden"
      >
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className={`cursor-pointer p-2 hover:bg-blue-500 hover:rounded hover:text-white transition-all delay-[10ms]`}>
          {item.name}
        </div>
        {isExpanded && item.subcategories.length > 0 && (
          <div className={`${isSubmenu ? 'absolute right-full top-0 max-md:relative max-md:left-5 max-md:top-0' : 'absolute right-0 top-full max-md:relative max-md:left-5 max-md:top-0'} w-48 bg-slate-100 max-md:bg-transparent max-md:shadow-none max-md:text-white  text-black shadow-lg rounded z-10 transition-all delay-[10ms]`}>
            {item.subcategories.map((subItem, index) => (
              <ExpandableMenu key={index} item={subItem} isSubmenu={true} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ExpandableMenu;

import React, { useEffect, useState } from 'react';
import ExpandableMenu from './ExpandableMenu';
import categoriesData from '../../data/categories.json';
import TypeaheadSearch from './TypeaheadSearch';

const Navbar = () => {
  const [categories, setCategories] = useState([]); //It stores json data 
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu is open or not

  useEffect(() => {
    setCategories(categoriesData.categories);
  }, []);

  const allItems = categoriesData.categories.flatMap(category => [
    category,
    ...category.subcategories.flatMap(subcategory => [subcategory, ...subcategory.subcategories])
  ]); //Taking all the categories and subcategories from the json data and stores each categories/subcategories info data into array of object format

  
  return (
    <nav className=" w-full flex flex-wrap justify-around items-center sm:space-x-5 max-sm:flex-col max-sm:space-y-5">
      {/* logo */}
      <div className="flex items-center"><span className='font-bold text-2xl max-xl:ml-5 max-lg:ml-0'>Logo</span></div>
      {/* SearchBar */}
      <div className='w-full max-w-xs max-sm:max-w-full '>
        <TypeaheadSearch items={allItems} />
      </div>
      {/* category */}
      {/* Shows for above medium size screen */}
      <div className=" text-white flex justify-around space-x-10 max-2xl:space-x-5 max-xl:w-full max-xl:justify-center max-xl:pt-7 max-xl:font-medium max-lg:space-x-1 max-md:hidden">
        {categories.map((category, index) => (
          <ExpandableMenu key={index} item={category} />
        ))}
      </div>
      {/* Hamburger menu shown on medium screens */}
      <div className="flex md:hidden max-sm:hidden items-center space-x-5 z-10">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white "
        >
          {isMenuOpen ? <svg
            className="w-9 h-9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg> : <svg
            className="w-9 h-9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>}
        </button>
      </div>
      {/* Triangle shows on small screen */}
      <div className=" w-full flex sm:hidden items-center justify-center z-10">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white "
        >
          <svg
            className={`w-6 h-6 transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden max-md:pb-20 max-sm:pb-16 absolute w-full right-[0.01rem] top-0 bg-gray-800 h-auto transition-all duration-500 max-sm:top-28'>
          <div className=" flex flex-col space-y-3 relative top-14 left-14 max-sm:top-8 transition-all duration-500">
            {categories.map((category, index) => (
              <ExpandableMenu key={index} item={category} isSubmenu />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

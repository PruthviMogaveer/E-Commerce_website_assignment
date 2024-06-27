import React from 'react';
import Navbar from './components/header/Navbar';
import Banner from './components/header/Banner';


const App = () => {
  

  return (
    <div className=''>
      <header className="bg-blue-600 shadow-xl sticky top-0 text-white p-4 flex justify-between items-center z-20">
        <Navbar />
      </header>
      <section className='my-8 mx-4'>
      <Banner/>
      </section>
      
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to our Shop</h1>
       
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default App;

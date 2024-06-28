import React from 'react';
import Navbar from './components/header/Navbar';
import Banner from './components/header/Banner';
import Category from './components/Category';
import Footer from './components/footer/Footer';

const App = () => {


  return (
    <div className=''>
      <header className="bg-blue-600 shadow-xl sticky top-0 text-white p-4 flex justify-between items-center z-20">
        <Navbar />
      </header>
      <section className='my-8 mx-4 max-lg:hidden'>
        <Banner />
      </section>

      <main className="p-4">
        <Category />
        {/* Main content goes here */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

import React from 'react';
import Navbar from './components/header/Navbar';


const App = () => {
  

  return (
    <div>
      <header className="bg-blue-600 shadow-xl sticky top-0 text-white p-4 flex justify-between items-center">
        <Navbar />
      </header>
      
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to our Shop</h1>
        {/* Main content goes here */}
      </main>
    </div>
  );
};

export default App;

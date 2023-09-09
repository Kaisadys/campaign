// src/App.tsx
import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Titles: React.FC = () => {
 

  return (
    
    <div style={{
      display: "flex",
      alignItems: "center",
      marginLeft:220,
      height: "100%"
    }}>
     <ul className='vertical-list'>
     <li className='customers'>
       Customers
       </li>

       <li className='see-you-all'>
      See all your customers in one place 
       </li>

     </ul>
      
      
    </div>
  );
};

export default Titles;

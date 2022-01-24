import React from 'react';
import { Carasoul } from '../Components/Carasoul';
import { HomeCard } from '../Components/HomeCard';

export const Home = () => {
  return <div>
        <div style={{borderBottom:'3px solid green'}}></div>
      <Carasoul />
      <div style={{borderBottom:'3px solid green'}}></div>
      <h1 style={{textAlign:'center',margin:'100px 0px 20px 100px',color:'black'}}>A proud history of service and quality</h1>
      <div className='red-line'></div>
      <div style={{margin: '30px'}}>
      <p className='paragraph' style={{textAlign:'center',margin:'auto', width:'35%'}}>Euro Foods Group is a leading international manufacturer and distributor of frozen and fresh foods, serving the restaurant, catering and specialist supermarket sectors.</p>
     
     <p className='paragraph' style={{textAlign:'center', margin:'auto',width:'35%'}}>Established in 1991, the company began the journey by supplying the Indian restaurants and takeaways in Wales and the West Country. With hard work and determination the business then developed rapidly, and the supply chain became national.</p>
      </div>
     <div className='green-line'></div>
      <HomeCard/>
  </div>;
};

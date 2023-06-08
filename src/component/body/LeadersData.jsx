import React from 'react';
import './Leaders.css';
import Biniyam from'./Biniyam.JPG'

const leadersData = [
  {
    id: 1,
    name: 'Bekele',
    photo:Biniyam,
  },
  {
    id: 2,
    name: 'Bekele',
    photo: Biniyam,
  },
  {
    id: 2,
    name: 'Bekele',
    photo: Biniyam,
  },
  {
    id: 2,
    name: 'Bekele',
    photo: Biniyam,
  },
  {
    id: 2,
    name: 'Bekele',
    photo: Biniyam,
  },{
    id: 2,
    name: 'Bekele',
    photo: Biniyam,
  },{
    id: 2,
    name: 'Bekele',
    photo: Biniyam,
  },{
    id: 2,
    name: 'Bekele',
    photo: Biniyam,
  }]

const LeadersData = () => {
  return (
   
    <div id='leaders-main-container'>
    <h2 className='leaders-title'>Our Leaders</h2>
    <div className="leaders-container">
 
     
      {leadersData.map((leader) => (
        <div className="leader-item" key={leader.id}>
          <img src={leader.photo} alt={leader.name} className="leader-photo" />
          <div className="leader-name">{leader.name}</div>

          
          
        </div>
        
      ))}
    </div>
    </div>
    
  );
};

export default LeadersData;



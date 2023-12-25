import React from 'react'
import Balkumaransir from "./assets/teammember/balakumaran.svg"
import Shansir from "./assets/teammember/shan_a.svg"
import Sidhumam from "./assets/teammember/sidhubhavani.svg"
import Allansir from "./assets/teammember/allankiran.svg"
import Maheshsir from "./assets/teammember/Maheshmohan.svg"
import "./styles/team.css"


const persons = [
  {
    image: Balkumaransir,
    name: 'balakumaran',
    position: 'chief executive officer',
  },
  { image: Shansir, name: 'shan a', position: 'chief operating officer' },
  {
    image: Sidhumam,
    name: 'sindhu bhavani',
    position: 'chief admin officer',
  },
  {
    image: Allansir,
    name: 'allan kiran dias',
    position: 'chief business officer',
  },
  {
    image: Maheshsir,
    name: 'mahesh mohan',
    position: 'chief financial officer',
  },
];

function Team() {
  return (
    <div className='team__container'>
      <h1 className='team__heading'>SilverLine Team</h1>
      <div className='team__content__container'>{persons.map((i,ind)=>(
        <IndividualCard key={ind} image={i.image} name={i.name} position={i.position} />
      ))}</div>
    </div>
  );
}

function IndividualCard({image,name, position}){
    return (
      <div className="team__card">
        <img className="img__style" src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
    );
} 

export default Team
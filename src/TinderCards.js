import React,{useState} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
    const [people,setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Jeff_Bezos_2016_crop.jpg"
        }
    ])

    const swiped = (direction,nameToDelete)=>{
        console.log("removing ",nameToDelete);
       // setLastDirection(direction);
    }
    const outOfFrame = (name)=>{
        console.log(name +" left the screen");
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
               
            {people.map(person=>
                <TinderCard className="swipe"
                key={person.name} preventSwipe={["up","down"]}
                onSwipe={(dir)=>swiped(dir,person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}>
                    <div className="card" style={{backgroundImage:"url(" + person.url +")"}}>
            <h3>{person.name}</h3></div> 
                </TinderCard>
            )}
            
            </div>
           
        </div>
    );
};

export default TinderCards;
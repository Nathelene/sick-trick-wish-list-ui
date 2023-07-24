import './Trick.css'


export default function Tricks({tricks}) {

const allTricks = tricks.map(trick => {
    return  (
        <div className="trick-card" key={trick.name}>

               <p>{trick.name}</p> 
               <p>Obstacle: {trick.obstacle}</p>
               <p>Link to Tutorial: {trick.tutorial}</p> 
               <p>{trick.stance}</p>
        </div>
  
    )
})


    return (

        <div className='trick-container'>
            <h1>{allTricks}</h1>
        </div>
    )
}
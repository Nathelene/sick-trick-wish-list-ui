import './Trick.css'


export default function Tricks({tricks}) {

const allTricks = tricks.map(trick => {
    return  (
        <div className="trick-card" key= {Date.now()}>

               <p>{trick.name}</p> 
               <p>Obstacle: {trick.obstacle}</p>
               <p>Link to Tutorial: {trick.tutorial}</p> 
               <p className={trick.stance}></p>
        </div>
    )
})


    return (

        <div className='trick-container'>
            {allTricks}
        </div>
    )
}
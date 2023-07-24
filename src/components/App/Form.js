import { useState } from 'react'

export default function Form({addNewTrick}) {
const [stance, setSelectedStance] = useState('regular')
const [name, setName] = useState("")
const [obstacle, setSelectedObstacle] = useState('flatground')
const [tutorial, setLink] = useState("")


function submit(event) {
event.preventDefault()
    const newTrick = {
        key: Date.now(),
        stance: stance,
        name: name,
        obstacle: obstacle,
        tutorial: tutorial
    }

    addNewTrick(newTrick)
}



    return (
        <form>
            <select name="stance" value={stance}
            onChange={e => setSelectedStance(e.target.value)}>
                <option value='regular'>Regular</option>
                <option value='switch'>Switch</option>
            </select>

            <input 
            type='text' 
            value={name} 
            placeholder='Name of Trick'
            onChange={e => setName(e.target.value)}/>

            <select name="obstacle" value={obstacle}
            onChange={e => setSelectedObstacle(e.target.value)}>
                <option value='flatground'>Flatground</option>
                <option value='ledge'>Ledge</option>
                <option value='rail'>Sail</option>
                <option value='stair'>Stairs</option>
                <option value='pool'>Pool</option>
            </select>

            <input 
            type='text' 
            value={tutorial} 
            placeholder='Link to Tutorial'
            onChange={e => setLink(e.target.value)}/>
            <button onClick={submit}>Send it!</button>
            
        </form>
     
    )

    
}
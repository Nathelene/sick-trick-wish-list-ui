import { useState } from 'react'


export default function Form({addNewTrick}) {
const [stance, setSelectedStance] = useState('regular')
const [name, setName] = useState("")
const [obstacle, setSelectedObstacle] = useState('flatground')
const [tutorial, setLink] = useState("")

function postTrick(newTrick) {
    return fetch('http://localhost:3001/api/v1/tricks', {
        method: 'POST',
        body: JSON.stringify(newTrick),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}


function submit(event) {
    postTrick({
        key: Date.now(),
        stance: stance,
        name: name,
        obstacle: obstacle,
        tutorial: tutorial
    }).then(data => {
        console.log('TRICK ADDED')
        addNewTrick(data);
    });
};


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
            name = 'name'
            placeholder='Name of Trick'
            onChange={e => setName(e.target.value)}/>

            <select name="obstacle" 
                    value={obstacle}
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
            name="tutorial"
            onChange={e => setLink(e.target.value)}/>
            <button onClick={submit}>Send it!</button>

        </form>
    )
};
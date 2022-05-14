import { useState, useEffect } from 'react';
import Group from './Group';
import { months, calcButtonTextColor } from '../tools';

function renderMonthOptions() {
    return months.getMonths().map( (m, i) => {
        return <option
            key={i}
            value={i}
        >
            {m.shortName}
        </option>
    });
}

function bound(value, floor, ceil) {
    return Math.min(ceil, Math.max(value, floor));
}

const EditableUserProfile = (props) => {

    const stored = props.stored
    const editCompleteCallback = props.editCompleteCallback

    console.log("Edit User Profile");

    const [name, setName] = useState(stored.name);
    const [month, setMonth] = useState(stored.month);
    const [day, setDay] = useState(stored.day);
    const [color, setColor] = useState(stored.color);
    const [uid, setUid] = useState(stored.uid);
    const [dept, setdept] = useState(stored.dept);
    const [phone, setPhone] = useState(stored.phone);

    const maxDay = months.getMaxDays(month);

    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editCompleteCallback({name, month, day, color, uid});
    }

    useEffect(() => {
        setDay(bound(day, 1, maxDay));
    }, [month]);

    const buttonStyle = {
        backgroundColor: color,
        color: calcButtonTextColor(color)
    };

    calcButtonTextColor(color);

    return <>
        <Group>
            <h1><i style={{height: "50%"}} class='bx bxs-user-circle bx-tada' ></i></h1>
        </Group>
        <Group>            
            <h2>Name:
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            /></h2>         
        </Group><br></br>
        <Group>            
            <h2>Birthday:            
            
            <select
                value={month}
                onChange={e => setMonth(bound(e.target.value, 0, 11))}
            >
                {renderMonthOptions()}
            </select>
            <input
                type='number'
                value={day}
                onChange={e => setDay(bound(e.target.value, 1, maxDay))}
                style={{width: "50px"}}
            /></h2>
        </Group><br></br>
        <Group>            
            <h2>Favourite Color:
            <input
                type="color"
                value={color}
                onChange={e => setColor(e.target.value)}
            /></h2>
        </Group><br></br>
        <Group>
            <h2>User ID:
                <input 
                    type="text"
                    value={uid}
                    onChange={e => setUid(e.target.value)}
                /></h2>
        </Group><br></br>
        <Group>
            <h2>Department:
                <input 
                    type="text"
                    value={dept}
                    onChange={e => setdept(e.target.value)}
                /></h2>
        </Group><br></br>
        <Group>
            <h2>Mobile Number:
                <input 
                    type="number"
                    value={phone}
                    onChange={e => setPhone(bound(e.target.value, 0, 1000000000))}
                /></h2>
        </Group><br></br>
        <Group>
            <button style={buttonStyle} onClick={handleSaveClicked}>Save</button>
        </Group>
        <Group>
            <button style={buttonStyle} onClick={handleCancelClicked}>Cancel</button>
        </Group>
    </>
}

export default EditableUserProfile
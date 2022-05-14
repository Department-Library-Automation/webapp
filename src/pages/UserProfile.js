import { useState } from 'react';
import Group from './Group';
import ColorBox from './ColorBox';
import { months, calcButtonTextColor } from './tools';

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    console.log()

    const buttonStyle = {
        backgroundColor: stored.color,
        color: calcButtonTextColor(stored.color)
    };

    return <div>
        <Group>
        <h1><i style={{height: "50%"}} class='bx bxs-user-circle bx-tada' ></i></h1>
        </Group>
        <Group>
            <h2>Name: {stored.name} </h2>
        </Group><br></br>
        <Group>
            <h2>Birthday: {months.getShortName(stored.month)} {stored.day} </h2>
        </Group><br></br>
        <Group>
            <h2>Favourite Color: <ColorBox color={stored.color}/> </h2>
        </Group><br></br>
        <Group>
            <h2>User ID: {stored.uid}CB.EN.U4CSE19610</h2>
        </Group><br></br>
        <Group>
            <h2>Department: CSE</h2>
        </Group><br></br>
        <Group>
            <h2>Mobile Number: 8667721728</h2>
        </Group>

        <Group>
            <button
                style={buttonStyle}
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}
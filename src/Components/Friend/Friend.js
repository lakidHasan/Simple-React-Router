import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const history = useHistory()
    const {id, name, phone, website, address} = props.friend;
    const friendStyle = {
        border : '3px solid goldenrod',
        padding : '10px',
        borderRadious : '10px'
    };
    const handleFriendClicked = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h2>I am: {name} </h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
            <Link to={`/friend/${id}`} >Visit Me</Link>
            <br />
            <Link to={`/friend/${id}`}>
            <button>Visit me</button>
            </Link>
            <br />
            <button onClick={handleFriendClicked}>Visit me 2</button>
        </div>
    );
};

export default Friend;
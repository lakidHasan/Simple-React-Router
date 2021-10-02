import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend ] = useState({});
    useEffect(()=>{
      const url= `https://jsonplaceholder.typicode.com/users/${friendId}`;
      fetch(url)
      .then(res => res.json())
      .then(data=>setFriend(data));
    } ,[])
    return (
        <div>
            <h3>Friend detail of: {friendId}</h3>
            <h2> Name: {friend.name}</h2>
            <h2>Phone: {friend.phone}</h2>
            <p>work on: {friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;
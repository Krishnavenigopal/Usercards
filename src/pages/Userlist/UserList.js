import React ,{useEffect, useState}from 'react'
import { SocialCard } from '../../components/molecules/SocialCard/SocialCard';
import './UserList.css'


export default function UserList()  {
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const[endIndex, setEndIndex] = useState(0)
   

    useEffect( () => {
       (async () => {
        let userData;
        try {
            const response= await fetch(`https://randomuser.me/api/?results=10`);
            userData = (await response.json()).results;
        } catch (error) {
            console.log(error);
            userData=[];
        }
        setUsers(userData);
        setAllUsers(userData);
       })();
    },[endIndex]);

    const filterCards = event => {  
        const value = event.target.value.toLowerCase();
        const filteredUsers = allUsers.filter(
          user => (`${user.name.first} ${user.name.last}`
          .toLowerCase()
          .includes(value.toLowerCase()))
        );
        setUsers(filteredUsers);
      };

    return (
        <div className='user_page' >
            <div className='headings'>
            <h1>Users List</h1>
            </div>
            <input className='search-box' placeholder='Enter name...' onInput={filterCards}/> 
           <div className='container' >
            {users.map((users, index) => (
                <SocialCard userData={users} key={index} index={index}></SocialCard>
            ))}
        </div> 
        </div>
    );

}


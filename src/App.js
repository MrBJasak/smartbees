import './App.css';
import { API_URL } from './components/util/api';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import Form from './components/Form';
import DataToFile from './components/DataToFile';

function App() {
    const [users, setUsers] = useState([]);
    const [order, setOrder] = useState('ASC');
    const getRandomAge = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleRemove = (id) => {
        const newList = users.filter((item) => item.id !== id);
        setUsers(newList);
    };

    const handleSort = (col) => {
        if (order === 'ASC') {
            const sorted = [...users].sort((a, b) => (a[col] > b[col] ? 1 : -1));
            setUsers(sorted);
            setOrder('DSC');
        }
        if (order === 'DSC') {
            const sorted = [...users].sort((a, b) => (a[col] < b[col] ? 1 : -1));
            setUsers(sorted);
            setOrder('ASC');
        }
    };
    useEffect(() => {
        axios.get(API_URL).then((result) => {
            const userList = result.data;
            const arrayOfUsers = [];
            userList.forEach((element) => {
                const id = element.id;
                const firstAndLastName = element.name.split(' ');
                const firstName = firstAndLastName[0];
                const lastName = firstAndLastName[1];
                const city = element.address.city;
                const age = getRandomAge(20, 60);
                arrayOfUsers.push({
                    id: id,
                    firstName: firstName,
                    lastName: lastName,
                    city: city,
                    age: age,
                });
            });

            setUsers(arrayOfUsers);
        });
    }, [setUsers]);

    return (
        <div>
            <UserList userList={users} handleSort={handleSort} handleRemove={handleRemove} />
            <Form users={users} setUsers={setUsers} />
            <DataToFile dataToDownload={users} />
        </div>
    );
}

export default App;

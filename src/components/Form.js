import React, { useState, useRef } from 'react';
const Form = ({ users, setUsers }) => {
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const ageRef = useRef('');
    const cityRef = useRef('');

    const handleAddUser = (data) => {
        const lastUser = users[users.length - 1];
        const firstName = data.firstName;
        const lastName = data.lastName;
        const age = data.age;
        const city = data.city;
        const dataObj = { id: lastUser.id + 1, firstName, lastName, city, age };
        if (
            firstName.length === 0 ||
            lastName.length === 0 ||
            lastName.length === 0 ||
            age.length === 0 ||
            city.length === 0
        ) {
            alert('Please Add some info');
        }
        setUsers((prevUser) => {
            return [...prevUser, dataObj];
        });
    };

    const submitFormHandler = (event) => {
        event.preventDefault();

        handleAddUser({
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            age: ageRef.current.value,
            city: cityRef.current.value,
        });
        firstNameRef.current.value = '';
        lastNameRef.current.value = '';
        ageRef.current.value = '';
        cityRef.current.value = '';
    };

    return (
        <form onSubmit={submitFormHandler}>
            <h3>Add new user</h3>
            <label htmlFor={'firstName'}>
                First Name:
                <input id={'firstName'} type="text" ref={firstNameRef} required />
            </label>
            <label htmlFor={'lastName'}>
                Last Name:
                <input id={'lastName'} type="text" ref={lastNameRef} required />
            </label>
            <label htmlFor={'age'}>
                Age:
                <input id={'age'} type="text" ref={ageRef} required />
            </label>
            <label htmlFor={'city'}>
                City:
                <input id={'city'} type="text" ref={cityRef} required />
            </label>
            <button type="submit">Add User</button>
        </form>
    );
};

export default Form;

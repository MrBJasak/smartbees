import React from 'react';

const UserList = ({ handleSort, userList, handleRemove }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td
                        onClick={() => {
                            handleSort('id');
                        }}
                    >
                        Id
                    </td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td
                        onClick={() => {
                            handleSort('age');
                        }}
                    >
                        Age
                    </td>
                    <td
                        onClick={() => {
                            handleSort('city');
                        }}
                    >
                        City
                    </td>
                    <td>Remove</td>
                </tr>
            </thead>
            <tbody>
                {userList.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                        <td>{user.city}</td>
                        <td>
                            <button onClick={() => handleRemove(user.id)}>Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserList;

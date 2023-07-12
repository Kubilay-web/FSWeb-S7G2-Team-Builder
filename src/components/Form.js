import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        const newTeamMember = {
            name: name,
            email: email,
            role: role,
        };


        onSubmit(newTeamMember);


        setName('');
        setEmail('');
        setRole('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Role:
                <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;

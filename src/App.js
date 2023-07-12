import React, { useState } from 'react';
import Form from './components/Form';

const App = () => {
  const [teamList, setTeamList] = useState([]);

  const handleFormSubmit = (newTeamMember) => {
    setTeamList([...teamList, newTeamMember]);
  };

  return (
    <div>
      <h1>Team Members</h1>
      <ul>
        {teamList.map((member, index) => (
          <li key={index}>
            {member.name} - {member.email} - {member.role}
          </li>
        ))}
      </ul>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;


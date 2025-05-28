"use client";
import { useState } from 'react';

export default function UserForm() {
  const [user, setUser] = useState({ name: '', email: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted user:", user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={user.name} onChange={handleChange} placeholder="Name" /><br />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" /><br />
      <input name="age" value={user.age} onChange={handleChange} placeholder="Age" /><br />
      <button type="submit">Submit</button>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </form>
  );
}

import { useState } from "react";
import "./UserForm.css";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, age, subscribe };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setAge("");
    setSubscribe(false);
  };

  return (
    <div className="form-page">
      <h2>User Registration Form</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama:</label>
          <input
            type="text"
            placeholder="Masukkan nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Usia:</label>
          <input
            type="number"
            placeholder="Masukkan usia"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
          />
          <label> Subscribe to newsletter</label>
        </div>

        <button type="submit">Tambah User</button>
      </form>

      <div className="user-list">
        <h3>Registered Users ({users.length})</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} ({user.email}) - {user.age} tahun{" "}
              {user.subscribe && "📧"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserForm;

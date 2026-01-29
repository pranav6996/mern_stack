import { useState } from "react";

export default function CreateChat({ onCreate, onClose }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Create Chat</h3>

        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <button onClick={() => onCreate({ email, name })}>
          Create
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label className='container-fluid2'>
          Enter your name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label className='container-fluid2'>
          Enter your email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <div>
        <label className='container-fluid2'>
          Message Box:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <input className='container-fluid3' type="submit" />
      </div>
      
    </form>
  )
}
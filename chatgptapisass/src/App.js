import React, { useState } from "react";
import './App.css';


function App() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
        .then((res) => res.json())
        .then((data) => setResponse(data.message));
    };

    return (
        <div className="App">
            <h1>Tinder Seducer</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">I'm a Shark and I m looking for a fish</label>
                    <input  value={message}
                            placeholder="Enter your message my snakebite"
                            onChange={(e) => setMessage(e.target.value)}
                            type="text" id="large-input"
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <button type="submit">Send</button>
            </form>
            {response && <div>: { response}</div>}
    </div>
    );
}
export default App;

import React, { useState } from 'react';
 
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Send a POST request
        const loginRequest = { username, password };

        try {
            const postResponse = await fetch('http://localhost:8080/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginRequest),
            });
            const postData = await postResponse.json();
            console.log('POST Success:', postData);
            alert('POST Login successful: ' + JSON.stringify(postData));
        } catch (error) {
            console.error('POST Error:', error);
            alert('POST Login failed');
        }

        // Send a GET request
        try {
            const getResponse = await fetch(`http://localhost:8080/form?username=${username}&password=${password}`);
            const getData = await getResponse.json();
            console.log('GET Success:', getData);
            alert('GET Login successful: ' + JSON.stringify(getData));
        } catch (error) {
            console.error('GET Error:', error);
            alert('GET Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;

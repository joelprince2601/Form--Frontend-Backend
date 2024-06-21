document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginRequest = {
        username: username,
        password: password
    };

    fetch('http://localhost:8080/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginRequest)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Login successful: ' + JSON.stringify(data));
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Login failed');
    });
});

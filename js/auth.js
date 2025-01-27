fetch('/api/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to login');
    }
    return response.json();
})
.then(data => {
    localStorage.setItem('token', data.token);
    window.location.href = 'home.html';
})
.catch(error => console.error('Error:', error));

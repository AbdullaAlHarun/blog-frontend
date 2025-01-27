document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error('Error: Failed to login');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        window.location.href = 'home.html';
    } catch (error) {
        console.error('Error:', error);
    }
});
